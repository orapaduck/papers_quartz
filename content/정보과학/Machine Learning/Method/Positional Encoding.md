단어를 embedding vector 형식으로 바꾸는 경우 vector에는 문장 내 에서의 단어의 위치에 관한 정보가 저장되어 있지 않기 때문에  각 위치마다 특정 벡터를 더하여 단어 위치 정보를 저장한다.
## Sinusoidal Positional Encoding
문장 내에서 단어의 위치 $pos$, embedding vector의 $i$번째 차원, 모델의 차원 $d_{model}$에 대해 아래와 같은 식을 통해 positional encoding을 위한 벡터를 구한다. 여기서  $i$가 embedding vector의 차원에 영향을 받기 때문에 각 차원마다 다른 주기의 함수를 사용하며 pos를 통해 위치 정보를 어느 정도 encoding 할 수 있다.

$$
\begin{gathered}
s.t.\  d\ mod\ 2 \equiv 0 \\
PE(pos, 2i) = \sin\left( \frac{pos}{10000^{2i/d_{model}}} \right)\\
PE(pos, 2i+1) = \cos\left( \frac{pos}{10000^{2i/d_{model}}} \right)
\end{gathered}
$$
그리고 나서 PE를 기존 embedding vector에 더해주어 위치 정보를 추가한다.

위 식을 통해 알 수 있는 점은, n번째 단어의 positional encoding vector를 통해 n+k번째 단어의 positional encoding vector를 유추할 수 있다는 점이다. 단어의 위치가 pos와 pos+k일 때의 PE vector는 아래와 같다.
$$

\omega_{i}=\frac{1}{10000^{2i/d_{model}}}\\
$$
$$
\begin{gathered}
PE_{pos, i} = \left[
\sin\left( pos \cdot \omega_{i} \right),
\cos\left( pos \cdot \omega_{i} \right)
\right]\\
\end{gathered}
$$
$$
\begin{gathered}
PE_{pos+k, i} = \left[
\sin\left( (pos+k) \cdot \omega_{i} \right),
\cos\left( (pos+k) \cdot \omega_{i} \right),
\right]
\end{gathered}
$$
$PE_{pos+k}$를 자세히 보면 $\omega_{0}, \omega_{1}, \omega_{2} \dots$일 때 각각 $k\cdot \omega_{i}$만큼 회전 변환 해주었음을 알 수 있다. 따라서 $PE_{pos+k}$는 다음과 같이 나타낼 수 있다.
$$
T(k)\cdot PE_{pos}=PE_{pos+k}
$$
$$
\begin{gathered}
M(k)_{i} = \begin{pmatrix}
\cos(k\cdot \omega_{i}) & \sin(k\cdot \omega_{i}) \\
-\sin(k\cdot \omega_{i}) & \cos(k\cdot \omega_{i})   \\
\end{pmatrix}
\end{gathered}
$$
$$
T(k)=
\begin{pmatrix}
\begin{pmatrix}
\cos(k\cdot \omega_{0}) & \sin(k\cdot \omega_{0}) \\
-\sin(k\cdot \omega_{0}) & \cos(k\cdot \omega_{0})   \\
\end{pmatrix}& \dots & 0 \\
\vdots & \ddots & \vdots  \\
0 & \dots &\begin{pmatrix}
\cos(k\cdot \omega_{d_{model}/2}) & \sin(k\cdot \omega_{d_{model}/2}) \\
-\sin(k\cdot \omega_{d_{model}/2}) & \cos(k\cdot \omega_{d_{model}/2})   \\
\end{pmatrix}\\
\end{pmatrix}
$$
따라서 sinusoidal positional encoding은 문장 내에서 상대적인 위치 정보를 벡터의 회전을 통해 저장하고 있다고 할 수 있다.
![[정보과학/실습/Sinusoidal Positional Encoding.py]]