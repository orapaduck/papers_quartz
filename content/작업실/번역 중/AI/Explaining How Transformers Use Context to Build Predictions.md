---
Created: 2024-02-15
Last Modified: 2024-02-22
tags:
  - NLP
DOI: "\rhttps://doi.org/10.48550/arXiv.2305.12535"
완료 여부: false
---
```text-progress-bar
progress:: 4/9.5
fill:🟩
transition:🟨
empty:◻️
prefix:[
suffix:]
length:10
```
## Abstract
&emsp;자연어 생성 모델은 이전의 문맥을 기반으로 단어를 생성합니다. 기존의 방식은 모델의 예측에 대한 설명으로 입력 기여도를 제공하지만, 앞선 단어가 어떻게 레이어를 거쳐 모델에 영향을 끼치는지 아직 불분명합니다. 이 연구에서, 우리는 Transformer의 설명 가능성에 대한 최근의 발전을 활용하고 언어 생성 모델을 분석하는 절차를 제시합니다. 대조적인 예시를 사용하여, 우리의 설명이 언어 현상의 증거^[문법적으로 다음 단어에 무엇이 와야 한다고 추정할 수 있도록 하는 주된 단서들을 언어 현상의 증거라고 표현하는 듯하다. 예시는 Table 2 참조.]와 어떻게 정렬되는지 비교하고, 우리의 방법이 그래디언트 기반 및 섭동 기반의 기준보다 일관되게 더 잘 정렬됨을 보여줍니다. 그 다음, Transformer 내부의 MLPs의 역할을 조사하고, 이들이 문법적으로 허용되는 단어를 예측하는 데 도움이 되는 특징을 학습한다는 것을 보여줍니다. 마지막으로, 우리의 방법을 신경 기계 번역 모델에 적용하여, 이들이 예측을 구축하는 데 인간과 유사한 source-target alignment^[일반적으로 alignment는 단어 또는 문장 간의 대응을 나타내는 듯 함. source vector를 알맞은 target vector에 대응 시킨다는 점에서 정렬이라고 표현하는 듯]을 생성한다는 것을 입증합니다.
## 1 Introduction
&emsp;언어 모델들, 특히 Transformer 기반의 언어 모델들 (Brown et al., 2020; Zhang et al., 2022a)은 최근 자연어 처리 분야에 혁명을 일으켰습니다. 그럼에도 불구하고, 이 모델들이 어떻게 인간의 언어와 유사한 언어를 생성하는 지에 대한 이해에는 여전히 간극이 있습니다. 이는 특정 상황에서 모델의 실패 원인을 결정할 수 없다는 것을 의미하며, 이로 인해 halluination을 포함하거나 유해한 내용을 생성할 수 있습니다.

&emsp;NLP 모델 예측의 설명 가능성에 대한 앞선 연구들 중 대다수는 일반적으로 작은 출력 차원을 가지는 텍스트 분류나 자연어 추론과 같은 다운스트림 작업을 중심으로 이루어졌습니다 (Atanasova et al., 2020; Bastings et al., 2022; Zaman and Belinkov, 2022). 이 연구 분야에는 attention mechanism 분석에 중점을 둔 많은 연구(Jain and Wallace, 2019; Serrano and Smith, 2019; Pruthi et al., 2020)와 입력 기여도 점수를 얻기 위해 그래디언트 기반 방법(Li et al., 2016a; Sundararajan et al., 2017)을 적용하는 연구도 포함됩니다.
![[Table1.png|200]]
<font color="#ff0000"><em>Table 1: </em></font>
&emsp;최근 들어, 여러 연구들은 언어 모델링 작업에서 Transformer의 해석 가능성에 대해 다루고 있습니다 (Vaswani et al., 2017). Elhage et al. (2021)은 Figure 1에 설명된 Transformer를 다양한 요소(MLPs, attention heads...)가 residual stream의 하위 공간을 읽고 쓰는 residual stream의 관점^[residual connection으로 연결된 stream, 흐름에 정보를 추가해 나가는 것을 write into  the residual stream이라고 표현한 거 같다. 즉, 이 논문에서는 attention과 MLP 등을 residual stream의 정보를 읽고 수정해 나가는 역할이라고 해석한다 (Figure 1 참조).]에서 연구하였습니다. 이 접근법은 attention heads가 맥락을 탐색하여 동일한 토큰의 이전 반복을 찾고 다음 토큰을 복사하는 induction heads (Olsson et al., 2022)나 Indirect Object Identification (IOI) 해결에 특화된 heads(Wang et al., 2023) 같이 언어 모델들의 특정 행동을 설명하는 데에 도움이 되었습니다. 비슷하게, Transformer 내부의 MLPs 또한 residual stream에 쓰는 요소로 연구되어 왔습니다.  Geva et al. (2022)은 MLP 블록이 value를 residual에 추가하는 key-value meory 처럼 동작하여 유사한 의미를 가진 단어가 예측되도록 할 수 있음을 관측하였습니다.

