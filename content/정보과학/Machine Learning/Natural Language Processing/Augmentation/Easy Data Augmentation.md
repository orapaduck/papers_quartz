Jason Wei, Kai Zou의 "EDA: Easy Data Augmentation Techniques for Boosting Performance on Text Classification Tasks"에서 소개된 방법으로 4가지의 단순한 증강을 통해 성능을 개선한다. 
## 1. EDA
### 1.1 Synonym Replacement
특정 단어를 동의어로 교체한다.
### 1.2 Random Insertion
문장 내에서 stop word가 아닌 단어를 선택한 뒤 동의어를 랜덤한 위치에 삽입한다.
### 1.3 Random Swap
문장 내에서 두 단어를 선택한 뒤 위치를 바꾼다.
### 1.4 Random Deletion
각각의 단어를 확률 $p$에 따라 제거한다.
## 2. 한계
데이터 셋의 크기가 충분한 경우 품질을 떨어트리고 편향 등에 의한 문제로 성능이 거의 향상되지 않는다. 마찬가지로 pretrained model에서도 성능 향상이 거의 나타나지 않는다.