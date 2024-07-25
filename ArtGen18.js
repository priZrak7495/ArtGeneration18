// ==UserScript==
// @name         ArtGen18+
// @namespace    https://yoomoney.ru/to/4100183641510/200
// @version      1.1
// @description  Show hidden 18+ images
// @author       Dmitry aka priZrak495
// @match        https://artgeneration.me/?gallery_category_id=99
// @match        https://artgeneration.me/image?*
// @match        https://artgeneration.me/user?*
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

    var gaRu = document.getElementsByClassName('AdultOverlay_adult__blur__plug__block__jO+tl');
    for (var j = 0; j < gaRu.length; ++j) {
        var item1 = gaRu[j];
        item1.display = 'none';
    }

    var PmwZl = document.getElementsByClassName('AdultOverlay_adult__block__PmwZl');
    for (var k = 0; k < PmwZl.length; ++k) {
        var items = PmwZl[k];
        items.style.display = 'none';
    }

    var LQriK = document.getElementsByClassName('AdultOverlay_adult__content__block__6Ie-m');
    for (var l = 0; l < LQriK.length; ++l) {
        var item5 = LQriK[l];
        item5.style.display = 'none';
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
            var gDuTe = document.getElementsByClassName('SimilarImages_similar__image__img__gDuTe');
            for (var l = 0; l < gDuTe.length; ++l) {
                var item5 = gDuTe[l];
                item5.style.webkitFilter = "blur(0px)";
            }
        }
    }, 100);

    window.addEventListener("scroll", onScrollStart, false);
})();


