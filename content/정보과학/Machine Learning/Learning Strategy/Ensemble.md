여러 classifier를 하나의 meta classifier로 연결하여 개별적인 classifier보다 더 좋은 일반화 성능을 달성하는 것이다. 

## Majority Voting
classifier의 과반수가 예측한 class label을 선택하는 단순한 방법이다.
### Plurality Voting
binary classification에 사용하는 majority voting을 multiclass classification으로 확장한 것으로 가장 많은 투표를 받은 label을 선택한다.
### Weighted Voting
majoriy voting에 가중치를 도입한 방식으로 각 모델의 정확도를 곱하여 결과를 취합하는 방식이다.
## Bagging
bootstrap aggregating의 약자로, dataset에서 중복을 허용하는 bootstrap sample을 뽑아서 여러 개의 ensemble model을 학습시키는 방법이다. 복원추출을 수행함으로써 기존의 데이터가 갖는 noise와 다른 noise를 갖는 dataset을 만들어내어 특정한 noise에 종속되어 noise의 변동으로 인한 영향을 방지하는 역할을 한다.
## Boosting
train dataset에서 중복을 허용하지 않는 부분 집합 $d_{1}$을 추출해 weak learner $C_{1}$을 학습시킨다. 이후 $d_{2}$와 $C_{1}$에서 잘못 분류된 샘플의 50%를 더하여 $C_{2}$를 학습시킨다. $C_{1}$과 $C_{2}$에서 잘못 분류한 샘플 $d_{3}$를 찾아 $C_{3}$를 학습 시킨 뒤 $C_{1}$, $C_{2}$, $C_3$를 plurality voting으로 연결한다. 
### AdaBoost