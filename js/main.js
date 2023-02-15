"use strict";

var myvid = $("#myVideo")[0];
$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  scroll > 300 ? myvid.pause() : myvid.play();
});
