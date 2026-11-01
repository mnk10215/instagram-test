// ==UserScript==
// @name         Instagram表示テスト
// @namespace    instagram-test
// @version      1.0
// @description  Userscriptsの動作確認用
// @match        https://instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () 
    'use strict';

    const notice = document.createElement('div');
    notice.textContent = 'Userscripts 動作確認OK！';
    notice.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 999999;
        background: #222;
        color: white;
        padding: 12px;
        border-radius: 8px;
        font-size: 14px;
    `;
    document.body.appendChild(notice);
})();
