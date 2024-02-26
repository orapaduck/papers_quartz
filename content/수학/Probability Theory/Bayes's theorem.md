사전 확률과 가능도를 통해 두 배반 사건에 대한 사후 확률을 구하기 위한 방법이다. 사건 [[Conditional Probability]]를 이용하여 다음과 같이 쓸 수 있다:
$$
\begin{align}
P(A|B)&=\frac{P(A \cap B)}{P(B)} \\
P(B|A)&=\frac{P(A|B)P(B)}{P(A)}
\end{align}
$$
## 일반화
표본공간 $S$를 $A_{1}, A_{2}, \cdots,A_{n}$로 분할하면 다음과 같이 쓸 수 있다:
$$
\begin{align} 
S&=A_{1}\cup A_{2}\cup\cdots\cup A_{n}\\
P(A_{i}|B)&=\frac{P(A_{i} \cap B)}{P(B)} \\
\end{align}
$$
이때 $A_{1} \cup A_{2} \cup\cdots A_{n}=S$이므로
$$
\begin{align}
P(B)&=P(B \cap (A_{1} \cup A_{2} \cup\cdots A_{n})) \\
&=P(B|A_{1})P(A_{1})+P(B|A_{2})P(A_{2})\cdots+P(B|A_{n})P(A_{n}) \\
\therefore P(A_{i}|B)&=\frac{P(B|A_{i})P(A_{i})}{P(B|A_{1})P(A_{1})+P(B|A_{2})P(A_{2})\cdots+P(B|A_{n})P(A_{n})}
\end{align}
$$
