---
tags: []
---
## Max Pooling
kernel에 포함되는 영역 안에서 최대 값을 추출한다. 일반적으로 [[Convolutional Layer]]의 feature map에서는 보고자 하는 feature의 값이 크게 형성되기 때문에 max pooling을 주로 사용한다.
## Average Pooling
kernel에 포함되는 영역의 평균 값을 추출한다. 과거 LeNet 등에서 사용되었으나 이미지를 전체적으로 smoothing 시키는 경향이 있어 sharp feature가 소실되는 문제가 있다. 조금 다른 방향으로 생각해보면 CNN에서 average pooling의 경우 kernel을 통해 구현이 가능하다(kernel내의 weight가 동일하다면 average pooling과 같은 역할을 수행할 것이다).
## Mean Pooling
kernel에 포함되는 영역 안에서 최소 값을 추출한다.