# AWA1 - Documentation
## Technologies & Librairies
## Animations
### Animation du background

### Animation de la page principale
![Animation principale](src/01.gif)  
L'animation du **logo** (ci-dessous) s'effectue grâce à la librairie [animate.css](https://daneden.github.io/animate.css/).  
De cette manière, l'apparition du **logo** est séparée des autres éléments (exemple ci-ceddous).
![Animation du logo](src/02.gif)  

L'utilisation de **animate.css** est placé dans [animate.css.js](../assets/js/animate.css.js).
```
    animateCss(logo, 'fadeInUp', {"animation-duration": "1s", "animation-delay" : "0.3s"});
```
L'idée est d'ajouter une **classe css contenant qui va effectuer une animation** à noeud du DOM.
![Noeud avec animation](src/01.png)  

### Animation des tabs


### Note pour document PDF
Cette documentation a initialement été créé au format **markdown**.
Les gifs ainsi que les liens ne seront donc pas correctement
