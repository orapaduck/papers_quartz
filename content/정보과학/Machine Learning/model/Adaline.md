Adaptive Linear Neuron은 [[Perceptron]]의 향상된 버전으로 cost function을 연속적으로 정의하고 최소화하는 핵심 개념을 보여준다. 기존의 perceptron에서는 계단 함수를 사용한 반면에 선형 활성화 함수를 사용한다. Adaline의 선형 활성화 함수는 다음과 같다.
$$\mathrm{\phi(w^T x)=w^T x}$$
이러한 함수가 가중치 학습 과정에 사용되기는 하지만, 여전히 최종 출력에는 임계 함수를 사용한다.
![[Adaline.py]]