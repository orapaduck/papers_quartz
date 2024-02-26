주어진 벡터를 이용하여 직교 기저를 얻기 위한 과정이다. 
$$
\begin{align}
u_{1}&=v_{1}\\
u_{2}&=v_{2}-proj_{u_{1}}(v_{2}),\\
u_{3}&=v_{3}-proj_{u_{1}}(v_{3})-proj_{u_{2}}(v_{3}),\\
&~~\vdots\\
u_{k}&=v_{k}-\sum_{i=1}^{k-1} proj_{u_{i}}(v_{k}),\\
\end{align}
$$
각 벡터에서 직교하는 성분만을 남겨 서로 수직하도록 한다.
$$
\begin{align}
e_{i}&=u_{i}/||u_{i}||
\end{align}
$$
위와 같이 직교 벡터들을 정규화하면, 벡터 공간의 정규 직교 기저가 된다. 즉, 주어진 벡터들이 span하는 공간의 정규 직교 기저를 얻을 수 있다.

$\mathrm{A}x=\mathrm{b}$ 꼴의 least squared 문제에서 직교 행렬의 성질을 이용하여 다음과 같이 활용할 수 있다.
$$
\begin{align}
\mathrm{A}\hat{x}&=\mathrm{B} \\
\mathrm{A^{T}A}\hat{x}&=\mathrm{A^{T} B} \\
\hat{x}&=\mathrm{A^T}B 
\end{align}
$$