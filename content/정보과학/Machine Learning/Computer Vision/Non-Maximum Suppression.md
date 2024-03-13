detect된 bounding box 중에 비슷한 위치에 있는 box를 제거하고, 가장 적합한 bbox를 선택한다.
1. 모든 bounding box에 대하여 threshold 이하의 confidence score를 가지는 bounding box는 제거한다.
2. 남은 bounding box들을 confidence score 기준 모두 내림차순 정렬한다.
3. 맨 앞에 있는 bounding box 하나를 기준으로 잡고, 다른 bounding box와 IoU 값을 구한다. IoU가 threshold 이상인 bounding box들은 제거한다.
4. 해당 과정을 순차적으로 시행하여 모든 bounding box를 비교하고 제거한다.