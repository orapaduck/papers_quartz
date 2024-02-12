## Batch Normalization
Sigmoid의 경우 입력 값의 크기가 커질 수록 gradient의 크기가 작아지고 이러한 노드가 누적되며 Vanishing gradient가 발생한다. 이러한 문제를 해결하기 위해 ReLU를 사용한다고 가정했을 때, 만약 입력 값이 모두 양수라면, 또는 모두 음수라면 ReLU는 linear한 함수와 구분할 수 없게 되어 비선형성이 가지는 이점을 활용할 수 없게 될 것이다.

이때 활용할 수 있는 가장 단순한 해법 중 하나가 normalization이다. ReLU의 경우 비선형성을 가지는 부분은 결국 입력 값이 0인 지점이기에 평균을 0, 분산을 1로 맞추어 간단히 해결할 수 있다. 하지만 activation function은 종류가 많고 각 함수에 적절한 평균, 분산도 알 수 없기에 이를 적절히 fitting하기 위한 방법 또한 필요하다. 입력 데이터 $x$의 평균을 $\bar{x}$, 표준 편차를 $\sigma$라고 한다면 각각의 feature에 대해 다음과 같이 2개의 parameter a, b를 통해 fitting 할 수 있다.
$$a({{x-\bar{x}}\over{\sigma}})+b$$
위와 같은 방식을 통해 training을 마치고 실제 prediction을 진행할 때에는 대부분의 상황에서 입력 값이 하나씩 들어온다. 이런 상황에서 평균은 입력 값이 될 것이고 분산은 0이 되므로 train set에서 비교적 최근 값에 더 큰 가중치를 부여하는 exponential moving everage를 통해 weighted average를 구한 뒤 이를 통해 얻은 parameter를 사용한다.

앞선 layer의 parameter 변화 또한 hidden layer와 output layer에서는 입력 데이터의 분포에 영향을 줄 수 있기 때문에 이러한 현상을 방지하기도 한다.

**Batch Normalization의 parameter는 어떻게 gradient를 계산할까**
## Layer Normalization
Layer Normalization은 각각의 layer가 비선형성을 잃지 않는 지를 중요시한다. 따라서 layer에 들어오는 하나의 데이터에 대해서 normalization을 수행한다.
## Local Response Normalization
[[Lateral Inhibition]]을 모방하여 만들어진 방법으로, 이웃한 feature map에서 특정 위치의 값이 크면, local response normalization이 적용된 feature map의 해당 위치의 값을 작게 한다.ㄴㄴ