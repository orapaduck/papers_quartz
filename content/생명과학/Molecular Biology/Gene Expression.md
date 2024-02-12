## 1. Prokaryotic Cell
### 1) Transcription
#### RNA Polymerase
Prokaryotic Cell의 RNA Polymerase는 core enzyme($\alpha_{2} \beta \beta' \omega$)과 $\sigma$ factor로 구성되며 이를 통틀어 holoenzyme이라고 부른다.

| subunit  | function                                                                                                                                                                      |
|:--------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\alpha$ | core enzyme 형성에 관여                                                                                                                                                       |
| $\beta$  | NTP 결합 부위                                                                                                                                                                 |
| $\beta'$ | DNA 결합 부위                                                                                                                                                                 |
| $\omega$ | *in vitro*에서는 $\omega$ subunit이 없어도 전사 가능                                                                                                                          |
| $\sigma$ | -35(5'-TATAAA-3') 및 -10(5'-TTGACA-3') 공통 서열(consensus sequence)에 특이적으로 결합<br>약 10nt 전사 후 방출<br>질소원 고갈 등 특수한 상황에서 발현되는 특수 전사 인자 존재 |
#### Initiation
1. $\sigma$ factor가 -35 region 및 -10 region에 특이적으로 결합한다.
2. $\sigma$ factor이 core enzyme을 -35 region에 결합시킨다.
3. core enzyme이 -35 region으로부터 내려오다가 A, T 서열이 풍부한 -10 region에 도달하면 
   DNA 이중나선이 풀리고 RNA 합성이 시작된다.
4. 약 10nt 전사 후 $\sigma$ factor가 방출된다.
#### Elongation
#### Termination
##### $\rho$ dependent termination
1. ATP dependent DNA-RNA helicase
##### $\rho$ independent termination
1. DNA의 palindrome 서열에 의해 RNA 전사체에서  Hairpin 구조 형성한다.
2. rUdA 결합에 의해 RNA Polymerase가 불안정화 되고 전사가 중지된다.
3. Hairpin 구조에 의해 rUdA 결합이 불안정해지고 RNA 전사체가 DNA로 부터 분리된다.
### 2) Translation
#### Ribosome
|    subunit    | component                      | function                                            |
|:-------------:|:------------------------------ |:--------------------------------------------------- |
| large subunit | 34 proteins, 23s rRNA, 5s rRNA | 23s rRNA: peptidyl transferase                      |
| small subunit | 21 proteins, 16s rRNA          | 16s rRNA: Shine-Dalgarno Sequence에 특이적으로 결합 |
#### [[tRNA]]
#### Initiation
|        factor         | function                                                       |
|:---------------------:|:-------------------------------------------------------------- |
|  IF $\mathrm{I}$  | tRNA가 Ribosome의 A site에 결합하는 것을 방지                  |
| IF $\mathrm{II}$  | GTP를 가지고 있어 large subunit과 small subunit의 결합을 도움  |
| IF $\mathrm{III}$ | tRNA가 결합하기 전 large subunit과 small subunit의 결합을 방지 |
1. small subunit의 16s rRNA가 DNA에 Shine-Dalgarno Sequence에 특이적으로 결합한다.
2. 전사 개시 과정에서는 개시코돈 AUG에 상보적인 Met가 아닌 $\mathrm{fMet-tRNA^fMet}$가 P site에 결합한다.
$$\begin{gathered}
\mathrm{Met-tRNA\;formyltransferase}\\\mathrm{Met-tRNA^fMet + formyl-tetrahydrofolate +   \to fMet-tRNA^fMet + tetrahydrofolate}
\end{gathered}$$
3. 이후 large subunit이 결합해 Elongation phase가 시작된다.
#### Elongation
1. EF-Tu-GTP가 AA-tRNA를 A site에 결합시키고 23s rRNa의 peptidyl transferase 활성에 의해 peptidyl-tRNA의 polypeptide에 AA가 첨가된다.
$$ \mathrm{EF－Tu－GTP\to EF－Tu－GDP}$$
2. EF-Ts가 EF-Tu의 GDP와 치환되고 이는 다시 GTP와 치환된다.
$$\begin{gathered}
\mathrm{EF－Tu－GDP\to EF－Tu－EF－Ts \to EF－Tu－GTP}
\end{gathered}$$
3. EF-G가 GTP를 소모하여 mRNA와 AA-tRNA를 한 코돈 만큼 이동 시킨다.
$$ \mathrm{EF－G－GTP \to EF－G-GDP + P_{i}}$$
#### Termination
1. 종결코돈(UGA, UAG, UAA) 등에 도달하면 Releasing Factor가 결합해 23s rRNA의 peptidyl transferase 활성을 조절하여 아미노산 대신 물을 첨가하여 peptidyl-tRNA의 에스터 결합을 가수분해하도록 한다.
##### Exception
1. $in\,vitro$에서 Releasing Factor 대신 $\mathrm{AA－tRNA^{UAA}}$ 등이 종결코돈에 결합하면 번역이 종결되지 않는다.
## 2. Eukaryotic Cell
### 1) Transcription
#### RNA Polymerase
| polymerase           | location    | product                                            |
| -------------------- | ----------- | -------------------------------------------------- |
| RNA pol$\mathrm{I}$  | nucleolus   | 5.8s rRNA, 18s rRNA, 28s rRNA                      |
| RNA pol$\mathrm{II}$ | nucleoplasm | mRNA, snoRNA, miRNA, siRNA, IncRNA, 대부분의 snRNA |
| RNA pol$\mathrm{III}$  | nucleoplasm | tRNA, 5s RNA, 일부 snRNA |
#### Initiation
| factor | function                                                                                                                 |
| ------ |:------------------------------------------------------------------------------------------------------------------------ |
| TBP    | DNA의 -30 region의 TATA Box에 특이적으로 결합한다.                                                                       |
| TFIID  | promoter를 특이적으로 인식하여 RNA polymerase와 promoter간의 결합을 도와준다                                             |
| TFIIH  | RNA pol$\mathrm{II}$의 CTD를 인산화하여 인산화된 단백질 꼬리에 RNA 가공과정에 관여하는 요소들이 결합할 수 있도록 해준다. |                                    |
1. TFIID의 subunit인 TATA-binding protein이 TBP에 결합한다.
2. RNA pol$\mathrm{II}$ 및 TFIIB, TFIIE, TFIIH 등의 GTFs가 결합한다.
3. TFIIH가 RNA pol$\mathrm{II}$의 CTD를 인산화 시켜 가공 관련 효소들이 도입되고 전사를 개시한다.
##### [[Regulation of Transcription Initiation]]
#### [[Post-Transcriptional Modification]]
### 2) Translation
#### Ribosome
| subunit       | component                                  |
| ------------- | ------------------------------------------ |
| large subunit | ~49 proteins, 5s rRNA, 5.8s rRNA, 28s rRNA |
| small subunit | ~33 proteins, 18s rRNA |
#### Initiation
Eukaryotic Cell은 번역 개시 과정에서 $\mathrm{Met－tRNA_{i}}$를 사용한다.
#### Signal Recognition Particle
1. 번역 도중 SRP가 signal peptide에 결합해 번역을 중단시킨다.
2. SRP receptor protein에 결합해 SRP와 결합한 signal peptide가 떨어진다. (signal peptide는 receptor protein complex 내의 효소에 의해 절단된다.)
3. polypeptide가 소포체 막 안 쪽으로 이동하고 번역이 재개된다.
Eukaryotic Cell에서 단백질의 첫 번째 서열이 Met이 아닌 이유는 이 때문이다.