&emsp;더 나아가, attention heads, output weigh matrix 그리고 layer normalization으로 구성된 transformer의 attention mechnism은 해석 가능한 작업으로 분해 가능하고 (Kobayashi et al., 2020, 2021), 신뢰성이 매우 높다고 증명된 레이어별 정보를 제공합니다 (Ferrando et al., 2022b,a).

&emsp;이 연구에서 우리는 Transformers language generators의 예측을 설명하기 위해 attention 분해와 함께 residual stream analysis의 관점을 사용하는 것을 제안합니다. 우리의 접근 방식은 각 레이어에서 각각의 token representation에 의해 더해지거나 빼진 logit의 양을 측정합니다. 그런 다음 레이어를 거쳐 집계함으로써 모델 입력으로 logit 기여도를 추적합니다 (*Logit* explanation). 추가적으로, ALTI(Ferrando et al., 2022b)를 사용하여 중간 레이어에서 정보의 혼합을 고려합니다 (*ALTI-Logit* explanation).

&emsp;제안된 해석 가능성에 대한 방식을 평가하기 위해, 우리는 최근에 소개된 constrastive explanation framework(Yin and Neubig, 2022)를 따르며 이는 모델이 이미 몇몇 언어적 phenomena evidence에 의해 설명된 foil token 대신 특정 token을 예측한 이유를 설명하는 것을 목표로 합니다. 그리고 나서 우리는 MLPs의 역할을 분석하고 그들이 문법을 따르는 prediction을 선택하는 데에 도움을 준다는 것을 보였습니다. 마지막으로, 우리는 NMT 모델들이 번역문을 만들기 위해 사람과 유사한 source-target alignment를 생성한다는 것을 보여줍니다.[^1]

[^1]: 이 논문을 따르는 코드는 https://github.com/mt-upc/logit-explanations 에 있습니다.
## 2 Approach
### 2.1 Residual Stream
![[images/Explaining How Transformers Use Context to Build Predictions/Figure1.png|200]]
*Figure 1: residual stream에 쓰는 모듈로써 표현된 Transformer 언어 모델*

