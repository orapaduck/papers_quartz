Encoder는 문장 내에서 정보를 추출하여 Context Vector 형식으로 저장한다.
Decoder는 이러한 Context Vector를 다시 문장으로 바꾸는 역할을 한다.

만약 만들고자 하는 모델이 번역기라면,
Encoder는 한국어 문장을 Context Vector 형식으로 변환할 것이고
Decoder에서는 Context Vector를 통해 영어 문장을 생성할 것이다.
즉, Context Vector는 문장의 의미, 단어의 위치 등이 저장된 정보 전달 수단이다.
## Encoder
## Decoder
### [[Teacher Forcing]]
decoder는 이전 예측을 바탕으로 다음 단어들을 예측해나가기 때문에 예측이 정답과 조금만 달라져도 전혀 다른 문장을 만들어낼 수 있다. 이를 해결하기 위해 정답 데이터를 이전 예측이라고 생각하여 학습시킨다.