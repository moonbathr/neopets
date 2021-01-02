// ==UserScript==
// @name         Neopets: Navbar Updates
// @description  Change click dropdown to hover
// @author       sunbathr
// @match        http://www.neopets.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-start

// ==/UserScript==

function updateNavbar() {
    $(".communitydropdown-button").mouseenter(function() {
        toggleDropdownArrow('nav-community__2020');
        toggleNavDropdown__2020(communitydropdown__2020);
    });

    $(".shopdropdown-button").mouseenter(function(){
        toggleDropdownArrow('nav-shop__2020');
        toggleNavDropdown__2020(shopdropdown__2020);
    });

    $("div.community-dropdown__2020.nav-dropdown__2020").mouseleave(function(){
        toggleDropdownArrow('nav-community__2020');
        toggleNavDropdown__2020(communitydropdown__2020);
    });

    $("div.shop-dropdown__2020.nav-dropdown__2020").mouseleave(function(){
        toggleDropdownArrow('nav-shop__2020');
        toggleNavDropdown__2020(shopdropdown__2020);
    });
}

document.addEventListener('DOMContentLoaded', updateNavbar)
