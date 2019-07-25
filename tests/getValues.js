"use strict";
// @testmode = int, grid, gamma, fills, checker
var mouse;
var displayInfo;
var windowInfo;
var canvasInfo;
var settingsInfo;
var cursorInfo;

const canvas = document.getElementById("canvas");


canvasInfo = {
      x: 10,
      y: 10,
      w: 50,
      h: 50,
      state: "int"
    };

   settingsInfo = {
        x: 10,
        y: 10,
        visible: false
    };

function getDisplayInfo() {
    displayInfo = {
        w: window.parent.screen.width,
        h: window.parent.screen.height
    };
    console.info(displayInfo.w);
};


function getWindowInfo() {
    windowInfo = {
        w: window.parent.screen.width,
        h: window.parent.screen.height
    };

};
 
 


function getCursorInfo(event) {
    cursorInfo = {
        x: event.clientX,
        y: event.clienty,


    };
    console.info(cursorInfo.x);
};


function updateCanvas(){
canvas.style.top = canvasInfo.y;
canvas.style.left = canvasInfo.x;
canvas.style.width = canvasInfo.w;
canvas.style.height = canvasInfo.h;
}

function init() {
    window.onmousemove = getCursorInfo;
    getDisplayInfo();
    updateCanvas();

}
