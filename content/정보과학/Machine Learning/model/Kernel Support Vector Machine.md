---
tags: 작성중
---
[[Support Vector Machine]]으로 비선형 문제를 해결하기 위해 [[Kernel Method]]를 사용하여 고차원 특성 공간으로 변환한다. 그다음 이 새로운 특성 공간에서 데이터를 분류하는 support vector machine을 훈련시킨다. 
$$f(x_{i}, ~x_{j})=\phi(x_{i})^T \phi(x_{j})$$
이러한 매핑 방식의 한 가지 문제점은 데이터를 고차원으로 매핑한 뒤 내적을 계산하기 때문에 계산 비용이  높다는 것이다. 이를 해결하기 위해 kernel trick이 사용된다.
## Kernel Trick
가장 널리 사용되는 kernel 중 하나는 gaussian kernal이다. 이를 통해 연산이 낮은 차원을 통해 진행된 다.
$$f(x_{i}, ~x_{j})=\exp\left( -\frac{||x_{i}-x_{j}||^2}{2 \sigma^2} \right)$$
![[정보과학/실습/Kernel_Support_Vector_Machine.ipynb]]