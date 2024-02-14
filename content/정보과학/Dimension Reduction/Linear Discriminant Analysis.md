---
tags: 작성중
---

전체 데이터를 특정 직선에 projection하였을 때 같은 class 내의 데이터 사이의 거리를 가깝게 하는 벡터를 찾는다. 즉, 각 클래스의 covariance의 합이 최대한 작게, 각 class간의 거리는 최대한 크게 하는 벡터 W를 찾는다.
$$
\begin{gathered}
\mathrm{w^T \Sigma_{0}w+w^T \Sigma_{1} w}\\
\mathrm{||w^T\mu_{0} - w^T \mu_{1}||}
\end{gathered}
$$
각 클래스의 covariance의 합과 class 간 거리는 위와 같이 쓸 수 있다. 따라서 cost function은 다음과 같이 쓸 수 있다.
$$
\begin{gathered}
\mathrm{
J = \frac{w^T \Sigma_{0}w+w^T \Sigma_{1} w}{||w^T\mu_{0} - w^T \mu_{1}||}
}
\end{gathered}
$$
$\mathrm{S_{w}}$와 $\mathrm{S_{b}}$는 각각 집단 내 산포 행렬과 집단 간 산포 행렬로 대칭행렬이며 다음과 같이 표현된다.
$$
\begin{gathered}
\mathrm{S_{w}=\Sigma_{1}+\Sigma_{2}}\\
\mathrm{\Sigma_{i}=\sum_{x \in \chi_{i}}(x-\mu_{i})(x-\mu_{i})^T}\\
\mathrm{S_{b}=(\mu_{0}-\mu_{1})(\mu_{0}-\mu_{1})^T}\\
\mathrm{J=\frac{w^T S_{b} w}{w^T S_{w} w}}
\end{gathered}
$$
최대화를 위해 목적함수 J(w)를 미분하여 0이 되는 지점을 찾으면 다음과 같은 식을 얻을 수 있다.
$$
\mathrm{}
$$
