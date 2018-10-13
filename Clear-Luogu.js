// ==UserScript==
// @name         Clear Luogu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove all social functions of luogu for better experience.
// @author       Mingqi_H
// @match        https://www.luogu.org/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // block discuss, judgement, wiki completely.
    if(location.href.search('discuss') != -1) document.writeln('<h1>404 Not Found</h1>');
    if(location.href.search('judgement') != -1) document.writeln('<h1>404 Not Found</h1>');
    if(location.href.search('wiki') != -1) document.writeln('<h1>404 Not Found</h1>');
    // if you are going to see any discussions, block it.
    try { // for index page, remove benben, recent discussions, anouncements, contests and friend links, adjust tasklist
        document.getElementsByClassName('am-u-lg-3 am-u-md-4 lg-right')[1].className = "am-u-lg-12"; // adjust tasklist
        document.getElementsByClassName('am-u-lg-12')[0].getElementsByClassName('lg-article am-hide-sm')[0].style = "display: none !important";
        document.getElementsByClassName('am-u-lg-9 am-u-md-8 lg-index-benben lg-right')[0].style = "display: none !important";
        document.getElementsByClassName('am-u-lg-9 am-u-md-8 lg-index-benben lg-right')[1].style = "display: none !important";
        document.getElementsByClassName('am-g')[6].getElementsByClassName('lg-article')[0].style = "display: none !important";
        document.getElementsByClassName('am-u-lg-3 am-u-md-4 lg-right')[0].getElementsByClassName('lg-article')[0].style = "display: none !important";
        document.getElementById('lg-slider').style = "display: none !important";
        document.getElementById('lg-slider').parentNode.className = "";
        document.getElementsByClassName('am-u-md-4 lg-punch am-text-center')[0].style = "width: 100% !important";
    } catch(e){}
    try { // for problem page, remove discussions
        document.getElementsByClassName('am-panel am-panel-default lg-summary')[1].style = "display: none !important";
    } catch(e) {}
    // global settings, remove foot and contests, discussion icons.
    document.getElementsByClassName('lg-footer')[0].style = "display: none !important";
    document.getElementsByClassName('lg-header-li')[0].style = "display: none !important";
    document.getElementsByClassName('lg-header-li')[1].style = "display: none !important";
    document.getElementsByClassName('lg-nav-contest')[0].style = "display: none !important";
    document.getElementsByClassName('lg-nav-discuss')[0].style = "display: none !important";
    document.getElementsByClassName('lg-nav-home ')[0].getElementsByClassName('lg-nav-btn')[0].removeAttribute("data-pjax")
    // remove pjax for home page icon due to limitation of User Script. User scripts only load once after page is loaded, we are unable to know if pjax was called.
    document.getElementsByClassName('am-collapse am-topbar-collapse')[0].getElementsByClassName('am-nav am-nav-pills am-topbar-nav am-topbar-right lg-header-list')[0]
            .getElementsByClassName('am-dropdown am-hide-sm-only')[0].getElementsByClassName('am-dropdown-content')[0].remove();
    // remove profile dropdown menu.
    var par = document.getElementsByClassName('am-collapse am-topbar-collapse')[0].getElementsByClassName('am-nav am-nav-pills am-topbar-nav am-topbar-right lg-header-list')[0]
              .getElementsByClassName('am-dropdown')[0].getElementsByTagName('li');
    for(var i = 0; i < 3; ++i) par[3].remove();
    console.log('qaq');
})();
