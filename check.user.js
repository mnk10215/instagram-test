// ==UserScript==
// @name         Instagram Story Layout Fix
// @namespace    instagram-layout-fix
// @version      1.0
// @description  Instagram story editor layout adjustment
// @match        https://instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement('style');

    style.textContent = `
        @media (max-width: 768px) {
            html, body {
                max-width: 100% !important;
                overflow-x: hidden !important;
            }

            body {
                width: 100% !important;
            }

            img {
                max-width: 100% !important;
            }
        }
    `;

    document.head.appendChild(style);
})();
