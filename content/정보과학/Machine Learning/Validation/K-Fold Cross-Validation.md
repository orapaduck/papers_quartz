dataset을 중복을 허용하지 않는 k개의 fold로 랜덤하게 나눈다. 그 뒤 k-1개의 fold를 train, 나머지 하나의 fold를 test로 사용하여 성능을 평가한다. 이 과정을 k번 반복하여 k개의 모델과 성능 추정을 얻는다. 독립적인 fold에서 얻은 성능 추정을 기반으로 모델의 평균 성능을 계산한다. 간단히 정리하자면, k번의 [[Holdout Cross-Validation]]을 수행한 뒤 평균을 구하는 것이다.
## Stratified K-Fold Cross Validation
각 fold에서의 class 비율이 전체 dataset에 있는 class 비율을 유지하도록 한다.