---
tags: 
Architecture: true
Training: false
---
## 1. Architecture
### 1.1. Region Proposal
[[Selective Search]]를 통해 약 2000개의 region proposal을 먼저 추출한 후 CNN 모델에 들어간다. 이때 pre-trained model을 사용하므로 모델의 입력 이미지 크기에 맞추어 resize한다.
### 1.2. Backbone
resize된 region proposal을 입력해 feature vector를 추출한다. (2000개의 4096 sized feature vector)
#### 1.2.1. [[AlexNet]]
selective search를 사용한 region proposal에는 객체 뿐만 아니라 배경이 포함될 수 있기 때문에 selective search를 통해 배경을 포함한 학습 데이터를 제작한 뒤 ground truth와의 [[Evaluation#Intersection of Union|IoU]]를 구한다. IoU 값이 0.5 이상인 경우 positive sample, 이하인 경우 negative sample로 지정한다. 그리고 positive saple 32개, negative sample 96개로 구성된 [[Batch#Mini-Batch|Mini-Batch]]를 구성하여 fine-tuning한다. 이후 [[Hard Negative Mining]]을 통해 다시 한 번 학습시킨다.
### 1.3. Head
#### 1.3.1. [[Support Vector Machine]]
CNN에서 추출된 feature vector가 분류된 class에 해당하는지 판별하는 이진 분류기로 confidence score를 얻기 위해 사용된다.
#### 1.3.2. [[Bounding Box Regression]]