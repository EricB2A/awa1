// http://dynamicsjs.com/

var dots = document.querySelectorAll('.dot')
var colors = ['#ecf0f1', '#95a5a6', '#7f8c8d']
var lock = false;
// Start the 3 dot animations with different delays
function animateDots() {
    lock = true;
    for(var i=0; i<dots.length; i++) {

        dynamics.animate(dots[i], {
            translateY: -70,
            backgroundColor: colors[i]
        }, {
            type: dynamics.forceWithGravity,
            bounciness: 800,
            elasticity: 200,
            duration: 2000,
            delay: i * 450
        })
    }
    dynamics.setTimeout(animateDots, 2500)
}

function showOrHide(style){
    for(var i=0; i<dots.length; i++) {
        dots[i].style.display = style;
    }
}
function load(){
    showOrHide('block')
    // do weird thing when call the function multiple times
    // try it, it's fun ! disable this condition and press serval times on the button !
    if(!lock){
        animateDots()
    }

}

function unload(){
    showOrHide('none');
}
