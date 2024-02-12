---
tags:
  - 작성중
Architecture: true
Training: false
---
![[ELMo_Structure.png|600]] 
## 1. Architecture
### 1.1. Biderectional LSTM
$$ R_{k} = \{x_{k}^{LM}, \overrightarrow{h}_{k,j}^{LM} \overleftarrow{h}_{k,j}^{LM} 
| j= 1, 2, \dots,L\} 
$$
각 LSTM layer의 hidden state를 word embedding과 함께 concatenate하여 2L+1개의 representation을 얻는다. 이를 weighted sum하여 하나의 embedding vector를 얻을 수 있다. $\gamma$는 scaler parameter로 [[Normalization#Layer Normalization|Layer Normalization]]을 형성하는 데에 관여한다.
$$ELMO_{k}^{task} = E(R_{k};\Theta^{task}) = \gamma^{task} \sum_{j=0}^L s_{j}^{task} h_{k,j}^{LM}$$
#### 1.1.1. [[ResNet#1.2. Skip Connection|Skip Connection]]
## 2. Training
## 3. Application