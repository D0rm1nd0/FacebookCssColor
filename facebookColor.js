// ==UserScript==
// @name FacebookColor
// @namespace D0rm1nd0
// @description This script will automagically change the facebook bar color
// @include *.facebook.com/*
// ==/UserScript==
function add(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

add('._2s1x ._2s1y {background-color: black ;border-bottom: 2px solid #29487d;color: white;} ._4jy1 {background-color: #101010; border-color: #b26342;} ;}');