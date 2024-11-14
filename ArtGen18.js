// ==UserScript==
// @name         ArtGen18+
// @namespace    https://yoomoney.ru/to/4100183641510/200
// @version      1.2
// @description  Show hidden 18+ images
// @author       Dmitry aka priZrak495
// @match        https://artgeneration.me/gallery/category/nsfw/new
// @match        https://artgeneration.me/image/*
// @match        https://artgeneration.me/user/gallery/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artgeneration.me
// @grant        none
// ==/UserScript==

let currentPage = location.href;
let intervalId;

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function handleUrlChange() {
    if (window.location.href !== currentPage) {
        const elements = document.getElementsByClassName('grid-gallery_grid-gallery__item__mSsLu');
        const elementsArray = Array.from(elements);
        for (var r = 0; r < elementsArray.length; ++r) {
            const overlay = document.getElementsByClassName('adult-image-overlay_overlay___ontainer__FPzRJ m_8bffd616 mantine-Flex-root');
            const overlayArray = Array.from(overlay);
            for (var p = 0; p < overlayArray.length; ++p) {
                overlayArray[p].style.background = "none";
            }

            const imageO = document.getElementsByClassName('image-view_image-item__img__evm5j image-view_image-item__img--blured__gbXbt m_9e117634 mantine-Image-root');
            const imageOArray = Array.from(imageO);
            for (var y = 0; y < imageOArray.length; ++y) {
                imageOArray[y].style.webkitFilter = "blur(0px)";
                var link = imageOArray[y].src;
                copyToClipboard(link);
            }
        }
    }
}

(function() {

    function onScrollStart() {
        const elements = document.getElementsByClassName('grid-gallery_grid-gallery__item__mSsLu');
        const elementsArray = Array.from(elements);
        for (var i = 0; i < elementsArray.length; ++i) {
            const overlay = document.getElementsByClassName('adult-image-overlay_overlay___ontainer__FPzRJ m_8bffd616 mantine-Flex-root');
            const overlayArray = Array.from(overlay);
            for (var j = 0; j < overlayArray.length; ++j) {
                overlayArray[j].style.background = "none";
            }

            const image = document.getElementsByClassName('image-item_image-item__img__iAvKx image-item_image-item__img--blured__zutXI');
            const imageArray = Array.from(image);
            for (var k = 0; k < imageArray.length; ++k) {
                imageArray[k].style.webkitFilter = "blur(0px)";
            }
        }
    }

    intervalId = setInterval(function() {
        handleUrlChange();
    }, 1000);

    window.addEventListener("scroll", onScrollStart, false);
})();