&emsp;언어 생성이 timestep $t$를 따라 주어질 때, 마지막 레이어의 출력[^2] $x_{t}^{L} \in \mathbb{R}$은 다음 token 예측의 logit을 구하기 위해 unembedding matrix $U \in \mathbb{R}^{d \times |V|}$를 사용하여 token embedding space로 사영됩니다. 그리고 나서, 어휘에 대한 확률 분포를 얻기 위해 softmax 함수를 적용합니다:
$$
P(x_{t}^{L})=softmax(x_{t}^{L}U)\tag{1}
$$
&emsp;Transformer의 residual connection은 각 블록 이후에 업데이트되는 정보의 stream으로 볼 수 있습니다 (nostalgebraist, 2020; Elhage et al., 2021; Mickus et al., 2022). 레이어 $l$에서 $t$ 위치의 residual stream에 "쓰는" MLP와 self-attention 블록을 $o_{t}^{l}$, $\tilde{x}_{t}^{l}$이라고 하겠습니다 (Figure 1). residual stream의 최종 상태는 다음과 같이 나타낼 수 있습니다:
$$
x_{t}^{L}=\sum_{l}^{L}o_{t}^{l}+\sum_{l}^{L}\tilde{x}_{t}^{l}+x_{t}^0\tag{2}
$$
특정한 next token prediction의 최종 logit $w$는 residual stream의 최종 상태와 $U$의 $w$번째 열[^3]을 곱하여 계산할 수 있다:
$$
\begin{align}
logit_{w}&=x_{t}^LU_{w} \\
&=(\sum_{l}^{L}o_{t}^{l}+\sum_{l}^{L}\tilde{x}_{t}^{l}+x_{t}^0)U_{w}
\end{align}\tag{3}
$$
선형성에 의해:
$$
logit_{w}=\sum_{l}^{L}o_{t}^{l}U_{w}+\sum_{l}^{L}\tilde{x}_{t}^{l}U_{w}+x_{t}^{0}U_{w}\tag{4}
$$

![[images/Explaining How Transformers Use Context to Build Predictions/Figure2.png|400]]
*Figure 2: self attention 블록의 출력이 각 레이어에서 $w$의 logit을 업데이트한다 (왼쪽). logit의 업데이트는 각 input token에 대해 분해될 수 있다 (오른쪽).*

[^2]: 우리는 이를 열 벡터로 나타내는 것을 선호합니다.
[^3]: 우리가 행렬 $B$의 j번째 행을 $B_{:, j}$ 대신에 $B_{j}$라고 표기하는 것을 선호한다는 점을 알아두세요.
### 2.2 Multi-head Attention as a Sum of Vectors
&emsp;Kobayashi et al. (2021)의 Post-LN self attention 블록 분해에 영감을 받아, 우리는 현재의 LMs에서 흔히 볼 수 있는 Pre-LN 설정에 유사한 접근 방법을 적용하였습니다 (전체 유도 과정은 부록 A 참조). 각 생성 단계 $t$에서 self-attention 블록의 출력은 다음과 같이 나타낼 수 있습니다:
$$
\tilde{x}_{t}^{l}=\sum_{j}^{t}T_{t,j}^l(x_{j}^{l-1})+b_{O}^{l}\tag{5}
$$
$T_{i,j}^l:\mathbb{R}^{d}\mapsto \mathbb{R}^{d}$이 각 레이어의 input token representation (또는 residual stream) $x_{j}^{l-1} \in \mathbb{R}^d$에 적용된 Affine transformation이라고 하면:
$$
T_{i,j}^{l}(x_{j}^{l-1})=\sum_{h}^{H}(x_{j}^{l-1}L^{l}W_{V}^{l,h}A_{t,j}^{l,h}W_{O}^{l,h})\tag{6}
$$
 $W_{V}^{l,h} \in \mathbb{R}^{d \times d_{h}}$는 value를 이루는 행렬, $W_{O}^{l,h} \in \mathbb{R}^{d_{h} \times d}$ attention 출력 행렬 (head 당), 그리고 이에 대응되는 bias는 $b_{O}^{l} \in \mathbb{R}^d$이다. 이때 $A^{l,h} \in \mathbb{R}^{t \times t}$는 attention weight 행렬, $\theta^{l, h} \in \mathbb{R}^{d}$는 bias에서 유래한 remaining terms 그리고 $L^l \in \mathbb{R^{d \times d}}$는 centering, normalizing 그리고 layer normalization의 scaling 연산을 통합한 것이다 (부록 A 참조).
