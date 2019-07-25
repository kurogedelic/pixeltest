"use strict";
const Testmode = ['grid', 'gamma', 'fills', 'checker'];
var mouse;
var displayInfo;
var windowInfo;
var canvasInfo;
var settingsInfo;
var cursorInfo;


function getDisplayInfo() {
    displayInfo = {
        w: window.parent.screen.width,
        h: window.parent.screen.height
    };
    console.info(displayInfo.w);
};


function getCursorInfo(event) {
    cursorInfo = {
        x: event.clientX,
        y: event.clienty,


    };
    console.info(cursorInfo.x);
};



function init() {
    window.onmousemove = getCursorInfo;
    getDisplayInfo();

}
