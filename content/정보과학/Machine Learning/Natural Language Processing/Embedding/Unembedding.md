---
tags: []
---
[[One-Hot Encoding]]을 통해 만들어진 representation을 vocabulary $V$의 원소에 대한 logit 분포로 변환하는 방법이다. input token을 벡터로 변환한 representations로 이루어진 행렬은 orthogonal matrix일 것이다. 이때 $Q^{T}Q=I$임을 이용하여 embedding matrix의 전치를 곱해주면 각 단어에 대한 logit을 얻을 수 있다. 이를 통해 unembedding matrix $U$는 embedding matrix의 전치임을 알 수 있다.