region proposal을 통해 예측한 bounding box($P$)를 ground truth($G$)에 맞추기 위하여 사용된다. regression을 통해 예측한 bounding box를 $P^\prime$이라고 할 때 ground truth에 대한 보정 값 $d(P^\prime)$과 같이 나타내면 아래와 같이 쓸 수 있다.
$$
\begin{align*}
\hat{G}_x &= P_w^\prime d_x(P^\prime) + P_x^\prime \\
\hat{G}_y &= P_h^\prime d_y(P^\prime) + P_y^\prime \\
\hat{G}_w &= P_w^\prime \exp(d_w(P^\prime)) \\
\hat{G}_h &= P_h^\prime \exp(d_h(P^\prime))
\end{align*}
$$
regression의 목적은 region proposal한 bounding box를 ground truth로 보정하는 것이므로 target은 다음과 같이 쓸 수 있다.
$$
\begin{align}
t_{x}&=\frac{G_{x}-P_{x}}{P_{w}} \\
t_{y}&=\frac{G_{y}-P_{y}}{P_{h}} \\
t_{w}&=\log\left( \frac{\hat{G}_{w}}{P_{w}} \right)\\
t_{h}&=\log\left( \frac{\hat{G}_{h}}{P_{h}} \right)\\
\end{align}
$$
따라서 loss function($J$)는 다음과 같다.
$$
\begin{align}
\sum_{i \in {x,y,w,h}}(t_{i}-d_{i}(P^\prime))^{2}+\lambda ||w||^{2}
\end{align}
$$