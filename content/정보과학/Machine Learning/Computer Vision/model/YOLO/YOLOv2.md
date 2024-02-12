---
tags: 
Architecture: true
Training: false
---
## 1. Architecture
논문에서는 기존의 [[YOLOv1]]의 성능을 향상시키기 위한 메소드를 정확도(better), 속도(faster), class 개수(stronger) 등으로 나눠 소개하였기 때문에 이를 따라 정리하였다.
### 1.1. Better
#### 1.1.1. [[Normalization#Batch Normalization|Batch Normalization]]
모든 [[Convolutional Layer]]에 batch normalization을 추가함으로써 이전 layer의 parameter 변화로 인해 데이터의 입력 분포가 바뀌는 현상을 방지하였다.
#### 1.1.2. High Resolution Classifier
feature map을 추출할 때 사용하는 backbone 모델은 보통 classification을 수행하기 때문에 low resolution 이미지를 사용하여도 되었으나 object detection을 위해서는 high resolution 이미지를 사용하는 것이 적합하기 때문에 $224 \times 244$의 이미지를 사용하던 네트워크를 $448 \times 448$로 fine tuning하였다.
#### 1.1.3. Convolutional With Anchor Box
![[YOLOv2_Structure.png]]
[[Fully Connected Layer]]를 [[Convolutional Layer]]로 대체하였으며 원본 이미지를 $S \times S$의 grid로 나눈 뒤 각 grid cell별로 5개의 anchor box를 예측한다. output tensor는 각 anchor box에 대한 $(x, y, w, h)$와 각 class에 대한 probability를 포함한다.
#### 1.1.4. Dimension Clusters
[[Faster R-CNN]]에서는 anchor box의 ratio와 size를 미리 정해주었는데, YOLO v2에서는 [[K-means Clustering]]을 통해 ground truth와 유사한 optimal anchor box를 탐색하였다. 이때 euclidian 거리 대신 IoU를 기준으로 clustering하는데, 이는 bounding box의 중심 거리와 높이, 너비 등을 모두 고려하기 위함이다.
#### 1.1.5. Direct Location Prediction
[[Bounding Box Regression]] 과정에서 bounding box의 중심 좌표를 다음과 같이 sigmoid를 통해 계산하여 grid cell을 벗어나지 않도록 하였다.
$$\begin{align}
b_{x} &= \sigma(t_{x})+c_{x}\\
b_{y} &= \sigma(t_{y})+c_{y}
\end{align}$$

#### 1.1.6. Fine-Grained Features
$13 \times 13$ feature map으로는 작은 객체를 검출하기 어렵기 때문에 $26 \times 26$ feature map을 resize하여 concatenate하는 passthrough layer를 추가하였다.
#### 1.1.7. Multi-Scale Triaining
fully connected layer 대신 convolutional layer를 사용하기 때문에 input size가 고정적이지 않아도 되다. 따라서 10 batch 마다 input size를 랜덤하게 변경하여 학습시켰다.
### 1.2. Faster
#### 1.2.1. DarkNet-19
##### 1.2.1.1. [[Global Average Pooling]]
### 1.3. Stronger
#### 1.3.1. Hierarchial Classification
directed graph 형태의 ImageNet을 공통 root를 갖는 label끼리 묶어 WordTree를 구성한 뒤 classification 과정에서 조건부 확률을 통해 loss를 구할 수 있도록 하였다.
#### 1.3.2. Joint Classification and Detection
object detection을 위한 이미지를 학습시키는 경우 평소와 같이 loss를 사용하여 backpropagation을 수행하며 classification loss는 앞서 구성한 WordTree를 사용한다. classification 이미지에 대해서는 ground truth와의 IoU가 0.3 이상인 경우에만 classification loss에 대한 backpropagation을 수행한다.