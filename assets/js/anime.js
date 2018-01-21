/* logo */
var lineDrawing = anime({
    targets: '.svg_header path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});


/* menu */
var el = document.querySelector('#header nav ul');
el.style.transform = "translateY(500)"
el.style.transform += "scale(0.4)";
var menuAnime = anime({
    targets: el,
    duration: 1500,
    easing: "easeInOutQuad",
    duration: 1000,
    scale: {
        value: 1,
        duration: 1600,
        delay: 2200,
        easing: 'easeInOutQuart'
    }
});


/* footer */
let footer_year = document.querySelector("#footer_year");
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
    duration: 6000,
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
    duration: 2000,
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    delay: 2000,
    loop: false
});
