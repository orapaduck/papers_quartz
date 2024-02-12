임의의 벡터 $\mathrm{x \in \mathbb R^n}$에 대하여 $f(\mathrm{x}) \in \mathbb R^m$을 만족하는 다변수 벡터 함수 $f(\mathrm{x})$가 주어졌다고 하자.
$$f(\mathrm{x}): \mathbb R^n \mapsto \mathbb R^m $$
이때, $f$의 1차 편미분은 행렬이 되고 이를 특별히 jacobian 행렬이라고 한다. 이를 통해 jacobian 행렬의 각 row vector는 함수 $f$에 대한 gradient라는 것을 알 수 있다. jacobian은 주로 error를 최적화 할 때 사용된다. 이때 cost funtion은 일반적으로 비선형 함수로 구성되어 있으며 크기가 작기 때문에 taylor expension하여 다음과 같은 근사식으로 표현한다.
$$\mathrm{e(x+\Delta x)=e(x)+J \Delta x}$$