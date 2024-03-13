---
tags: 
Architecture: true
Training: true
---
![[AlexNet_Structure.png|500]]
## 1. Architecture
### 1.1. [[Convolutional Layer]]
두 개의 GPU에서 독립적으로 학습시킴으로써 서로 다른 feature map을 추출하는 layer를 구성하였으며, 3번째 layer에서 convolution 결과를 concat 해주었으며 해당 layer에서는 convolution만 수행하였다.
#### 1.1.1. ReLU
#### 1.1.2. [[Pooling#1. Max Pooling|Max Pooling]]
#### 1.1.3. [[Normalization#Local Response Normalization|Local Response Normalization]]
### 1.2. [[Flatten Layer]]
### 1.3. [[Fully Connected Layer]]
### 1.4. [[Softmax]]
## 2.Training

### 2.1. [[Data Augmentation]]
### 2.2. Regularization
#### 2.2.1. [[Regularization|Dropout]]
#### 2.2.2. [[Regularization#Weight Decay|Weight Decay]]
### 2.3. [[Optimizer#Stochastic Gradient Descent|Stochastic Gradient Descent]]
#### 2.3.1. [[Optimizer#Momentum|Momentum]]