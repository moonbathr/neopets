// ==UserScript==
// @name         DTI: Notes
// @version      0.1
// @description  take notes on DTI
// @author       sunbathr
// @match        https://impress.openneo.net/*/closet*
// @match        http://impress.openneo.net/*/closet*
// @match        https://impress-2020.openneo.net/user/*/items
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==


function replaceA(element) {
    for (var i=element.children.length-1;i>=0;i--) {
        var getChild = element.children[i];
        if (getChild.tagName == "A") {
            element.innerHTML = element.innerHTML.replace(getChild.outerHTML,getChild.innerHTML);
        } else {
            replaceA(getChild);
        }
    }
}

function insertNotes() {
    var toInsert = `<div id="insert_to_dti" style="position: fixed; top: 200px; right: 100px;">
                       Notes<br>
                       <textarea id="notes" style="top: 200px; right: 100px; height: 300px; width: 200px; font-size: 12px;"></textarea>
                       <br><input type="button" class="disable_links" value="Disable Links">
                   </div>`
    $("body").prepend(toInsert);

   $('.disable_links').click(function() {
        replaceA(document.body)
        $(document.body).find('input').remove();
        $('#insert_to_dti').append('<input type="button" class="copy_notes" value="Copy Notes"><br><font style="font-size:10pt;">Refresh page to enable links.</font>');
        $(".copy_notes").click(function(){
            $("#notes").select();
            document.execCommand('copy');
        });

        /* Old DTI */
        $('.object').click(function (){
            var text = $(this).find(".name").text();
            if (!$('#notes').val()) {
                $('#notes').append(text);
            }
            else {
                $('#notes').append(`\n`+text);
            }
       });

       /* 2020 DTI */
       $('.chakra-wrap__listitem').click(function (){
            var text = $(this).find("div div").text().substr(4);
            if (!$('#notes').val()) {
                $('#notes').append(text);
            }
            else {
                $('#notes').append(`\n`+text);
            }
       });
    });
}

insertNotes();
