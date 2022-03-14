# Základy programování
![](doc/fran-typing.gif)

https://js.kubasek.eu
--
### Bi3011 - Algoritmizace a programování
jaro 2022

* Výuka **pondělky 12:00 - 14:30** (od 14. února 2022 do 16. května 2022)
* Výuka nebude: **28.března, 18. dubna**
* [On-line skripta na portal.matematickabiologie.cz](https://portal.matematickabiologie.cz/index.php?pg=zaklady-informatiky-pro-biology--algoritmizace-a-programovani)

**Kontakt**

miroslav.kubasek@gmail.com

+420 777 176 674

--

## 14. března 2022
* Podmínky v JavaScriptu - [skripta](https://portal.matematickabiologie.cz/index.php?pg=zaklady-informatiky-pro-biology--algoritmizace-a-programovani--programovani-v-javascriptu-ii--podminky-rozhodovani)
* Cykly v JavaScriptu - [skripta](https://portal.matematickabiologie.cz/index.php?pg=zaklady-informatiky-pro-biology--algoritmizace-a-programovani--programovani-v-javascriptu-ii--cykly)
* [Funkce v Javascriptu](#/11) <br /><br />


## Naprogramujte
* Převod římské číslice na Integer
* Nejdelší společný prefix
* Validní závorky

--
### Úkol: Převod římské číslice na Integer

Napište funkci, která převede římskou číslici na číslo v desítkové soustavě. Římské číslice jsou reprezentovány symboly
<br />**I, V, X, L, C, D a M** viz. [wikipedie](https://cs.wikipedia.org/wiki/%C5%98%C3%ADmsk%C3%A9_%C4%8D%C3%ADslice)

* Vstup: s = "MCMXCIV"
<br />Výstup: 1974

```js
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    
};
```
--
### Úkol: Nejdelší společný prefix

Napište funkci, která najde nejdelší společný prefix řetězců v poli

* Vstup: strs = ["flower", "flow", "flight"]
<br />Výstup: "fl"
* Vstup: strs = ["dog", "racecar", "car"]
<br />Výstup: ""

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
};
```

--
### Úkol: Validní závorky

Napište funkci, která zjistí, jestli jsou v textu správně použité závorky, tj symboly '(', ')', '{', '}', '[' a ']'

* otevírací závorka musí být uzavřena tou samou uzavírající závorkou
* otevřené závorky musí být uzavírány ve správném pořadí

--

* Vstup: s = "(as)[f]s{tr}"
<br />Výstup: true
* Vstup: s = "(w]x"
<br />Výstup: false
* Vstup: s = "({sd}ds)d"
<br />Výstup: true

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};
```

--
## Úkoly z 7. března 2022
* Instalace Google Chrome, seznámení s Developer Tools
* Instalace a seznámení s Visual Studio Code
* Instalace NVM a nastavení poslední stabilní verze Node.js
* Seznámit se s on-line prostředím CodeSandbox

