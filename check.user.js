// ==UserScript==
// @name         Instagram表示テスト
// @namespace    instagram-test
// @version      1.1
// @match        https://instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function showNotice() {
        if (document.getElementById('userscripts-test')) return;

        const notice = document.createElement('div');
        notice.id = 'userscripts-test';
        notice.textContent = 'Userscripts 実行中';
        notice.style.cssText =
            'position:fixed;top:10px;left:10px;z-index:2147483647;background:#222;color:white;padding:12px;border-radius:8px;font-size:14px;';
        document.body.appendChild(notice);
    }

    showNotice();
    setTimeout(showNotice, 1000);
    setTimeout(showNotice, 3000);
})();
