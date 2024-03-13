ANN의 가장 기본적인 형태로 노드 또는 레이어 간의 연결이 한 방향으로만 이어져있다. hidden layer와 model input의 차원이 다르기 때문에 두 개의 선형 변환 $W_{1}=(d_{model}, d_{ffn}$), $W_{2}=(d_{ffn}, d_{model})$로 표현되며 다음과 같이 쓸 수 있다.
$$
\begin{gathered}
\sigma: activation~function\\
\mathrm{FFN}(x)=\sigma(xW_{1}+b_{1})W_{2}+b_{2}
\end{gathered}
$$
## Position-Wise FFN
개별적인 embedding vector 단위로 FFN의 연산을 수행한다.