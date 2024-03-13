단순히 각 단어의 빈도수를 통해 문서를 표현하는 경우 단어가 문서를 대표하지 않거나 단순히 텍스트가 길어서 단어가 많이 등장하는 경우 문서의 특징을 제대로 나타내지 못한다. 이러한 점을 보완하기 위해 해당 문서 내에서 단어의 빈도수 term frequency와 단어가 사용된 문서의 수 document frequency를 활용한다. TF-IDF는 다음과 같이 표현할 수 있다:
$$
\mathrm{TF-IDF(\mathit{w})}=\mathrm{TF(\mathit{w})} \times \log(\frac{N}{\mathrm{DF(\mathit{w})}})
$$
TF 클수록, DF가 작을수록 TF-IDF가 커진다. 즉, 일부 문서에만 많이 등장하는 단어가 해당 문서를 대표하는 단어라고 생각하여 가중치를 높게 부여한다.