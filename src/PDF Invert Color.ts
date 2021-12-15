// ==UserScript==
// @name         PDF Invert Color
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://journals.aps.org/*/pdf/*
// @match        https://arxiv.org/pdf/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aps.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function InvertColors() {
      if(document.getElementById("cover") == null) {
        var cover = document.createElement("div");

        cover.setAttribute("style", 
        `
        position: fixed;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        mix-blend-mode: difference;
        z-index: 1;
        `);
        cover.id = "cover"
        document.body.appendChild(cover);
      } else {
        document.getElementById("cover")!.remove()
      }
    }

    var button:HTMLElement = document.createElement("div");
    const buttonHtml:string = "<div href='javascript:void(0)' target='_blank' id='buttonFun' style='cursor:pointer;z-index:98;display:block;width:30px;height:30px;line-height:30px;position:fixed;left:0;top:300px;text-align:center;overflow:visible'><img src='https://cdn.80note.com/vip.gif' height='55' ></div>";
    button.innerHTML = buttonHtml;
    document.body.appendChild(button);
    
    var buttoner = document.getElementById("buttonFun");
    if (buttoner != null) {
        buttoner.onclick = InvertColors;
    }
    


})();
