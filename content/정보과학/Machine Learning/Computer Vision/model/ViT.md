---
tags: 
Architecture: true
Training: false
---
## 1. Architecture
### 1.1. Encoder
![[VisualTransformer_Structure.png|400]]
이미지를 고정된 크기의 patch로 나누어 준 뒤 각 patch를 flatten하고 linear projection하여 1D vector를 얻는다. 
### 1.1.1. Class Token
classification을 수행하기 위해 전체 patch에 대한 insight를 얻기 위해 추가되었다. [[Attention#Multi-Head Attention|Multi-Head Attention]] 과정을 거치며 이미지의 patch를 통해 표현되기 때문에 MLP에 전달되어 classification에 사용된다. 구현 과정에서는 normal distribution을 따르는 임의의 vector로 생성된다.
### 1.1.2. [[Positional Encoding]]
위치 정보를 보존하기 위해 positional encoding을 더해주며 이미지임에도 1D positional encoding을 사용했을 때 더 나은 성능을 보였다.
### 1.1.3. [[Normalization#Layer Normalization|Layer Normalization]]
### 1.1.4. Multi-Head Attention