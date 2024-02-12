---
tags: []
---
모델이 예측에 실패하는 어려운(hard) sample들을 모으는 기법으로, hard negative mining을 통해 수집된 데이터를 활용하여 모델을 보다 강건하게 학습시키는 것이 가능해진다. 예를 들어 이미지에서 사람의 안면의 위치를 탐지하는 모델을 학습시킨다고 할 때, 사람의 안면은 positive sample이며, 그 외의 배경은 negative sample이다. 이 때 모델이 배경이라고 예측했으며, 실제로 배경인 bounding box는 True Negative에 해당하는 sample이다. 반면에 모델이 안면이라고 예측했지만, 실제로 배경인 경우는 False Positive sample에 해당한다.

모델은 주로 False Positive라고 예측하는 오류를 범한다. 이는 객체 탐지 시, 객체의 위치에 해당하는 positive sample보다 배경에 해당하는 negative sample이 훨씬 많은 class imbalance로 인해 발생하며 이러한 문제를 해결하기 위해 모델이 잘못 판단한 False Positive sample을 학습 과정에서 추가하여 재학습하면 모델은 보다 강건해지며, False Positive라고 판단하는 오류가 줄어든다.