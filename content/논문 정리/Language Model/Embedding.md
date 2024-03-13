## Stabilizing transformer training by preventing attention entropy collapse



Zhai, Shuangfei, et al. "Stabilizing transformer training by preventing attention entropy collapse." _International Conference on Machine Learning_. PMLR, 2023.
## Training-free Diffusion Model Adaptation for Variable-Sized Text-to-Image Synthesis

attention은 결국 context token의 정보에 가중치를 구하는 것. 이를 통해 정보를 합쳐 엔트로피가 높은 상태의 representation을 얻고, decoder를 통해 엔트로피 줄여 나간다. 이때 주어진 정보량이 적으면, 즉, 엔트로피가 과다하면 이미지의 일관성이 틀어지고 반대의 경우 너무 많은 정보가 주어져 일부가 생략되는 등의 문제가 발생.
->attention은 결국 representation이 가지고 있는 정보를 얼마나 넣을 것이냐를 결정하는 과정인데, 여기서 이미지의 해상도(언어 모델의 경우 token의 수)에 따라 주어져야 하는 정보의 양이 다를 것이다 (softmax를 사용하므로 긴 시퀀스에 대해서 약간의 label smoothing이 일어남). 따라서 스케일링을 통해 attention을 조절해주자!
-> attention의 크기가 모델이 다루는 시퀀스의 크기가 증가할 수록 따라서 증가한다.

다분화 줄기세포 -> 세포
Jin, Zhiyu, et al. "Training-free diffusion model adaptation for variable-sized text-to-image synthesis." Advances in Neural Information Processing Systems_ 36 (2024).

