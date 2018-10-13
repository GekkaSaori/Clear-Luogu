// ==UserScript==
// @name         Clear Luogu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  remove all social functions of luogu for better experience.
// @author       Mingqi_H
// @homepage     https://github.com/MingqiHuang/Clear-Luogu
// @match        https://www.luogu.org/*
// @grant        none
// ==/UserScript==

function doIt() { // main
    if(location.href.search('discuss') != -1) document.writeln('<h1>404 Not Found</h1>');
    if(location.href.search('judgement') != -1) document.writeln('<h1>404 Not Found</h1>');
    if(location.href.search('wiki') != -1) document.writeln('<h1>404 Not Found</h1>');
    // if you are going to see any discussions, block it.

    try { // for index page, remove benben, recent discussions, anouncements, contests and friend links, adjust tasklist
        var indexContent = document.getElementsByClassName('lg-index-content am-center ')[0];
        indexContent.getElementsByClassName('am-u-lg-3 am-u-md-4 lg-right')[1].className = "am-u-lg-12";
        // adjust tasklist

        for(var i = 0; i < 2; ++i) indexContent.getElementsByClassName('am-g')[5].remove();
        // remove recent discussions and contests.

        document.getElementById('lg-slider').parentNode.className = "";
        document.getElementById('lg-slider').remove();
        document.getElementsByClassName('am-u-md-4 lg-punch am-text-center')[0].style = "width: 100% !important";
        // remove advertisement, adjust punch result.

        document.getElementsByClassName('am-u-lg-9 am-u-md-8 lg-index-benben lg-right')[0].remove();
        // remove benben

        indexContent.getElementsByClassName('lg-article am-hide-sm')[0].remove();
        // remove friend links
    } catch(e) {}

    try { // for problem page, remove discussions
        document.getElementsByName('problemright')[0].getElementsByClassName('am-panel am-panel-default lg-summary')[1].remove();
    } catch(e) {}

    // global settings, remove foot and contests, discussion icons.
    try {
        document.getElementsByClassName('lg-footer')[0].remove();
        // remove footer.

        for(var k = 0; k < 2; ++k) document.getElementsByClassName('lg-header-li lg-md-hide')[0].remove();
        // remove advertisement on top bar.

        document.getElementsByClassName('lg-nav-contest')[0].remove();
        document.getElementsByClassName('lg-nav-discuss')[0].remove();
        // remove useless navigation icons.

        document.getElementsByClassName('am-collapse am-topbar-collapse')[0].getElementsByClassName('am-nav am-nav-pills am-topbar-nav am-topbar-right lg-header-list')[0]
            .getElementsByClassName('am-dropdown am-hide-sm-only')[0].getElementsByClassName('am-dropdown-content')[0].remove();
        // remove profile dropdown menu.

        var par = document.getElementsByClassName('am-collapse am-topbar-collapse')[0].getElementsByClassName('am-nav am-nav-pills am-topbar-nav am-topbar-right lg-header-list')[0]
        .getElementsByClassName('am-dropdown')[0].getElementsByTagName('li');
        for(var j = 0; j < 3; ++j) par[3].remove();
    } catch(e) {}
    // remove useless 'Applications'.
    console.log('done');
}

(function () {
    'use strict';
    doIt();
    $(document).on('pjax:complete',function(){doIt();});
})();
