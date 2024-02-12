## Position-Wise FFN
position-wise FFN은 3개의 layer와 1개의 activation function으로 이루어져 있다. hidden layer와 model input의 차원이 다르기 때문에 두 개의 선형 변환 $W_{1}=(d_{model}, d_{ffn}$), $W_{2}=(d_{ffn}, d_{model})$로 표현되며 다음과 같이 쓸 수 있다.
$$\begin{gathered}
\sigma: activation~function\\
\mathrm{FFN}(x)=\sigma(xW_{1}+b_{1})W_{2}+b_{2}
\end{gathered}$$