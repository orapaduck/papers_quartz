일반적으로 CNN에서는 필터들이 convolution을 수행하기 때문에 layer가 깊어질수록 채널의 수가 많아지고 이미지의 너비와 높이가 줄어든다. VGGNet은 이러한 문제점을 해결하기 위해 3x3 필터를 사용하여 layer의 깊이를 늘렸다. 하지만 parameter의 개수가 매우 많았고 layer가 깊어질수록 오차율이 증가하는 문제가 있어 이를 해결하기 위한 방법으로 residual learning가 제안 되었다[1].
## Skip Connection
실제로 학습 시키고자 하는 mapping을 $H(x)$라고 하면, 이를 학습 시키는 것은 어려우므로 residual block을 통해 $H(x)=F(x)-x$의 형태로 변형하여 학습에 용이한 $F(x)$를 사용한다. skip connection 사이에는 여러 개의 activation function이 존재할 수 있으며 convolution으로 인한 차원 감소는 $W_{s}$를 이용한 linear projection을 통해 해결한다.
$$
F(x)=H(x) + x=F(x, \{W_{i}\}) +W_{s}x
$$
## 해석
원 논문에서는 residual block에 의한 결과를 경험적으로 얻었다고 말하였다[1]. 이에 따라 ResNet이 왜 잘 작동하는지 설명하려는 많은 노력이 있었다.
### 1. [[Ensemble]]
[2]에서는 unraveled의 관점에서 본다면 residual networks는 [[Regularization#Dropout|Droupout]]처럼 다른 길이의 많은 paths의 모음으로 볼 수 있다. residual networks의 paths가 서로 의존하는지 또는 어느 정도 중복성을 나타내는 지에 대한 의문을 제기할 수 있다. 일반적으로 neural network가 model structure의 급격한 변화에 견딜 수 있는지는 분명하지 않지만, layer를 삭제하면 모든 후속 layer의 input distribution이 크게 변경되기 때문에 깨질 것으로 예상한다. [2]에서 실험한 lesion study에서 paths가 각 다른 것에 강력하게 종속되어있지 않으며, ensemble 같은 행동을 보인다는 것을 밝힌다.
### 2. Optimal Depth
문제 해결에 있어서 가장 optimal한 depth를 찾는 방법은 아직 없다. 하지만 skip connection이 존재한다면, optimal depth 이후의 weight와 bias가 모두 0으로 수렴하여 optimal depth에서의 output이 바로 classification으로 넘어갈 수 있다.
## References
[1] He, Kaiming, et al. "Deep residual learning for image recognition." _Proceedings of the IEEE conference on computer vision and pattern recognition_. 2016.
[2] Veit, Andreas, Michael Wilber, and Serge Belongie. "Residual networks behave like ensembles of relatively shallow networks." arXiv preprint arXiv:1605.06431 (2016).