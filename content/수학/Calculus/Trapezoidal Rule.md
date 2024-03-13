정적분을 수치적으로 근사하기 위한 방법. 주어진 구간을 등분한 뒤 다음과 같이 함수의 적분 값을 구한다.

$$
\hat{F}=\sum_{i=0}^{n-1}{\frac{(x_{i+1}-x_{i})(f(x_{i+1})-f(x_{i}))}{2}}
$$
## 오차
$n$등분 했을 때 각 구간의 간격을 $h=x_{i+1}-x_{i}$라고 하면
$$
\int_{x_{i}}^{x_{i+1}} f(x)  \, dx =\int_{0}^{h} f(t+x_{i})  \, dt \tag{1}
$$

이때
$$
\int f(x)g'(x) \, dx = f(x)g(x)-\int f'(x)g(x) \, dx \tag{2}
$$
이므로
$$
\int_{0}^{h} f(t+x_{i})  \, dx = [f(t+x_{i})\cdot(t+A)]_{0}^h-\int_{0}^{h} f'(t+x_{i})\cdot(t+A) \, dt
\tag{3} 
$$

다시 (2)에 의해
$$
\begin{align}
\int_{0}^{h} f(t+x_{i})  \, dx &= [f(t+x_{i})\cdot(t+A)]_{0}^h \\
&- \left[ f'(t+x_{i})\cdot\left( \frac{(t+A)^2}{2}+B \right) \right]_{0}^{h}+\int_{0}^{h} f''(t+x_{i})\cdot\left( \frac{(t+A)^2}{2}+B \right) \, dt\tag{4}
\end{align}
$$

위 식을 간단히 하기 위해 $F_{i}=\hat{F_{i}}-E_{i}$라고 생각해보자. $\hat{F_{i}}=\frac{(x_{i+1}-x_{i})(f(x_{i+1})-f(x_{i}))}{2}$ 이므로, 우변의 첫 항을 $\hat{F_{i}}$, 나머지 항을 오차 $E_{i}$라고 생각할 수 있다. 

따라서 우변의 첫 항에 $x_{i+1}=h+x_{i}$를 대입하면
$$
\begin{align}
[f(t+x_{i})\cdot(t+A)]_{0}^h&=f(h+x_{i})\cdot(h+A)-f(x_{i})\cdot A \\
&=(h+A)\cdot f(x_{i+1})-A\cdot f(x_{i}) \\
A&=-\frac{h}{2}
\end{align}\tag{5}
$$

둘째 항을 간단히 하기 위해 $B=-\frac{h^{2}}{8}$이라고 두면
$$
\int_{0}^{h} f(t+x_{i})  \, dx = [f(t+x_{i})\cdot(t+A)]_{0}^h+\int_{0}^{h} f''(t+x_{i})\cdot\left( \frac{(t+A)^2}{2}+B \right) \, dt
\tag{6}
$$

따라서 오차 $E_{i}$는 다음과 같이 쓸 수 있다.
$$
E_{i}=-\int_{0}^{h} f''(t+x_{i})\cdot\left( \frac{(t+A)^2}{2}+B \right) \, dt\tag{7}
$$

오차의 크기는
$$
\begin{align}
|E_{i}|&=|\int_{0}^{h} f''(t+x_{i})\cdot\left( \frac{(t+A)^2}{2}+B \right) \, dt| \\
&\leq\int_{0}^{h}|f''(t+x_{i})|\cdot\left| \frac{(t+A)^2}{2}+B \right|\, dt
\end{align}\tag{8}
$$

각 구간에서 $f''$의 최댓값을 $M_{i}$이라고 하면
$$
\begin{align}
|E_{i}|&\leq M_{i}\int_{0}^{h} \left| \frac{(t+A)^2}{2}+B \right|\, dt \\
&=M_{i}\int_{0}^{h} \left| \frac{\left( t+\frac{h}{2} \right)^2}{2}-\frac{h^{2}}{8} \right|\, dt  \\
&=M_{i}\int_{0}^{h} \frac{h^{2}}{8}-\frac{\left( t+\frac{h}{2} \right)^2}{2} \, dt \\
&=M_{i}\frac{h^{3}}{12}
\end{align}\tag{9}
$$

전체 구간에서 오차는
$$
\begin{align}
E_{t}&=\sum_{i=0}^{n-1}E_{i} \\
&\leq\frac{h^{3}}{12}\sum_{i=0}^{n-1}M_{i}\\
&=\frac{(b-a)^{3}}{12n^3}\sum_{i=0}^{n-1}M_{i}
\end{align}\tag{10}
$$

구간 $[a,b]$에서 $f''$의 최댓값을 $M_{t}$로 두면
$$
E_{t}\leq\frac{(b-a)^{3}}{12n^3}\cdot nM_{t}=\frac{(b-a)^{3}}{12n^{2}}M\tag{11}
$$

따라서 오차는 $n^2$에 반비례한다.