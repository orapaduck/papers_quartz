## Gradient Descent
가중치를 업데이트할 때 기울기의 크기에 비례하여 반대 방향으로 가중치를 조절한다.
$$\omega_{t+1}=\omega_{t}-\alpha \nabla f(x_{t})$$
## Stochastic Gradient Descent
주어진 data 내에서 batch size가 1인 [[Batch#Mini-Batch|Mini-Batch]]를 무작위적으로 선택하여 gradient descent를 수행한다. batch size가 작기 때문에 수렴 과정이 매우 불안정하며 이를 해결하기 위해 batch size를 조절한 mini-batch SGD가 있다.
## Momentum
gradient descent와 달리 gradient를 가속도로 사용한다. 따라서 parameter 업데이트를 위한 속도 $v$를 다음과 같이 정의한다.
$$ \begin{align*}
v_{t} &= m v_{t-1} - \alpha\frac{ \delta loss}{\delta w}\\
\omega_{t+1} &=\omega_{t}+v_{t}
\end{align*}$$
위 식에서 알 수 있듯이 gradient가 0이어도 $v_{t}=mv_{t-1}$이 되기 때문에 saddle point나 local minima로 인한 문제를 어느 정도 개선할 수 있다.
## RMSprop
$$
\begin{align}
g_{t} &= \gamma g_{t-1} + (1-\gamma)(\nabla f(x_{t-1}))^2\\
\omega_{t}& = \omega_{t-1} - \frac{\alpha}{\sqrt{g_{t}}+\epsilon}\nabla f(x_{t-1})
\end{align}$$
$g_{t}$는 gradient의 exponentially weighted average of squares로 $\gamma$를 통해 이전 값에 얼마나 영향을 받을 지를 결정할 수 있으며 따라서 $\sqrt{g_{t}+\epsilon}$은 gradient의 RMS와 유사한 식이 된다. 여기서 $\epsilon$은 분모가 0에 가까워지는 것을 방지하기 위한 값이다. $|\Delta x|$는 최근의 gradient가 크면 learning rate를 줄여주고 gradient가 작으면 learning rate를 키워주기 때문에 학습 과정에서 진동을 줄이고 [[Early Stopping]]을 방지하는 데에 도움이 된다.
## Adam
momentum과 RMSprop이 합쳐진 형태로, 학습 속도가 관성을 가지며 최근의 gradient에 따라 learning rate가 변하는 학습 방식이다.
$$\begin{align}
v_{t+1} &= \beta_{1}v_{t} + (1-\beta_{1})\nabla f(x_{t}) \\
\gamma_{t+1} &= \beta_{2} \gamma_{t} + (1-\beta_{2})(\nabla f(x_{t}))^2 \\
x_{t+1} &= x_{t} - \frac{\alpha}{\sqrt{\gamma_{t+1}}+\epsilon}v_{t+1}
\end{align}$$