---
tags: 
Architecture: true
Training: true
---
## 1. Architecture
### 1.1 [[Encoder&Decoder]]
#### 1.1.1 Encoder
Encoder는 6개의 stack이 동일한 layer로 구성되어 있으며 각 layer는 2개의 sub-layer를 가진다.
sub-layer는 [[Attention#Multi-Head Attention|Multi-Head Self-Attention]]과 [[Feed-Forward Network#Position-Wise FFN|Position-Wise FFN]]이다. 2개의 sub-layer에는 각각 [[Skip Connection]]을 도입한 뒤 [[Normalization#Layer Normalization|Layer Normalization]]하였다. 따라서 각 sub-layer의 연산은 다음과 같이 나타낼 수 있다.
$$ \mathrm{LayerNorm(x+Sublayer(x))} $$residual connection을 사용하기 위해서, 모델 내에 포함된 모든 sub-layer는 embedding layer와 같은 차원의 출력을 만들어내야 한다. ($d_{model}=512$)
#### 1.1.2 Decoder
Encoder는 6개의 stack이 동일한 layer로 구성되어 있으며 각 layer는 3개의 sub-layer를 가진다.
2개의 sub-layer의 구성은 Encoder와 동일하며 나머지 하나의 sub-layer는 Encoder의 출력에 대해 multi-head attention을 수행한다. Encoder와 마찬가지로 각 sub-layer에 residual connection 및 layer normalization을 도입하였다.
### 1.2. [[Attention]]
#### 1.2.1. [[Attention#Scaled Dot-Product Attention|Scaled Dot-Product Attention]]
#### 1.2.2. [[Attention#Multi-Head Attention|Multi-Head Attention]]
#### 1.2.3. Masked Attention
transformer의 경우 문장을 순차적으로 번역하는데 이때 학습을 병렬적으로 진행하기 위해 [[Teacher Forcing]]을 사용하기 때문에 Encoder에는 입력 문장을, Decoder에는 현재까지 번역된 문장을 제공하게 된다. 이때 Decoder에 입력된 정보는 self-attention을 거치게 되는데, 만약 추후에 사용될 Ground Truth가 포함되어 있다면 이들 또한 attention 과정에서 query를 표현하기 위한 벡터로 사용되기 때문에 학습에 문제가 생길 수 있다. 이를 해결하기 위해 아직 번역되지 않은 부분의 내적을 특정 값으로 masking하여 학습에 사용되지 않도록 한다.
### 1.3. [[Feed-Forward Network#Position-Wise FFN|Position-Wise Feed-Forwaed Networks]]
### 1.4. [[Positional Encoding#Sinusoidal Positional Encoding|Positional Encoding]]
## 2. Training
### 2.1. [[Optimizer#Adam|Adam Optimizer]]
$$lrate=d_{model}^{-0.5}\cdot min(step\_num^{-0.5}, step\_num\cdot warmup\_step^{-1.5})$$위와 같은 식을 통해 warmup_steps에 도달할 때까지 learning rate이 선형적으로 증가하여 학습 초기에 global minima를 찾고 이후 learning rate이 점차 감소하여 수렴하는 형태로 탐색할 수 있다.
## 2.2. Regularization
### 2.2.1. Residual Dropout
encoder와 decoder 모두 각 sub-layer의 output 및 embedding vector에 positional encoding을 더하는 과정에 [[Regularization#Dropout|Dropout]]을 적용하였다.
### 2.2.2 [[Regularization#Label Smoothing|Label Smoothing]]
## 질문 
Transformer의 Decoder에서 Masking을 수행하더라도 입력 데이터를 통해 단어의 개수를 알 수 있는데, 이는 어떻게 해결하는가?
	애초에 다음에 올 단어만 예측하는 거니까 EOS 기준으로 판단?
	또는 $d_{model}$에 맞추어 padding이 존재하는가?
## References
[1] Vaswani, Ashish, et al. "Attention is all you// need." _Advances in neural information processing systems_ 30 (2017).([link](https://arxiv.org/abs/1706.03762))
[2] Attention Is All You Need 번역 및 정리 (Transformer)([link](https://silhyeonha-git.tistory.com/16))
[3] Transformer: Attention Is All You Need - 꼼꼼한 딥러닝 논문 리뷰와 코드 실습([link](https://www.youtube.com/watch?v=AA621UofTUA))
[4] Attention/Transformer 시각화로 설명([link](https://www.youtube.com/watch?v=6s69XY025MU))