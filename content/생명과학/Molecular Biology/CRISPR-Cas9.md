## CRISPR(Clusterd Regularly Interspaced Short Palindremic Repeat)
규칙적인 간격을 갖고 나타나는 짧은 palindrome의 반복을 말한다. pre-crRNA로 전사된 후 침입한 표적 RNA or DNA를 파괴하는 짧은 RNA로 가공된다.
## Cas9
Cas enzyme은 guide RNA와 짝을 이뤄 target DNA의 이중나선을 절단한다.
CRISPR system은 기작에 관여하는 Cas 단백질이 여러 개인 경우 class 1, 한 개인 경우 class 2로 분류한다. 두 class는 genome에서의 위치 작용하는 Cas 단백질의 종류에 따라 다시 6가지 type으로 세분화되며 CRISPR-Cas9은 class 2 type II에 해당한다.
## Guide RNA
세포 내에서 Cas9 protein과 crRNA가 발현되면 target DNA 서열을 찾기 위한 DNA surveillance complex를 형성한다.
1. tracrRNA라는 RNA가 추가적으로 발현되어 crRNA 내 반복 서열과 상보적인 결합을 이룬다. 이때 crRNA, linker, tracrRNA로 구성된 single guide RNA를 사용하여도 효소 활성에 문제가 없다.
2. guide DNA가 DNA와 상보적인 결합을 형성하고 DNA의 상보적인 서열 근처에 PAM(Protospacer-Adjacent Motif)라는 염기 서열이 있어야만 활성을 가진다.
3. Cas9 단백질에는 HNH와 RuvC라는 두 개의 nuclease domain을 가지고 있는데, 목표로 하는 DNA 서열에 Cas9이 결합하면 이 두 도메인이 목표 DNA의 이중 가닥을 각각 한 가닥씩 자르게 된다.
4. 절단된 DNA는 DNA repair 기작을 통해 편집이 이뤄진다. 절단된 부위를 단순히 이어붙이는 비상동말단결합(Nonhomologous end joining, NHEJ) 기작으로는 유전자를 녹아웃시킬 수 있고, 상동 재조합(Homologous recombination)의 얼개인 동형방식수선(Homology Directed Repair, HDR)을 통해 유전자 단일 가닥 일부를 없애, dna polymerase와 수선 단백질로 교정하거나 삽입할 수도 있다.