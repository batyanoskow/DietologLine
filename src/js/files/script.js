// Подключение функционала "Чертогов Фрилансера"
import { bodyUnlock, isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function(){
    $(".menu__icon").click(function(){
        $(".menu__list").toggleClass("menu-open");
    })
    $('.menu__link').click(function(){
        $(".menu__link").removeClass("active");
        $(this).addClass("active");
        $(".menu__list").removeClass("menu-open");
        menuClose();
        bodyUnlock();
    })
    $('.menu__button').click(function(){
        $(".menu__list").removeClass("menu-open")
        menuClose();
        bodyUnlock()
    })
    $(".taruf__card").click(function(){
        $(".taruf__card").removeClass("_focus");
        $(this).addClass("_focus")
    })
})