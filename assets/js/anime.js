/*
 * Made by : Eric
 * https://github.com/juliangarnier/anime 
 */

/*
    Logo animation
    Draw SVG
*/
var lineDrawing = anime({
    targets: '.logo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    direction: 'alternate',
    delay: 2000,
    loop: false
});

/*
    Menu animation
    Makes menu grow
*/
var el = document.querySelector('#header nav ul');
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

/*
    Footer animation
    Makes Year (2018) increment
*/
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
