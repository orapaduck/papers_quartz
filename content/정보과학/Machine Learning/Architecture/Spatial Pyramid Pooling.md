---
tags: []
---
[[Flatten Layer]]의 경우 feature map을 1D vector로 변환하는 역할만 수행하기 때문에 이미지의 크기에 따라 vector의 크기가 변해 [[Fully Connected Layer]]를 사용하지 못한다는 단점이 있었다. 이를 해결하기 위해 서로 다른 크기의 kernel을 통해 pooling을 수행한 뒤 이를 flatten&concat 하여 고정된 크기의 vector를 만들어낸다. kernel의 크기가 고정되어 있지 않기 때문에 다양한 크기의 feature를 찾아낼 수 있다.