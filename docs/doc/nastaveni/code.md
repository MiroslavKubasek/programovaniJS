## Jaké budeme používat nástroje
* Prohlížeč Google Chrome
* Visual Studio Code
* Node.js, NPM, NVM
* Git

--
### Odkazy, zdroje
* [Kurzy pro Visual Studio | JavaScript a TypeScript](https://docs.microsoft.com/cs-cz/visualstudio/javascript/?view=vs-2022) **Microsoft**

---
### Prohlížeč Chrome
* Nemusíme řešit rozdíly mezi jednotlivými prohlížeči
* Google Chrome je dostupný pro všechny operační systémy
* Ke stažení na https://www.google.com/chrome

--
### Ladění kódu v prohlížečích
<iframe width="560" height="315" src="https://www.youtube.com/embed/eGpCdJ8DDaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Vývojářské nástroje v prohlížečích (CZ)](https://help.wedos.cz/navody/poradna/vyvojarske-nastroje-v-prohlizecich/) 

---
### Visual Studio Code
* [Jak nainstalovat Visual Studio Code (CZ)](https://studuj.digital/2020/07/20/jak-nainstalovat-visual-studio-2/)
* https://code.visualstudio.com/download

![Visual Studio Code](https://code.visualstudio.com/assets/docs/languages/javascript/overview.png)
Note: Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty.
VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

---
### Node.js (nvm - správce instalací)
* [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)

```
nvm install latest # instalace poslední stabilní verze node.js
nvm list available # seznam dostupných verzí node.js
nvm ls # seznam nainstalovaných verzí node.js
use 16.14.0 # použití konkrétní verze
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/uOnLOoajvBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Note:
NVM - Node Version Manager je nástroj, který umožňuje programátorům hladce přepínat mezi různými verzemi Node. Každou verzi můžete nainstalovat pomocí jediného příkazu a nastavit výchozí pomocí rozhraní příkazového řádku.

---
### GIT - systém pro verzování souborů
* [Jak na Git - seriál](https://www.kutac.cz/pocitace-a-internety/jak-na-git-dil-0-co-proc-jak)
* https://git-scm.com/downloads

<iframe width="560" height="315" src="https://www.youtube.com/embed/_cECfGAU-4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

--
### GIT - základní příkazy
```
git config --global user.email "email@example.com" # nastavení uživatele pro celý
git config user.email "email@example.com" # nastavení uživatele jen pro daný repozitář
```
```
cd muj_projekt # inicializace projektu
git init
```
```
git add . # přidání souborů projektu
git commit -a -m "prvni commit projektu"
```
```
git log # záznamy repozitáře
git status # stav repozitáře
```
