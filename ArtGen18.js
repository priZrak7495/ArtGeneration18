// ==UserScript==
// @name         ArtGen 18+
// @namespace    https://yoomoney.ru/to/4100183641510/200
// @version      1.0
// @description  Show hidden 18+ images
// @author       Dmitry aka priZrak495
// @match        https://artgeneration.me/?gallery_category_id=99
// @match        https://artgeneration.me/image?
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artgeneration.me
// @grant        none
// ==/UserScript==

let currentPage = location.href;

(function onScrollStart() {
    'use strict';
    var uoEcW = document.getElementsByClassName('Gallery_gallery_item__img__uoEcW');
    for (var i = 0; i < uoEcW.length; ++i) {
        var item = uoEcW[i];
        item.style.webkitFilter = "blur(0px)";
    }

    var gaRu = document.getElementsByClassName('ImageView_image__view__img__8gaRu');
    for (var j = 0; j < gaRu.length; ++j) {
        var item1 = gaRu[j];
        item1.style.webkitFilter = "blur(0px)";
    }

    var PmwZl = document.getElementsByClassName('AdultOverlay_adult__block__PmwZl');
    for (var k = 0; k < PmwZl.length; ++k) {
        var items = PmwZl[k];
        items.style.display = 'none';
    }

    var LQriK = document.getElementsByClassName('CreatedGallery_created_gallery__img__LQriK');
    for (var l = 0; l < LQriK.length; ++l) {
        var item5 = LQriK[l];
        item5.style.webkitFilter = "blur(0px)";
    }

    setInterval(function()
                {
        if (currentPage != location.href)
        {
            var gaRu = document.getElementsByClassName('ImageView_image__view__img__8gaRu');
            for (var i = 0; i < gaRu.length; ++i) {
                var item = gaRu[i];
                item.style.webkitFilter = "blur(0px)";
            }
            var PmwZl = document.getElementsByClassName('AdultOverlay_adult__block__PmwZl');
            for (var k = 0; k < PmwZl.length; ++k) {
                var item3 = PmwZl[k];
                item3.style.display = 'none';
            }
        }
    }, 100);

    window.addEventListener("scroll", onScrollStart, false);
})();
