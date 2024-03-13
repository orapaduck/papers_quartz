---
tags: 작성중
---
빠른 detection과 높은 recall을 동시에 만족하는 방식으로 색, 텍스쳐, 크기, 형태 등에 따라 유사한 region을 계층적으로 그룹핑한다.
1. segment된 모든 부분들을 bounding box로 만들어서 region proposal 리스트에 추가한다.
2. 색, 텍스쳐, 크기, 형태 등에 유사한 segment들을 그룹핑한다.