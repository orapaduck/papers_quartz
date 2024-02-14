common spatial pattern은 2-class EEG 신호의 특징 벡터를 추출하기 위한 방법으로 특정 class의 분산을 최대화하고 다른 class의 분산을 최소화하는 일종의 [[Principal Component Analysis]]이다. $N$개의 channel의 대해 $T$개의 sample을 얻는다고 할 때 이러한 $N*T$의 행렬을 Trial의 수만큼 갖는다고 하자. 각 Class에 대해 covariance matrix을 구해보면
$$
\mathrm{C=\frac{X^T X}{tr(X^T X)}}
$$
여기서 tr()은 대각 성분들의 합을 의미하므로 $\mathrm{X^T X}$의  대각 성분은 각 행에서 원소의 제곱 합이다. 이제 [[Whitening Transform]]을 하기 위해 전체 클래스의 mean covariance matrix들의 합을 syntetic이라고 정의한다.
$$
\mathrm{C_{total}=\bar{C_{1}}+\bar{C_{2}}}
$$
다음과 같이 합성 공분산 행렬에 대해 고윳값 분해를 하고 eigen value와 eigen vector를 이용해 whitening transform 행렬을 구한다.
$$
\begin{gathered}
\mathrm{C_{total}=U\lambda U^T} \\
\mathrm{Q=\sqrt{ \lambda^-1 }U^T}\\
\mathrm{S_{i}=Q\bar{C_{i}}Q^T}
\end{gathered}
$$
이러한 whitening 과정을 통해 identity matrix를 covariance로 갖는 S를 얻을 수 있다. 이는 채널 간 상관관계를 줄임으로써 각 채널의 독립된 특징을 나타내도록 하는 것을 의미한다. 이러한 S에 대해 고윳값 분해를 하면
$$
\begin{gathered}
\mathrm{S_{1}=B\lambda_{1}B^T} \\
\mathrm{S_{2}=B\lambda_{2}B^T}
\end{gathered}
$$
2 class 모두 whitening transform 행렬을 통해 같은 공간에 사영되었으므로, 2개의 class에서 class 1에 대해 eigen value가 가장 큰 vector는 class 2에 대해 가장 작은 eigen value를 갖는다. 이때 class 1의 eigen vector에 covariance matrix를 사영시킨다면, class 1과 유사한 covariance를 가진 신호는 증폭될 것이고 다른 신호는 세기가 감소할 것이다. 이러한 필터 W를 다음과 같이 정의한다.
$$
\mathrm{W=Q^T B}
$$
필터는 아래와 같이 적용할 수 있다.
$$
\mathrm{Z=WX}
$$
이렇게 얻은 신호 Z는 일반적으로 local maxima나 신호의 절대값, 제곱 등을 통해 특징 벡터를 얻는 데에 사용된다. 요약하자면, CSP는 mean covariance matrix을 통해 whitening transform과 principal component analysis를 수행하는 것이라 볼 수 있겠다.