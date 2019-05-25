/*** Shadowbox scroll function   ***/
window.onscroll = function() {scrollFunction()};
var $basic = "top-fixed"
function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("topNavbar").className = $basic + " scrolling";
    } else {
        document.getElementById("topNavbar").className = $basic;
    }
};