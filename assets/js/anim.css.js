/*
 * Made by : Eric
 * https://github.com/daneden/animate.css
 */

/**
 * Get a list of supproted webkits
 * @returns {Array}
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
                node.style[webkit + "-" + opt] = cssOptions[opt];
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

// DOM elements
const header = document.getElementById("header");
const logo = _getChildByClassname(header, "logo");
const nav = _getChildByClassname(header, "navlist");
const content = _getChildByClassname(header, "content");
const inner = _getChildByClassname(content, "inner");

// running animations
animateCss(logo, 'fadeInUp', {"animation-duration": "1s", "animation-delay" : "0.3s"});
