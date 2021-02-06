// ==UserScript==
// @name         Neopets: Add Images
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

function addSearch() {
    var html = `<div id="slothsearch" style="margin-top: 30px; margin-left:-10px;">
<form method="get" action="http://www.drsloth.com/process/" data-abide="" novalidate="novalidate" target="_blank">
          <div class="row">
            <div class="small-8 columns">
              <input id="search-tagged" name="tagged" type="text" value="" style="border: 1px solid #cacaca; border-radius: 5px;" title="Try including 'animated' to find gifs">
            </div>
          <input type="submit" value="Search DrSloth" class="slothsearchbutton topicReplySubmit topicCreateSubmit" style="margin: 5px; width: 110px; font-size: 14px; height: 25px;">
        </form>
        </div>`;
    $(`.replySmilies-neoboards`).append(html)
    $(`.topicCreateSmilies-neoboards`).append(html)
}
document.addEventListener('DOMContentLoaded', addSearch);
document.addEventListener('DOMContentLoaded', addImages);
