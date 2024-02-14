## Attention
입력된 query에 대해서 내적과 같은 연산을 통해 key와의 유사도를 측정하고 내적 값의 합이 1이 되도록 내적 값의 합으로 나눠주어 정규화한다.
### Self-Attention
attention에 query와 key 모두 입력된 문장으로 사용한다고 할 때 각각의 단어에 대한 가중치 합을 구하면 이는 자기 자신과 문장 내에 포함된 다른 단어들로 이루어진 정보가 포함되어 있다. 이를 신경망에 입력해 분석하면 자기 자신 뿐만 아니라 주변 단어들과의 연관성을 통해 간접적으로 나마 단어의 의미를 분석할 수 있다.
#### Multi-Head Attention
attention을 수행할 때 query, key, value를 head의 수 만큼 분리한 뒤 각각에 대해 독립적으로 attention을 수행한다. 이때 각 head는 주어진 subsequence 내에서 attention을 주기 때문에 모델이 input token에서 다양한 종속 관계를 표현할 수 있게 된다. 이후 attention value를 concatenate하여 attention을 수행했을 때와 동일한 차원의 결과를 얻을 수 있다. 즉, 병렬 연산을 수행하기 위해 여러 head로 나눈 뒤 결과를 합치는 것
### Scaled Dot-Product Attention
기존의 dot-product attention은 embedding vector의 차원 $d_{k}$가 커질수록 값이 커질 가능성이 높아진다. 이로 인해 softmax에서 gradient가 작은 구간에 쉽게 도달하는데, 이를 해결하고자 $\sqrt{ d_{k} }$를 통해 scailing 해준 것이다.