"use strict";
// ==UserScript==
// @name         Free Newspaper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nytimes.com/*
// @match        https://www.nytimes.com/*
// @icon         
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    function clearCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
})();
