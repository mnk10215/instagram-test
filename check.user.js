// ==UserScript==
// @name         Instagram Viewport Test
// @namespace    instagram-layout-fix
// @version      2.0
// @match        https://instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const meta = document.querySelector('meta[name="viewport"]');

    if (meta) {
        meta.setAttribute(
            'content',
            'width=device-width, initial-scale=1, maximum-scale=1'
        );
    }
})();
