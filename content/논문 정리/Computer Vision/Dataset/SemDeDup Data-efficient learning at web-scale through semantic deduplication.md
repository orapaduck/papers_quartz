### 1 Abstract
머신러닝의 발전은 데이터의 엄청난 증가에 의해 주도되었습니다. 그러나 LAION과 같은 대규모 웹 규모 데이터세트는 정확한 중복 항목을 검색하는 것 이상으로 선별되지 않아 잠재적으로 중복성이 많이 남습니다. 여기서는 사전 학습된 모델의 임베딩을 활용하여 의미상 유사하지만 정확히 동일하지는 않은 데이터 쌍인 "의미론적 중복"을 식별하고 제거하는 방법인 SemDeDup을 소개합니다. 의미 중복을 제거하면 성능이 유지되고 학습 속도가 빨라집니다. LAION의 하위 집합을 분석하면 SemDeDup이 성능 손실을 최소화하면서 데이터의 50%를 제거하여 훈련 시간을 효과적으로 절반으로 줄일 수 있음을 보여줍니다. 게다가 성능은 분산을 통해 증가합니다. 또한 부분적으로 선별된 데이터 세트인 C4에서 훈련된 언어 모델을 분석하여 SemDeDup이 이전 접근 방식보다 개선되는 동시에 효율성도 향상된다는 것을 보여줍니다. SemDeDup은 고품질 임베딩을 활용하는 간단한 방법을 사용하여 더 적은 데이터로 모델을 더 빠르게 학습할 수 있는 방법에 대한 예를 제공합니다.
### 2 정리
Perceptual duplicates - 픽셀 단위의 변형 등
Semantic duplicates - 동일한 이미지/문장에서 파생되어 의미가 비슷한 경우
Semantically redundant data - 구조는 다르지만 담고 있는 정보가 유사한 경우 
Misleading data - 부정적/유해한 정보를 전달하는 경우 (중립을 위한 것이라 보일 수 있으나, 실제로 성능 향성애 영향을 끼침)
pretrained model을 통해 임베딩하고 유사도가 임계값 이하이면 중복이라고 판단.
클러스터 중심과 유사도가 가장 낮은 샘플을 제외하고 제거
- LAION 및 T5에 사용된 C4 cophus의 개선
- 클러스터링을 통해 duplicatied data를 찾기 위한 비교 횟수를 5배 가량 줄임.
- 학습 중간중간 acc 측정하여 semdedup을 통해 얻은 절반 크기의 데이터셋으로 적은 iteration만으로 기존과 거의 동일한 성능을 유지함을 보임.

Abbas, Amro, et al. "SemDeDup: Data-efficient learning at web-scale through semantic deduplication." _arXiv preprint arXiv:2303.09540_ (2023).