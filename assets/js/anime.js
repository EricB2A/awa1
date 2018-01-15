/*
const title = document.querySelector(".inner > h1");
console.log(title); // ok

var loopReverse = anime({
  targets: '.logo',
  translateX: 250,
  loop: 3,
  direction: 'reverse'
});
*/

var lineDrawing = anime({
    targets: '.svg_header path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

var el = document.querySelector('#header nav ul');
el.style.transform = "translateX(300%)";
el.style.transform += "scale(0.5)";
var menuAnime = anime({
    targets: el,
    translateX: 0,
    easing: "easeInOutQuad",
    duration: 1000,
    delay: 1500,
    scale: {
        value: 1,
        duration: 1600,
        delay: 2200,
        easing: 'easeInOutQuart'
    }
});


/* footer */
let footer_year = document.querySelector("#footer_year");
console.log(footer_year);
let obj = 1;
var JSobject = anime({
    targets: obj,
    innerHTML: 2017,
    round: 1,
    easing: 'linear',
    update: function() {
        let el = document.querySelector("#footer_year");
        el.innerHTML = JSON.stringify(obj);
    }
});

var obj_ = { Bouricci: 0 };
var JSobject = anime({
    targets: obj_,
    Bouricci: 2018,
    duration: 4000,
    round: 1,
    easing: 'linear',
    update: function() {
        var el = document.querySelector('#footer_year');
        el.innerHTML = JSON.stringify(obj_);
    }
});

var lineDrawing = anime({
    targets: '.logo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    delay: 1500,
    loop: false
});