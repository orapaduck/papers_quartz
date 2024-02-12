---
tags: []
---
일반적으로 CNN은 여러 개의 convolution layer와 [[Pooling]] layer라고도 하는 subsampling layer로 이루어져 있다.  마지막에는 하나 이상의 [[Fully Connected Layer]]가 있다.
CNN은 이미지와 관련된 작업을 매우 잘 수행하는데, 이는 대체적으로 다음 두 개의 아이디어 때문이다.
1. 희소 연결: feature map에 있는 하나의 원소는 작은 pixel patch 하나에만 연결된다.
2. parameter 공유: 동일한 가중치가 입력 이미지의 모든 patch에 사용된다.

## 1. Discrete Convolution
두 개의 벡터 $x$, $w$에 대한 discrete convolution은 $y=x*w$와 같이 나타낸다. 여기서 $x$는 입력, $w$는 kernel이다. 1차원에서 discrete convolution의 정의는 다음과 같다.
$$y=x*w \to y[i]=\sum_{k=0}^{m-1} x[i+m-k]w[k]$$
여기서 $x$와 $w$의 indexing이 반대 방향이기 때문에 입력 또는 kernel을 뒤집어 내적을 수행한다. 이를 2차원으로 확장하면 다음과 같이 표현할 수 있다.
$$Y=X*W \to Y[i,~j]=\sum_{k_{1}=0}^{m_{1}-1}\sum_{k_{2}=0}^{m_{2}-1} X[i+m_{1}-k_{1},~i+m_{2}-k_{2}]W[k_{1}, k_{2}]$$
### 1.1. 1x1 Convolution
각 pixel에 대해 곱셈을 수행한 뒤 모두 더하기 때문에, 채널 간의 weighted sum과 같다.
## 2. Kernel
kernel의 역할은 이미지로부터 내가 원하는 특징만을 추출하는 것이다. kernel은 이미지 데이터를 지정된 간격(stride)으로 움직이며 convolution을 수행하고 convolution을 통해 나온 결과가 feature map이다. 일반적으로 (2,2), (3,3) 등의 정방 행렬로 정의되고 CNN에서 학습의 대상은 필터의 파라미터이다. 입력 데이터의 각각의 채널에서 지정된 간격으로 순회하며 convolution을 수행하고 모든 채널의 convolution의 합인 feature map이 출력으로 나온다.
## 3. [[Pooling]]
feature map의 parameter를 줄이기 위해 사용되며 overfitting을 억제한다.