## Dropout
하나의 Neural Network에서 일부 node를 확률적으로 생략하게 되면 여러 모델을 학습시켜 [[Ensemble]] 하는 것과 유사한 효과를 낼 수 있다.
$$
\begin{align}
\gamma&∼ probability\\
\sigma &=activation~function\\
F(x) &= \sigma(w*\gamma x + b)
\end{align}
$$
Dropout Net은 일반적인 Neural Network와 동일한 방식으로 학습할 수 있으며 단지 [[Batch#Mini-Batch|Mini-Batch]]를 사용한 학습 과정에서 일부 node를 dropout하여 나타난 network를 학습시킨다는 차이가 있다.
## Label Smoothing
[[One-Hot Encoding#One-Hot Enoding|One-Hot Encoding]]의 경우 하나의 값만 1이고 나머지는 0으로 나타내는데, 이를 조금이나마 부드럽게 만드는 것을 label smoothing이라고 한다. $K$개의 class에 대해서 $i$번째 차원에 대한 smoothing vector의 값은 다음과 같다.
$$
y_{i}^{LS}=y_{i}(1-\alpha) + \frac{\alpha}{K}
$$
[1]에서는 one-hot encoding을 활용한 학습 방식에서는 올바른 class의 구간에 가까운 벡터를 만들어내고자 하지만, label smoothing을 사용하게 되면 잘못된 class의 구간과 일정한 거리를 유지하여 class 간의 거리가 일정하고 동일한 class내에서는 가까운 위치에 배치되도록 하는 효과를 가지는 것을 보였다.

## Weight Decay
### L2 Regularization
## References
 [1] Müller, Rafael, Simon Kornblith, and Geoffrey E. Hinton. "When does label smoothing help?." _Advances in neural information processing systems_ 32 (2019).([link](https://arxiv.org/abs/1906.02629))