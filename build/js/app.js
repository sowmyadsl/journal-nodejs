!function n(e,t,r){function o(i,a){if(!t[i]){if(!e[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var p=t[i]={exports:{}};e[i][0].call(p.exports,function(n){var t=e[i][1][n];return o(t||n)},p,p.exports,n,e,t,r)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(n,e,t){function r(n,e){this.title=n,this.body=e}r.prototype.getVowels=function(n){var e=n.match(/[aeiou]/gi);return null===e?0:e.length},r.prototype.getConsonants=function(n){var e=n.match(/[bcdfghjklmnpqrstvwxyz]/gi);return null===e?0:e.length},t.entryModule=r},{}],2:[function(n,e,t){var r=n("./../js/journal.js").entryModule;$(document).ready(function(){$("#entry-form").submit(function(n){n.preventDefault();var e=$("#title").val(),t=$("#body").val(),o=new r(e,t),u=o.getVowels(t),i=o.getConsonants(t);$("#result").append("<h3>"+e+"</h3>"),$("#result").append("<p>"+t+"</p>"),$("#result").append("<h4> number of vowels: "+u+"</h4> "),$("#result").append("<h4> number of consonants: "+i+"</h4> <hr>")})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var e=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+e+" has been added to our list!</p>")})})},{"./../js/journal.js":1}]},{},[2]);