### 2.3 Layer-wise Contributions to the Logits
식 (4)와 식 (5)를 활용하여 다음을 얻을 수 있습니다[^4] :
$$
\begin{align}
logit_{w}&=\sum_{l}^{L}\underbrace{o_{t}^{l}U_{w}}_{\Delta logit_{w\leftarrow MLP^{l}}^{l}}+\sum_{l}^{L}\underbrace{\sum_{j}^{t}T_{t,j}^l(x_{j}^{l-1}U_{w})}_{\Delta logit_{w\leftarrow Self-attn^{l}}^{l}}+x_{t}^{0}U_{w}
\end{align}\tag{7}
$$
&emsp;각 self-attention에 대한 logit의 변화량 $\Delta logit_{w\leftarrow Self-attn^{l}}^{l}$은 각각의 $x_{j}^{l-1}$​에 대한 개별 업데이트로 확장될 수 있습니다(그림 2 참조). 그러므로, output token $w$에 대한 각 레이어의 input token representation의 기여는 $w$의 logit을 변화 시키는 것으로 정의됩니다:
$$
\Delta logit_{w\leftarrow x_{j}^{l-1}}^l=T_{i,j}^{l}(x_{j}^{l-1})U_{w}\tag{8}
$$
이와 비슷하게, logit의 변화는 식 (6)의 affine transformation에 unembedding 행렬을 곱하여 head level에서 계산될 수 있습니다.

[^4]: bias는 공간을 절약하기 위해 표기하지 않았습니다.
### 2.4 Tracking Logit Updates to the Input Tokens
&emsp;각각의 residual stream이 레이어 전반에 걸쳐 token의 identity를 유지한다고 가정하면, input token $s$에 의해 생성된 $w$에 대한 전체 logit 변화는 다음과 같이 계산된다.
$$
\Delta logit_{w\leftarrow s}=\sum_{l}^{L}\Delta logit_{w\leftarrow x_{j=s}^l}^l\tag{9}
$$
이는 전체 레이어에서 s번째 토큰의 intermediate representation에 의한 logit 변화의 합 입니다. 이제부터, 우리는 이를 $Logit$ explanation이라고 하겠습니다.

&emsp;하지만, 중간 레이어에서 각각의 residual stream은 혼합된 input token들을 나타냅니다. 그러므로, $\Delta logit_{w\leftarrow x_{j}^{l-1}}^l$은 모델의 input token s=j에 의한 것이라고 직접적으로 해석할 수 없습니다. 우리는 residual stream에 문맥 정보가 혼합되는 것을 측정하여 모델의 input에 대한 logit 변화를 추적하는 것을 제한합니다. 이를 위해 우리는 ALTI (Ferrando et al., 2022b)를 사용합니다. ALTI와 rollout method를 사용하는 다른 방법(Abnar and Zuidema, 2020; Mohebbi et al., 2023)은 token representation이 이전 레이어의 representation을 선형 결합하여 형성된다고 가정합니다. 즉, $x_{i}^{l}=\sum_{j}c_{i,j}^{l}x_{j}^{l-1}$이고 이때 $\sum_{j}c_{i,j}^{l}=1$입니다. $c_{i,j}^{l}$은 $x_{i}^l$에 대한 $x_{j}^{l-1}$의 기여도를 나타냅니다. 레이어별 계수 행렬을 곱함으로써 $M^{l}=C^{1} \cdot C^{2}\cdot\cdots C^{l}$을 얻을 수 있고 이를 통해 각 중 레이어의 representation을 input token의 선형 결합으로 표현할 수 있습니다 $x_{i}^{l}=\sum_{s}m_{i,s}^{l}x_{s}^{0}$.

