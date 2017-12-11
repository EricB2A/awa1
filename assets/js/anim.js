/*
 * Made by : Eric
 * https://github.com/daneden/animate.css
 */

function supported_webkits(){
    return ["-moz", "-ms", "o", "-webkit", ""]
}

/**
 * TODO: comment
 * @param {Node} parent         parent node to search for
 * @param {String} classname    class to find
 * @returns {Boolean|Node}      false if cannot find child, Node object if found
 */
function _getChildByClassname(parent, classname){
    let item = false;
    parent.childNodes.forEach((child) => {
        if(child.className === classname){
            item = child
        }
    });
    return item;
}

/**
 * Sugar for $('#yourElement').addClass('animated bounceOutLeft');
 * TODO: add correct docstirngs
 */
function animateCss(node, animationName, cssOptions, callback){
    // list of event ending the animation
    let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    // add the animation style
    node.className += ' animated ' + animationName;
    for (let opt in cssOptions){
        if(cssOptions.hasOwnProperty(opt)){
            // add supported webkit for each option
            supported_webkits().forEach((webkit) => {
                // add style like : '-moz-animation-duration:3s'
                node.setAttribute("style", webkit + "-" + opt + ":" + cssOptions[opt]);
            });
        }
    }
    // call callback at the end of the animation
    node.addEventListener(animationEnd, () => {
        if(callback){
            callback();
        }
    });
}

// getting DOM elements
const header = document.getElementById("header");
const logo = _getChildByClassname(header, "logo");

// running animations

//TODO: does not work...
animateCss(logo, 'fadeInUp', {"animation-duration": "10s", "animation-delay" : "10s"});
