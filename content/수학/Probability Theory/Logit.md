## 1. Odds Ratio
odds ratio는 특정 이벤트가 발생할 확률로 다음과 같이 쓸 수 있다.
$$
\frac{P}{(1-P)}
$$
여기서 $P$는 예측하고자 하는 대상의 확률이다. 이러한 odds ratio에 log를 취해 logit 함수를 정의한다.
## 2. Logit
$$
logit(P)=\log \frac{P}{1-P}
$$
대상의 probability를 실수 전체에 대응 시켜 binary classification을 regression으로 접근할 수 있게 해준다.
$$
logit(P(y=1|x))=w^T x
$$
얻고자 하는 것은 대상의 probability이므로 다음과 같이 쓸 수 있다.
$$
\phi (z) = \frac{1}{1+e^{-z}}
$$