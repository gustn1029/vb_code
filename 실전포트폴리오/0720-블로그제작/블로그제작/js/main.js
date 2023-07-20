/*
    jQuery 문법
*/

$(document).ready(function(){
    $(".outer-menu-item").on("mouseover", function () {
        $(this).stop().find(".inner-menu").show();
    });

    $(".outer-menu-item").on("mouseout",function(){
        $(this).stop().find(".inner-menu").hide();
    });

});