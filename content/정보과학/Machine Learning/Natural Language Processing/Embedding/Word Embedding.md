## One-Hot Enoding
서로 다른 단어들에 고유한 숫자가 부여된 단어 집합에서 특정 단어에 해당하는 숫자를 1, 나머지를 0으로 만들어 단어를 vector로 표현하는 방식이다. 단어 집합 처리하고자 하는 모든 단어를 포함하고 있어야 하고 단어 간의 유사도를 표현하지 못한다는 단점이 있다.
## Bag-of-Word
전체 문서에 대해 고유한 token, 예를 들어 단어로 이루어진 vocabulary를 작성하여 특정 문서에 각 단어가 얼마나 자주 등장하는 지를 통해 문서의 특성 벡터를 만든다. 각 단어의 출현 횟수 이외의 정보를 제공하지 않지만 텍스트 분류의 효율성을 높여준다.
### Multiclass Classification
다중 클래스 분류를 위해 BoW $x$와 label $y$간의 적합도를 반환하는 함수 $\Psi(x,y)$는 다음과 같이 쓸 수 있다:
$$
\Psi(x, y)=\theta \cdot f(x,y) = \theta^{T} f(x, y)
$$
여기서 $f$는 feature vector로 각 label에 대한 BoW를 나타낸다. 즉, $|f|=|K \times V|$. 가능한 label을 $K$라고 한다면 $y \in K$ 이고 $f(x,y)$는 label이 y인 문서들의 BoW이다. 
$$
\begin{align}
f(x, y=1)&=[x;\underbrace{0;0;\dots;0}_{(K-1) \times V}]\\
f(x, y=2)&=[\underbrace{0;0;\dots;0}_{V};x;\underbrace{0;0;\dots;0}_{(K-2) \times V}] \\
&\vdots \\
f(x, y=K)&=[\underbrace{0;0;\dots;0}_{(K-1) \times V};x]
\end{align}
$$
일반적으로 $x$의 끝에 offset feature 1을 추가하고 나머지 label의 BoW에 0을 추가해준다.
$$
|f|=|(V+1) \times K|
$$
$\theta$는 BoW와 label 사이의 가중치로 다양한 방법으로 구할 수 있으며, [[Naive Bayes]]의 log likelihood를 통해 다음과 같이 구할 수 있다:
$$
\hat{\theta}=\underset{\theta}{\operatorname{argmax}} \sum_{i=1}^{N}\log p(x^{(i)}, y^{(i)};\theta)
$$
요약하자면, 전체 문서에서 각 클래스의 BoW를 조사하고, 각 클래스의 BoW에 가중치 $\theta$를 곱해주어 BoW 내의 포함된 단어들에 대해 각 클래스에 대한 점수를 나타내는 함수 $\Psi$를 얻는다. 이후 분석하고자 하는 문장의 BoW를 만든 뒤 $\Psi(x,y)$와 곱해주어 label에 대한 score 얻을 수 있다. 이를 통해 $\hat{y}$를 다음과 같이 구할 수 있다:
$$
\hat{y}=\underset{y \in K}{\operatorname{argmax}}\Psi(x,y)
$$