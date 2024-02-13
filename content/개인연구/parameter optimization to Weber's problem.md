기하 중앙값
주어진 점들에 대해서 유클리디안 거리의 합이 최소가 되는 지점

오목 함수
한 점이 주어질 때 점의 위치에 따른 거리가 오목 함수이고 오목 함수의 합은 오목 함수 이므로 optimization이 매우 간단하다.

single layer perceptron으로 이루어진 model이 있다.각 데이터에 대해 overfitted model이 있을 때, 이 model의 parameter $W, b$를 해당 데이터에 대한 일종의 representation으로 생각해보자. 각 데이터 $D_{i}$에 대한 prediction error를 최소화하는 parameter를 $W_{i}, b_{i}$이라고 하자. 전체 데이터를 학습시킨 모델의 parameter를 $W_{model}, b_{model}$라고 할 때, model이 가지는 error는 $\sum{|W_{i}-W_{model}|}$, $\sum{|b_{i}-b_{model}|}$ 각각에 대해 단조 증가 함수이다. 물론 activation function에 따른 차이가 있겠지만, 적어도 감소하진 않는다(예를 들어, ReLU에서는 입력이 일정 값 이하이면 기울기가 0이 된다). 

그렇다면, Weber's problem 또는 geometric median에서 그러했듯이, optimal parameter는 각 데이터에 대한 $W_{i}, b_{i}$와의 차이가 가장 작은 점이 아닐까?
## 1. Solutions to Weber's problem
### 1.1 Weiszfeld Algorithm
1. 초기 추정값을 설정한다.
   $$
   y_{0}=mean(x)
   $$
1. 오차의 크기에 반비례하여 각 점에 가중치를 둔다. 이때 가중치의 역수의 합으로 나누어 정규화를 한다.
$$
y_{k+1}=\frac{\left(\sum_{i=1}^m {x_{i}\over{||x_{i}-y_{k}||+\epsilon}}\right)}{\left(\sum_{i=1}^m \frac{1}{||x_{i}-y_{k}||+\epsilon}\right)}\qquad(\epsilon=1e^{-5})
$$
식을 보면, machine learning에서 일반적으로 사용하는 squared error가 아니다. 이러한 방식이 MSE에서도 통할까? 굳이 MSE를 쓰지 말고, 위 식을 조금 수정하여 RMSE 형태로 사용해보자. MSE가 지나치게 커지는 문제를 해결할 수 있을 것이다.
$$
\begin{align}
RMSE_{k} =& \sum_{i=1}^m\sqrt{\frac{1}{||x_{i}-y_{k}||+\epsilon}\cdot{\frac{1}{n}}}\qquad(\epsilon=1e^{-5})\\ \\
y_{k+1}=&\frac{RMSE_{k} \cdot x}{||RMSE_{k}||}
\end{align}
$$
앞에서, parameter에 따른 error가 단조 증가 함수라고 서술하였다. 이 때문에 발생하는 몇 가지 문제가 있다. ReLU를 예로 들어보면, <font color="#ff0000">입력 값이 일정 이하일 때 0을 반환하기 때문에, error가 동일한 구간이 생기게 된다. </font>