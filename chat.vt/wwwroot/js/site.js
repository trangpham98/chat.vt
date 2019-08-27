// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $(".icon-main #chat").click(function () {
        $(".search").css("display", "block");
        $(".main").css("display", "block");
        $(".icon-main").css("display", "none");
    });

    $(".main div").click(function () {
        // $(".tab-chat").css("display", "block");
        $(".chat-wrap").append("<div class='tab-chat'><div class='name'><ul><li id='name-user'></li><button id='X-tab-chat' onclick='remove()'><i class='fas fa-times' title='Đóng tab'></i></button></ul></div><div class='message'>mnpq</div><input type='text' name='find' placeholder='Nhập tin nhắn'><div class='send'><span><i class='fas fa-images '></i></span><i class='fas fa-paperclip '></i><i class='fas fa-location-arrow  ' id='icon-send'></i></div></div>")


    });

    $("i .fas fa-times").click(function () {
        $(".tab-chat").css("display", "none");
        $(".icon-main").css("display", "none");
    });


    $("#X").click(function () {
        $(".icon-main").css("display", "none");

    });


});


function remove() {
    $(".tab-chat").remove();
}