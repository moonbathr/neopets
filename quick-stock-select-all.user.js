// ==UserScript==
// @name         Quick Stock: Inventory Overload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  only shows last 70ish items in quick stock
// @author       ratville science inc.
// @match        http://www.neopets.com/quickstock.phtml*
// @icon         https://www.google.com/s2/favicons?domain=neopets.com
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==


$("#content > table > tbody > tr > td.content > div:nth-child(8) > form > table").find('tr').slice(1, -69).remove()
