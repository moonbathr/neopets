// ==UserScript==
// @name         Neopets: Highlight Followed Users
// @description  Differentiates topics and replies of followed users from those of non-followed users
// @author       sunbathr
// @match        http://www.neopets.com/neoboards/*
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://userscripts-mirror.org/scripts/source/107941.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// ==/UserScript==
$(`<style type='text/css'>
.postAuthorPetIcon img {
  border: 0px !important;
  border-radius: 3px;
}
.boardPostByline, .boardPost {
  position: relative;
}
div.postPetInfo {
  margin-bottom: 10px;
}
div.postPet {
  margin: 0 0 10 0;
}
.follow {
transition-duration: 0.2s;
}
.follow:hover {
transform: translateY(-2px);
}
</style>`).appendTo("head");
var followedUsers = GM_SuperValue.get("FollowedUsersNeopets", []);

function highlightFollowedUsers() {
  $("#boardList li").each(function(i, board) {
      if($.inArray($(board).find( ".author" ).text().replace(/[^a-zA-Z 0-9 _]+/g, ''), followedUsers) !== -1) {
          $(board).find( ".boardTopicTitle" ).css("border-bottom", "3px solid #91bab3");
      }
  });
}

function highlightFollowedUsers2() {
  $("#boardTopic li").each(function(i, byline) {
      if($.inArray($(byline).find( ".postAuthorName" ).text().replace(/[^a-zA-Z 0-9 _]+/g, ''), followedUsers) !== -1) {
          $(byline).find( ".boardPostByline" ).css("background-color", "#edfcf8");

      }
  });
}

function followToggle() {
    $(".boardPostByline").each(function(i, byline) {
        var user = $(byline).find( ".postAuthorName" ).text().replace(/[^a-zA-Z 0-9 _]+/g, '');
        if($.inArray(user, followedUsers) !== -1) {
            $(byline).append( '<div class="follow" style="cursor: pointer; color: #999; font-size: 10px; position:absolute; bottom:0;"><p>UNFOLLOW</p></div>' );
        }
        else {
            $(byline).append( '<div class="follow" style="cursor: pointer; color: #999; font-size: 10px; position:absolute; bottom:0;"><p>FOLLOW</p></div>' );
        }
    });
    $('.follow').click(function() {
         var updatingUser = $(this).parent().find( ".postAuthorName" ).text();
         if($.inArray(updatingUser, followedUsers) !== -1) {
             var newFollowedUsers = followedUsers.filter(function(elem) {
                 return elem != updatingUser;
             });
             followedUsers = newFollowedUsers;
         }
         else {
             followedUsers.push(updatingUser);
         }
        GM_SuperValue.set ("FollowedUsersNeopets", followedUsers);
        $(".follow").remove();
        followToggle();
     });
}

document.addEventListener('DOMContentLoaded', highlightFollowedUsers);
document.addEventListener('DOMContentLoaded', followToggle);
document.addEventListener('DOMContentLoaded', highlightFollowedUsers2);
