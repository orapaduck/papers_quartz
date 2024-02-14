---
tags:
  - 작성중
---
선과 평행성을 보존하는 기하 변환으로 선형 변환과 평행 이동으로 이루어져 있다. 선형 변환을 행렬의 곱, 평행 이동을 벡터를 더하는 것이라 생각하면 다음과 같이 표현 가능하다.
$$
f(x)=Ax+b
$$
[[Augmented Matrix]]를 이용하면 행렬 곱셈을 통해 선형 변환과 평행 이동을 모두 표현할 수 있다.
$$
\begin{pmatrix} A_{11}&A_{12}&b_{1}\\A_{21}&A_{22}&b_{2}\\0&0&1\end{pmatrix}
\begin{pmatrix}x\\y\\1\end{pmatrix}=
\begin{pmatrix}A_{11}x+A_{12}y\\A_{21}x+A_{22}y\\1\end{pmatrix}=
\begin{pmatrix}x'\\y'\\1\end{pmatrix}
$$
[[Feed-Forward Network]]에서 weight와 bias에 의한 연산을 하나의 affine transformation으로 표현 가능하다.