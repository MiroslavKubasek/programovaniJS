## Jaké budeme používat nástroje
* Prohlížeč Google Chrome
* Visual Studio Code
* Node.js, NPM, NVM
* CodeSanbox*
* Git, GitHub*


---
### Prohlížeč Chrome
* Nemusíme řešit rozdíly mezi jednotlivými prohlížeči
* Google Chrome je dostupný pro všechny operační systémy
* Ke stažení na https://www.google.com/chrome
![](https://media.threatpost.com/wp-content/uploads/sites/103/2020/11/03120131/Google-Chrome-Browser.jpg)

--
### Ladění kódu v prohlížečích
<iframe width="560" height="315" data-src="https://www.youtube.com/embed/eGpCdJ8DDaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Vývojářské nástroje v prohlížečích (CZ)](https://help.wedos.cz/navody/poradna/vyvojarske-nastroje-v-prohlizecich/) 

---
## Visual Studio Code
<div class="block">
Visual Studio nám umožní realizovat celý vývojový cyklus na jednom místě. Můžete například upravovat, ladit, testovat, spravovat verze.
VSC je zdarma pro výuku a individuální použití.
</div>

![Visual Studio Code](https://code.visualstudio.com/assets/docs/languages/javascript/overview.png)
Note: Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty.
VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

--
### Instalace VSC
* [Jak nainstalovat Visual Studio Code (CZ)](https://studuj.digital/2020/07/20/jak-nainstalovat-visual-studio-2/)

https://code.visualstudio.com/download

--
<div class='left'>
Instalace a tvorba projektu
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/IVO49bC4YDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Seznámení s prostředím
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/Pjik4BMEV7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class='right'>
Instalujeme rozšíření
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/U2YDP7C5Ve4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Tipy a triky #1
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/A8HD0ThLBcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
--
<div class='left'>
Tipy a triky #2
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/6ohkoABjjBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Zalamování slov
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/7KbqGzNKNIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class='right'>
Hledání a zkratky
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/B2nUIwdrKgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Auto save
<iframe width="560" height="215" data-src="https://www.youtube.com/embed/6DF57JAakPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Node.js (nvm - správce instalací)
* [Proč k vývoji webových aplikací použít technologii NodeJS?](https://www.rascasone.com/cs/blog/node-js-architektura-moduly-npm)
![](https://miro.medium.com/max/1400/1*t8sKOZ9vdK6VWhxa5bTThg.jpeg)

--
### NVM - instalace
* [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
* [Git Node Version Manager](https://github.com/nvm-sh/nvm)
* [Git NVM for Windows](https://github.com/coreybutler/nvm-windows)

<iframe width="560" height="315" data-src="https://www.youtube.com/embed/uOnLOoajvBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Note:
NVM - Node Version Manager je nástroj, který umožňuje programátorům hladce přepínat mezi různými verzemi Node. Každou verzi můžete nainstalovat pomocí jediného příkazu a nastavit výchozí pomocí rozhraní příkazového řádku.

--
### Základní příkazy NVM
```bash
# instalace poslední stabilní verze node.js
nvm install latest
nvm list available # seznam dostupných verzí node.js
nvm ls # seznam nainstalovaných verzí node.js
use 16.14.0 # použití konkrétní verze
```
* [Node Version Manager](https://pepa.holla.cz/2015/09/23/node-version-manager/) - český stručný návod
* [NVM — The Father of Nodes](https://medium.com/bright-days/nvm-the-father-of-nodes-30df3b8d673b) - jak pracovat s více verzemi node.js

```bash
# jak zjistím verzi nainstalovaného node.js
$ node -v
v16.14.0
```

---
### GIT - systém pro verzování souborů
* [Jak na Git - seriál](https://www.kutac.cz/pocitace-a-internety/jak-na-git-dil-0-co-proc-jak)
* https://git-scm.com/downloads

<iframe width="660" height="415" data-src="https://www.youtube.com/embed/_cECfGAU-4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

--
### GIT - základní příkazy
```bash
# nastavení uživatele (pouze jednou po instalaci Gitu)
git config --global user.email "email@example.com"
git config user.email "email@example.com" # jen pro repozitář
```
```bash
mkdir moje_uloha
cd moje_uloha
git init  # inicializace projektu
git remote add origin git@github.com:MiroslavKubasek/uloha1.git # propojime s github
```
```bash
git add . # přidání souborů projektu
git commit -a -m "prvni commit projektu"
```
```bash
git log # záznamy repozitáře
git status # stav repozitáře
```
```bash
# nahraje všechny větve do vzdáleného repozitáře
git push --all
# nastaveni ssh klice na https://github.com/settings/keys
```
---
## Online pískoviště
<div class="block">
On-line programovací nástroje, bez nutnosti instalace, vhodné pro rychlé prototypování. Alternativa pokud není možné nainstalovat Visual Studio Code.
</div>

* [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), [JS Bin](http://jsbin.com/) jednoduché rozhraní
* [CodeSandbox](https://codesandbox.io/) prostředí podobné Visual Studio Code, propojení s GitHub, využití pokročilých technologií (např. Next.js)
* [7 of the Best Code Playgrounds & CodePen Alternatives](https://www.sitepoint.com/code-playgrounds/)

--

### CodeSandbox
An Introduction to CodeSandbox
<iframe width="560" height="315" data-src="https://www.youtube.com/embed/mq1MrtC5R_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Klávesnice a terminál
<div class="block">
Pro všechny programátory je důležité umět psát na klávesnici speciální znaky a ovládat práci s terminálem. Visual Studio Code má terminál zabudovaný přímo v sobě. Spustíte jej tak, že ve VS Code v horním menu zvolíte <em>Terminal → New Terminal</em>
</div>

![](https://kodim.cz/czechitas/daweb/priprava/klavesnice-terminal/assets/vscode-term.png)

--
### Shell příkazy
* Ve Windows používat místo PowerShell shell s názvem **cmd**

```bash
# výpis aktuálního adresáře
$ dir # ve Windows
$ ls # na Linuxu a MacOS
```

```bash
# navigace mezi složkami
$ cd adresar
$ cd ..
```

<div class="block">Občas jsou názvy složek dlouhé a nechce se nám je celé vypisovat. Zkuste při použití příkazu <strong>cd</strong> napsat jen prvních pár písmenek z názvu složky a stiskněte klávesu <strong>Tab</strong>. Shell by měl sám doplnit zbytek názvu.</div>

* [Základy práce v Shellu](https://www.websupport.cz/podpora/kb/zaklady-prace-se-soubory-a-slozkami-v-linuxovem-prikazovem-radku/)

--
### Základy práce v terminálu
<iframe width="860" height="515" data-src="https://www.youtube.com/embed/0ILlC_MQwVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>