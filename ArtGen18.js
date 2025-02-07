// ==UserScript==
// @name         ArtGen18+
// @namespace    https://yoomoney.ru/to/4100183641510/200
// @version      2.0
// @description  Show hidden 18+ images
// @author       Dmitry aka priZrak495
// @match        https://artgeneration.me/gallery/category/horror/*
// @match        https://artgeneration.me/gallery/category/nsfw/*
// @match        https://artgeneration.me/user/gallery/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artgeneration.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeUnwantedStyles() {
        Array.from(document.querySelectorAll('*')).forEach(el => {
            if (getComputedStyle(el).background === 'rgba(0, 0, 0, 0.8)') {
                el.style.background = 'transparent';
            }
        });

        Array.from(document.querySelectorAll('*')).forEach(el => {
            if (getComputedStyle(el).filter.includes('blur(25px)')) {
                el.style.filter = 'none';
            }
        });
        hideAllAdultOverlays();
    }

    function hideAllAdultOverlays() {
        const overlays = document.querySelectorAll('.adult-image-overlay_overlay___ontainer__FPzRJ');
        overlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
    }

    const observer = new MutationObserver(() => {
        hideAllAdultOverlays();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', function(event) {
        const target = event.target;

        const container = target.closest('.image-item_image-item__container____j0Q');
        if (container) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const img = container.querySelector('img.image-item_image-item__img__iAvKx');
            if (img && img.src) {
                console.log('Открываем изображение:', img.src);
                window.open(img.src, '_blank');
            } else {
                console.error('Изображение не найдено.');
            }

            return false;
        }
    }, true);

    (function init() {
        removeUnwantedStyles();

        new MutationObserver(() => {
            removeUnwantedStyles();
        }).observe(document.body, { childList: true, subtree: true });
    })();

})();
