DTW는 기본적으로 다이나믹 프로그래밍 기법(문제를 여러 개의 하위 문제로 분할에서 최적해를 계산하는 방법)을 이용한다. DTW를 위해 우선 두 시계열의 시점간의 유사도를 측정하기 위한 거리 함수를 정의해야 한다. 일반적으로 Euclidean distance가 많이 활용된다. DTW에서 시점을 탐색에서는 다음의 조건을 충족시켜야한다. 
- boundary condition : Warping 거리의 첫 번째와 마지막은 이어져야 한다.
- continuity : Warping 경로는 대각 요소를 포함한 인접한 셀로 제한된다.
- monotonicity: Warping 경로는 음의 방향으로 이동하지 않는다. (이미 matching된 warping이면, 이전 시점은 보지 않는다.)
DTW는 위의 조건들을 만족하면서 Warping 거리의 합이 최소가 되는 경로를 찾는 과정이다.Warping 거리의 합은 아래 수식으로 나타난다.
$$DTW_{i, j} =d_{i, j} + min(DTW_{i-1, j}, DTW_{i, j-1} DTW_{i-1, j-1})$$
![[DTW_fin.png|400]]