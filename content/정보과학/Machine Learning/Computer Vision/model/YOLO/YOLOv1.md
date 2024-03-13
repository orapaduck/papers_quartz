---
tags: 
Architecture: true
Training: false
---
기존의 object detection model은 [[Bounding Box Regression]] 및 classification으로 이루어진 2 stage detector이며 pipeline이 복잡해 학습과 예측 과정이 느리다. VOLO v1은 하나의 CNN을 통해 bounding box와 class를 예측하는 1 stage detector로 속도가 빠르다.
## 1. Architecture
![[YOLOv1_Structure.png|600]]
### 1.1. [[GoogLeNet]]
### 1.2. [[Convolutional Layer]]
### 1.3. [[Fully Connected Layer]]
### 1.4. Prediction Tensor
$7 \times 7$  grid cell 내의 점을 중심으로 갖는 2개의 bounding box의 $(x, y, w, h, confidence)$와 ImageNet이 포함하는 20 class에 대한 prediction을 포함한다. 여기서 confidence score는 grid cell 내에 class가 존재하는지(0 or 1)와 ground truth와의 IoU를 곱해 계산한다.