// ==UserScript==
// @name         Neopets: Add Images to Neoboards
// @description  Changes image links to images
// @author       sunbathr + rawbeee
// @match        http://www.neopets.com/neoboards/*
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://userscripts-mirror.org/scripts/source/107941.user.js
// @run-at       document-start
// ==/UserScript==

function addImages() {
    $("div.boardPostMessage").find("a").each(function(i, message) {
        var link  = $(message);
        if (link.text().length > 0 && (link.text().indexOf('images.neopets') != -1 || link.text().indexOf('pets.neopets') != -1)) {
            $(link).replaceWith('<img src="' + link.text() + '" style="max-width: 100%; padding: 5px;">');
        }
    });
}

addImages();
