---
tags: 
Architecture: true
Training: false
---
[[R-CNN]]에서는 [[Fully Connected Layer]]가 고정된 크기의 vector만을 입력 받기 때문에 입력 이미지의 크기가 매우 제한적이었으나, 이미지의 크기에 무관하게 고정된 크기의 vector를 생성할 수 있는 방식을 제안하였다.
## 1. Architecture
### 1.1. Region Proposal
[[Selective Search]]를 통해 약 2000개의 RoI 후보군을 추출한다.
### 1.2. [[Convolutional Layer]]
이미지에 crop, warp를 수행하지 않고 convolutional layer에 입력한다. 이때 feature map에 2000개의 RoI를 projection하여 적용한다.
### 1.3. [[Spatial Pyramid Pooling]]
### 1.4. [[Support Vector Machine]]
### 1.5. [[Bounding Box Regression]]
### 1.6. [[Non-Maximum Suppression]]