&emsp;$M^{l-1}$의 열 s는 레이어 $l$에 입력되는 각 token representation에 인코딩된 s번째 input token의 기여도 비율을 포함합니다. 우리는 다음과 같은 식을 통해 input token (Figure 3, 오른)에 의한 next predicition token $w$의 logit 변화를 얻을 수 있습니다:
$$
\Delta logit_{w\leftarrow s}=\Delta logit_{w\leftarrow x^{l-1}}^{l}M_{s}^{l-1}\tag{10}
$$
&emsp;더 자세한 설명은 부록 B에 있습니다. prediction token $w$에 대한 $s$번째 input token의 최종적인 기여는 각 레이어 logit 변화의 합으로 구할 수 있습니다:
$$
\Delta logit_{w\leftarrow s}=\sum_{l}^{L}\Delta logit_{w\leftarrow s}^{l}\tag{11}
$$
우리는 이 방법을 $ALTI-Logit$ explanation이라고 하겠습니다. 우리가 문맥적인 정보가 혼합되는 것을 고려하지 않는다면, $M^{l-1}$이 단위 행렬이 되어 $Logit$ explanation이 된다는 것을 기억해두세요 (식 (9)).
### 2.5 Constrastive Explanations
&emsp;constrastive explanation (Yin and Neubig, 2022)은 또다른 foil token $f$ 대신에 왜 target token $w$를 선택하였는지에 집중합니다. 우리는 이러한 결정을 각 token이 $w$와 $f$간의 final logit difference($logit_{w-f}$)에 얼마나 기여했는지를 통해 설명할 수 있습니다. 식 (9)와 식(11)에 따라, input token의 Constrastive Logit과 Constrastive ALTI-Logit[^5] saliency score를 그들의 logit 차에 대한 변화로 정의할 수 있습니다:
$$
\Delta logit_{(w-f)\leftarrow s}=\Delta logit_{w\leftarrow s}-\Delta logit_{f\leftarrow s}\tag{12}
$$
[^5]: 이 논문 전체에서 우리는 Logit과 ALTI-Logit을 대조적 변화를 비교하기 위해 사용합니다.
## 3 Experimental Setup
&emsp;우리가 제안한 방법의 성능을 constrastive explanation을 통해 평가하였습니다. Yin and Neubig (2022)에 따라, 문법적으로 맞는 약간 변형된 문장들이 짝지어진 BLiMP dataset (Warstadt et al., 2020)의 일부를 사용하였습니다. 11개의 subset은 5개의 언어적 현상을 따릅니다: anaphor agreement, arguent structure, determiner-noun agreement, NPI licensing 그리고 subject-verb agreement.

|         Phenomena         |  ID   | Example(<font color="#00b050">Acceptable</font>/<font color="#ff0000">Unacceptable</font>)                   |
|:-------------------------:|:-----:| ------------------------------------------------------------------------------------------------------------ |
|     Anaphor Agreement     |  aga  | <u>Karla</u> could listen to <font color="#00b050">herself</font>/<font color="#ff0000">himself</font>.      |
|                           |  ana  | Eva approached <font color="#00b050">herself</font>/<font color="#ff0000">themselves</font>.                 |
|     Argument Stucture     |  asp  | Gerald is <u>hated</u> by the <font color="#00b050">teachers</font>/<font color="#ff0000">pie</font>.        |
| Determiner-Noun Agreement |  dna  | Eva has scared <u>these</u> <font color="#00b050">children</font>/<font color="#ff0000">child</font>.        |
|                           | dnai  | Tammy was observing <u>that</u> <font color="#00b050">man</font>/<font color="#ff0000">men</font>.           |
|                           | dnaa  | The driver sees <u>that</u> unlucky <font color="#00b050">person</font>/<font color="#ff0000">people</font>. |
|                           | dnaai | Phillip liked <u>that</u> smooth <font color="#00b050">horse</font>/<font color="#ff0000">horses</font>.     |
|       NPI Licensing       |  npi  | <u>Even</u> Danielle <font color="#00b050">also</font>/<font color="#ff0000">ever</font> leaves.             |
|  Subject-Verb Agreement   | darn  | The <u>grandfathers</u> of Diana <font color="#00b050">drink</font>/<font color="#ff0000">drinks</font>.     |
|                           | ipsv  | Many <u>people</u> <font color="#00b050">have</font>/has hidden <font color="#ff0000">away</font>.           |
|                           | rpsv  | Most <u>associations</u> <font color="#00b050">buy</font>/<font color="#ff0000">buys</font> those libraries. |
*Table 2: 예시: Table 8의 Yin and Neubig (2022)에 의해 사용된 BLiMP phenomenons (acceptable/unacceptable한 단어를 bold로 표기). 밑줄로 표시된 단어들은 언어적 현상을 설명하기 위한 증거를 나타냅니다. (규칙에 따라 추출됨)*

