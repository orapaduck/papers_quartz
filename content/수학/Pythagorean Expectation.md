피타고리안 기대 승률의 공식은 다음과 같다.
$$
P(n)=\frac{W^n}{W^n + L^n}
$$
$W$와 $L$은 각각 득점과 실점이며 $n$은 종목이나 팀에 따라 결정되는 상수이다. 최근 경기 성적을 통해 다음과 같이 $n$을 구할 수 있다.
$$
\begin{align}
R&=winrate \\
n&=\underset{n}{\operatorname{argmin}}{(R-P(n))^2}
\end{align}
$$
