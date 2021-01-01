// ==UserScript==
// @name         Neopets: Bookmark Boards
// @version      1.1
// @description  Adds selected boards to the top
// @author       sunbathr
// @match        http://www.neopets.com/neoboards/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-start
// ==/UserScript==

$(`<style type='text/css'>
#bookmarked_boards td { border: 1px solid #efefef; padding: 10px; font-family: "MuseoSansRounded500", 'Arial', sans-serif;  valign : middle; font-size: 11px; width: 150px; }
#bookmarked_boards td a:link, #bookmarked_boards td a:visited { text-decoration: none; color: #3b54b4; font-weight: bold; font-size: 15px; line-height: 25px; }
#bookmarked_boards td img { float: left; margin-right: 10px;}
div.container.theme-bg { background-color: transparent; }
}
</style>`).appendTo("head");

function displayBookmarks() {
  var recently_viewed_section = `<h3>Bookmarked NeoBoards</h3>
                <center><div id="bookmarked_boards">
                <table id="bookmarked_boards">
                <td><a href="boardlist.phtml?board=6"><img src="http://images.neopets.com/neoboards/boardIcons/auctions.png"> Trade Chat</a> <br>` +
                $( "#boardIndex li:eq(23) .recent" ).text()
                 + `</td>
                <td><a href="boardlist.phtml?board=10"><img src="http://images.neopets.com/neoboards/boardIcons/battle.png"> BD Chat</a> <br>` +
                $( "#boardIndex li:eq(11) .recent" ).text()
                 + `</td>
                <td><a href="boardlist.phtml?board=8"><img src="http://images.neopets.com/neoboards/boardIcons/guilds.png"> Guild Chat</a> <br>` +
                $( "#boardIndex li:eq(21) .recent" ).text()
                 + `</td>
                <td><a href="boardlist.phtml?board=21"><img src="http://images.neopets.com/neoboards/boardIcons/avatars.png"> Avatar Chat</a> <br>` +
                $( "#boardIndex li:eq(29) .recent" ).text()
                 + `</td>
                <td><a href="boardlist.phtml?board=3"><img src="http://images.neopets.com/neoboards/boardIcons/writers.png"> Writers Chat</a> <br>` +
                $( "#boardIndex li:eq(28) .recent" ).text()
                 + `</td>
                <td><a href="boardlist.phtml?board=34"><img src="http://images.neopets.com/neoboards/boardIcons/neopound.png"> Pound Chat</a> <br>` +
                $( "#boardIndex li:eq(14) .recent" ).text()
                 + `</td>
                </table></div></center>`;
  $("#boardIndex h3:eq(0)").before(recently_viewed_section);
}

document.addEventListener('DOMContentLoaded', displayBookmarks)