&emsp;각 언어적 현상에 대해, 우리는 spaCy (Honnibal and Montani, 2017)을 사용하였고 (previous tokens에서) 문법적 수용성을 뒷받침하는 증거를 찾기 위해 Yin and Neubig (2022)의 규칙을 따랐습니다 (Table 2). anaphor agreement를 위해, target token과 상호 연관된 모든 context token을 얻었습니다. Determiner-noun agreement의 증거는 대상이 되는 명사의 determiner(한정자)로 부터 찾을 수 있습니다. NPI licensing에서, "even"이라는 단어는 acceptable한 대상에서 나타날 수 있지만, unacceptable한 단어에서는 나타날 수 없다. 마지막으로, subject-verb agreement 현상에서, 동상의 형태는 대상이 되는 명사와 수적으로 일치해야 하며, 이는 증거로서 사용됩니다. 우리는 Yin and Neubig (2022)와 달리, ipsv와 rpsv subset에 포함된 문장의 대부분이 '정량사+주어의 중심어+동사'로 이루어져 있고, 정량사와 주어의 중심어 둘 다  agreement를 해결하기 위해 사용될 수 있기 때문에 제외했습니다.

&emsp;우리는 분석에 SVA (subject-verb agreement) (Linzen et al., 2016)과 Indirect Object Identification (IOI) (Wang et al. 2023, Fahamu, 2022) dataset을 추가하였습니다. SVA dataset에는 주어와 다른 수의 명사가 포함되어 있어 saliency method를 평가하는 데에 적합합니다. Indirect object identification (IOI)는 'After Lee and Evelyn went to the lake'와 같은 초기 종속절을 가진 문장들에서 나타나는 특징이며, 이어지는 주절은 'Lee gave a grape to Evelyn'과 같습니다. 간접 목적어 "Evelyn"과 주어 "Lee"는 초기 절에서 발견됩니다. IOI dataset의 모든 예시에서, 주절은 다시 주어를 참조하여 간접 목적어에 객체를 전달합니다. IOI task의 목표는 문장의 마지막 단어가 IO인지 예측하는 것입니다. IOI의 예에서, IO를 예측하는 규칙은 IO 자신이 첫 절에 있어야 한다는 것입니다.

&emsp;우리는 HuggingFace library (Wolf et al., 2020)를 통해 (Yin and Neubig, 2022) 에서와 같이 GPT-2 XL (1.5B) model (Radford et al., 2019)을 사용하였고, GPT-2 Small (124M)와 GPT-2 Large models (774M), OPT 125M (Zhang et al., 2022b) 그리고 BLOOM’s 560M and 1.1B variants (Workshop et al., 2022)과 같은 다른 autoregressive Transformer language models 또한 사용하였습니다.

**Alignment Metrics**&emsp;Yin and Neubig(2022)에 따라, 우리는 $evidence$를 previous token 수 만큼의 차원을 가지는 binary vector $b \in \mathbb{R}^{t}$이고, evidence에 포함되는 token의 위치를 제외하고는 모두 0으로 구성되어 있습니다. 즉, 예측이 의존하는 token은 규칙에 의해 추출됩니다. explanation은 마찬가지로 $\in \mathbb{R}$인 벡터입니다. explanation과 evidence간의 alignment를 평가하기 위해, 우리는 MRR (Mean Reciprocal Analysis)를 사용합니다. token을 내림차순으로 정렬하여, MRR은 


## References
