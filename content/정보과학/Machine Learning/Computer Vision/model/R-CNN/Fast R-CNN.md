---
tags: 
Architecture: true
Training: false
---
[[R-CNN]]에서 고정된 크기의 이미지를 받았던 것은 bbox regression 및 confidence score를 얻기 위해 사용되는 [[Fully Connected Layer]]가 고정된 크기의 input을 요구하기 때문인데, 이 과정에서 이미지를 warp하게 되면 이미지의 비율이 깨지는 등 원본의 정보가 소실된다. 또한 R-CNN의 bbox regression과 SVM에서 각각 CNN 전후의 값을 사용하기 때문에 학습 과정이 구분되었으나 Fast R-CNN에서는 RoI pooling을 도입함으로써 두 과정 모두 RoI의 feature vector를 사용하기 때문에 End-to-End 학습이 가능해졌다.
## 1. Architecture
### 1.1. Region Proposal
R-CNN과 마찬가지로 [[Selective Search]]를 통해 region proposal을 추출한다.
### 1.2. Backbone
#### 1.2.1. [[VGGNet]]
### 1.3. RoI Pooling
feature map에서 RoI에 해당하는 부분을 max pooling을 통하여 고정된 길이의 feature vector로 축소한다.
### 1.4. Head
#### 1.4.1. Fully Connected Layer
##### 1.4.1.1. Softmax
feature vector를 통해 classification을 수행한다.
##### 1.4.1.2. [[Bounding Box Regression]]