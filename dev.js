"use strict";
//hide button in Atlas/Adminpanel
    $('.buttonsHandler').remove();
    $('#creditAction').remove();
    $('#startMonitoring').remove();
    $('.limits-button').remove();
    $('span#addtoclipboard').remove();
    $('#tableForm > .sorting > li > .button.normal').remove();

 window.onload = function () {
 setTimeout(function(){
  $(".inner ").trigger('click');
      }, 10000);
  $('.moderationaction').remove();
 $('.photosmini > ul > li > .remove').remove();
 //$('.changeCategory').remove();
   }

 $(".tabs > li > a:contains('Active')").trigger('click');
$(".tabs > li > a:contains('Active')").click(function() {
     setTimeout(function(){
 $('.photosmini > ul > li > .remove').remove();
 $('#moderationactionGlobal').remove();
 //$('.changeCategory').remove();
  $('.moderationaction').remove();
         }, 6000);
   });

$(".tabs > li > a:contains('Blocked')").click(function() {
     setTimeout(function(){
 $('.photosmini > ul > li > .remove').remove();
 $('#moderationactionGlobal').remove();
 //$('.changeCategory').remove();
  $('.moderationaction').remove();
         }, 1500);
   });

 $(".tabs > li > a:contains('Unactive')").click(function() {
     setTimeout(function(){
 $('.photosmini > ul > li > .remove').remove();
 $('#moderationactionGlobal').remove();
 //$('.changeCategory').remove();
  $('.moderationaction').remove();
         }, 1500);
   });

$(".tabs > li > a:contains('Moderated')").click(function() {
     setTimeout(function(){
 $('.photosmini > ul > li > .remove').remove();
 $('#moderationactionGlobal').remove();
// $('.changeCategory').remove();
  $('.moderationaction').remove();
         }, 1500);
   });

  //hide button in Hermes
   $('.usercard__action-labels').remove();
   $('.usercard__userlabels-static').remove();
   $('.commentForm').remove();
   $('.removeComment').remove();
   $('.usercard__userad-header__actions > .selectric-wrapper').remove();
   $('.usercard__userad-thumbs > li > .icon-close').remove();
    $('.changeCategory').remove();
