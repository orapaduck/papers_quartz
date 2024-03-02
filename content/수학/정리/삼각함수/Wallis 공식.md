부분 적분을 통해 다음과 같이 쓸 수 있다.
$$
\begin{align} \\
\int_{0}^{\pi/2} \sin^{n}x \, dx &= \int_{0}^{\pi/2} \sin^{n-1}x \sin x \, dx  \\
&=[\sin^{n-1}x(-\cos x)]_{0}^{\pi/2}-\int_{0}^{\pi/2} (n-1)\sin^{n-2}x \cos x (-\cos x) \, dx \\
&=-[\sin^{n-1}x\cos x]_{0}^{\pi/2}+(n-1)\int_{0}^{\pi/2} \sin^{n-2}x \cos^{2}x \, dx  \\
&=-[\sin^{n-1}x\cos x]_{0}^{\pi/2}+(n-1)\int_{0}^{\pi/2} \sin^{n-2}x (1-\sin^{2}x) \, dx  \\
&=-[\sin^{n-1}x\cos x]_{0}^{\pi/2}+(n-1)\int_{0}^{\pi/2} \sin^{n-2}x-\sin^{n}x) \, dx  \\
n \int_{0}^{\pi/2} \sin^{n} x \, dx &=-[\sin^{n-1}x\cos x]_{0}^{\pi/2}+(n-1)\int_{0}^{\pi/2} \sin^{n-2}x \, dx  \\
\therefore \int_{0}^{\pi/2} \sin^{n} x \, dx &=\frac{n-1}{n}\int_{0}^{\pi/2} \sin^{n-2}x \, dx 
\end{align}
$$
$$
\begin{align}
 I_{n}&=\frac{n-1}{n}I_{n-2}
\end{align}
$$
