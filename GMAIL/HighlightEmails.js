// ==UserScript==
// @name         Highlight Emails
// @version      1.0
// @description  Highlight Emails
// @author       dlueddecke
// @match        https://mail.google.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    
        var emails = document.querySelectorAll("tr");
        for (var i = 0; i < emails.length; i++) {
            switch (true) {
                case emails[i].innerText.indexOf("Your form, M8") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#FFCF00;';
                    break;
                case emails[i].innerText.indexOf("Your form, A1") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#FC74FD;';
                    break;
                case emails[i].innerText.indexOf("Your form, G") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#80C0FF;';
                    break;
                case emails[i].innerText.indexOf("Your form, A2") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#21FC0D;';
                    break;
                case emails[i].innerText.indexOf("Your form, TM") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#DFFF11;';
                    break;
                case emails[i].innerText.indexOf("Your form, PC") != -1:
                    emails[i].style.cssText += 'color:black;background-color:#C78FFF;';
                    break;
            } // end of switch case block
        } // end of for loop
    } // end of function
 )();
