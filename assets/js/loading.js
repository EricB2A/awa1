/*
 * Made by : Eric
 * http://dynamicsjs.com/
 */

// selects the dots divs
var dots = document.querySelectorAll('.dot')
// assigne colors
var colors = ['#ecf0f1', '#95a5a6', '#7f8c8d']
// the lock assure to not run the animation multiple times
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
/*
 * Show or hide the dots
 * @param {String} style    what style apply to display (block or none)
*/
function showOrHide(style){
    for(var i=0; i<dots.length; i++) {
        dots[i].style.display = style;
    }
}

/**
 * Show the blocks
 * Start animation if not started yet
 */
function load(){
    showOrHide('block')
    // do weird thing when call the function multiple times
    // try it, it's fun ! disable this condition and press serval times on the button !
    if(!lock){
        animateDots()
    }

}
/**
 *  Hide the dots 
 */
function unload(){
    showOrHide('none');
}
