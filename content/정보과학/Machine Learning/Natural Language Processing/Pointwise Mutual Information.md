두 단어가 독립일 때와 비교하여 같이 등장하는 횟수를 나타내는 값이다.
$$
\mathrm{PMI(\mathit{A,B})}=\log \frac{P(A,B)}{P(A)P(B)}
$$
이를 [[Bag-of-Words#Term-Documenct Matrix|Term-Document Matrix]]에 적용하여 PMI 행렬을 얻은 뒤 행 벡터를 각 단어에 대한 임베딩으로 사용할 수 있다.
## Positive PMI
위에 제시된 PMI 수치가 음수가 되는 경우, 즉 $P(A,B)$가 매우 작아지는 경우 표본 수가 적어 신뢰하기 어려운 데이터라고 판단하여 다음과 같이 양의 값만 취한다.
$$
\mathrm{PPMI(\mathit{A,B})}=\mathrm{max(0, PMI(\mathit{A,B}))}
$$
## Shifted PMI
PMI에서 $\log k$를 빼준 값이다. 여기서 $k$는 양의 상수이다.
$$
\mathrm{SPMI(\mathit{A,B})}=\mathrm{PMI(\mathit{A,B})}-\log k
$$
