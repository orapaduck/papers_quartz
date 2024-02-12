---
tags: 
Architecture: true
Training: false
---
기존의 [[Fast R-CNN]]은 region proposal 과정에서 CPU 기반의 [[Selective Search]]와 같은 방식을 사용하였기 때문에 bottleneck으로 작용하였으나 Faster R-CNN에서는 Region Proposal Network를 GPU에서 연산함으로써 해결하였다. 

## 1. Architecture
### 1.1. [[Convolutional Layer]]
#### 1.1.1 [[VGGNet]]
$600\times1000\times3$ 이미지를 입력 받아 $W \times H \times 512$ conv feature map을 출력한다.
### 1.2. Region Proposal Network
Fast-RCNN에서는 Region proposal과 CNN을 통한 feature map 추출이 별도로 진행되었으나 이러한 conv feature map을 region proposal에 사용할 수 있음을 확인하였다. 따라서 몇 개의 convolutional layer를 추가함으로써 region proposal, [[Bounding Box Regression|Bounding Box Regression]] 그리고 classification에 대한 scoring을 동시에 수행하도록 하였다.
#### 1.2.1. Anchor
고정된 크기의 bounding box를 사용하는 경우 다양한 크기의 object를 인식하지 못하는 문제가 발생할 수 있다. 따라서 사전에 정의된 다양한 scale 및 aspect ratio를 만족하는 anchor box를 생성한다. aspect ratio가 1:2인 경우 anchor box의 크기는 다음과 같이 구할 수 있다. 
$$
\begin{align}
W\times H&=scale=s^2\\
2W&=H  \\
W&=\frac{s}{\sqrt{2}}\\
H&=\sqrt{2}s
\end{align}
$$
이때 $k$는 가능한 anchor box의 수로 $scale\times aspect~ratio$이다. VGG-16에서 출력된conv feature map의 사이즈가 $W\times H\times512$이므로 anchor box는 $W \times H \times k$개가 생성된다.
[[Non-Maximum Suppression]] 과정에서 높은 IoU를 갖는 anchor box에 할당한다.
##### 1.2.1.2. Box-Classification Layer
$9\times2$개의 $1\times1$ kernel로 구성된 layer로, 해당 anchor box의 각 픽셀에 object가 존재할 확률을 예측한 뒤 softmax 등을 통해 anchor box 내에 class가 존재할 확률을 추정한다. $W \times H \times k$개의 anchor box에 대해 prediction하므로  $(W \times H \times k) \times 2$ dimension vector를 생성하며 logistic regression을 사용하여도 무방하다. 이후 class가 존재할 확률이 높은 anchor box에 대하여 bounding box regression이 이루어진다.
##### 1.2.1.1. Box-Regression Layer
$9 \times 4$개의 $1 \times 1$ kernel로 구성된 layer로, 해당 anchor box를 통해 bounding box의 $t_{x}, ~t_{y}, ~t_{w}, ~t_{h}$를 predict한다. 즉, 이후에 있을 bounding box regression을 위한 RoI를 제공한다.
### 1.3. [[Fast R-CNN]]
[[Fast R-CNN#1.3. RoI Pooling|RoI Pooling]]을 통해 전달 받은 RPN에 의해 predict된  bounding box와 conv feature map을 활용하여 classification 및 bbox regression을 수행한다.
## 2. Training

## Reference
[1] Ren, Shaoqing, et al. "Faster r-cnn: Towards real-time object detection with region proposal networks." _Advances in neural information processing systems_ 28 (2015).