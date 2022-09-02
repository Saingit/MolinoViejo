

import { setTimeout } from 'core-js';
import $ from '../common/js/jquery3.4.1'
import Swiper from '../common/js/swiper.4.5'


export function SwiperController() {

    var objSwiper;
    var slideActual;
    var numModulo;
    var botonRight;
    function validaPaginador() {

        //swiper-button-disabled
        var final = objSwiper.slides.length;
        var slideActual = objSwiper.realIndex + 1;
        if (slideActual > 1 && slideActual < final) {
            $(".swiper-button-prev").removeClass("swiper-button-disabled");
            $(".swiper-button-next").removeClass("swiper-button-disabled");
        }
    }


    $(function () {
        //localStorage.clear();
        // Vista Dinamica Tema 1: Slide 9
        $(".overimg").click(function () {
            var btn = $(".overimg");
            btn.removeClass("btn-activado");
            $(this).addClass("btn-activado");
        });

        $("#text_pagination").html("");
        //initialize swiper when document ready
        var mySwiper = new Swiper(".swiper-container", {
            // Optional parameters
            direction: "horizontal",
            initialSlide: 0,
            speed: 400,
            loop: false,
            spaceBetween: 100,
            setWrapperSize: true,
            paginationType: "progress",
            roundLengths: false,
            preloadImages: true,
            updateOnImagesReady: true,
            preventClicks: true,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            navigation: {
                nextEl: ".siguienteSw",
                prevEl: ".anteriorSw"
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },


        });

        objSwiper = mySwiper;
        mySwiper.keyboard.enable();
        numModulo = document.querySelector(".swiper-container").getAttribute("id");
        slideActual = mySwiper.realIndex + 1;
        //tomamos todos los swiper slide
        var swiperSlides = $(".swiper-slide");
        var idx = parseInt(mySwiper.realIndex) + 1;
        var text = "Página " + idx + " de " + mySwiper.slides.length;
        $("#text_pagination").append(text);
        botonRight = $("#sigR")
        

        mySwiper.on("slideChange", function () {
            
            
            slideActual = mySwiper.realIndex + 1;
            
            var slideDOM = $("#slide-" + slideActual);
    
            var elementosAnimados = $(slideDOM).find(".animado");
    
            var numElementos = elementosAnimados.length;
            
    
            if (numElementos != 0) {
                for (let i = 0; i < elementosAnimados.length; i++) {
                    if ($(elementosAnimados[i]).hasClass("animado-Arr")) {
                        $(elementosAnimados[i]).addClass("animate__fadeInUp");
                        $(elementosAnimados[i]).addClass("animate__animated");
                    } else if ($(elementosAnimados[i]).hasClass("animado-Ab")) {
                        $(elementosAnimados[i]).addClass("animate__fadeInDown");
                        $(elementosAnimados[i]).addClass("animate__animated");
                    } else if ($(elementosAnimados[i]).hasClass("animado-Iz")) {
                        $(elementosAnimados[i]).addClass("animate__fadeInLeft");
                        $(elementosAnimados[i]).addClass("animate__animated");
                    } else if ($(elementosAnimados[i]).hasClass("animado-Der")) {
                        $(elementosAnimados[i]).addClass("animate__fadeInRight");
                        $(elementosAnimados[i]).addClass("animate__animated");
                    }
                }
            } else {
                var elementosAnim = $(".animado");
                for (let i = 0; i < elementosAnim.length; i++) {
                    if ($(elementosAnim[i]).hasClass("animado-Arr")) {
                        $(elementosAnim[i]).removeClass("animate__fadeInUp");
                        $(elementosAnim[i]).removeClass("animate__animated");
                    } else if ($(elementosAnim[i]).hasClass("animado-Ab")) {
                        $(elementosAnim[i]).removeClass("animate__fadeInDown");
                        $(elementosAnim[i]).removeClass("animate__animated");
                    } else if ($(elementosAnim[i]).hasClass("animado-Iz")) {
                        $(elementosAnim[i]).removeClass("animate__fadeInLeft");
                        $(elementosAnim[i]).removeClass("animate__animated");
                    } else if ($(elementosAnim[i]).hasClass("animado-Der")) {
                        $(elementosAnim[i]).removeClass("animate__fadeInRight");
                        $(elementosAnim[i]).removeClass("animate__animated");
                    }
                }
            }


            numModulo = document.querySelector(".swiper-container").getAttribute("id");
            validaModulo(numModulo, slideActual);
            
            animacionPersonajes(slideActual);
            validaPaginador();

            $("#text_pagination").html("");
            idx = mySwiper.realIndex + 1;
            text = "Página " + idx + " de " + mySwiper.slides.length;
            $("#text_pagination").append(text);
            var $breadCrump = $(".breadcrumb");
            var count = [];
            var titleStr = [];
            var idx = parseInt(mySwiper.realIndex);

            for (let i = 0; i < mySwiper.realIndex + 1; i++) {
                let _title
                if ($(swiperSlides[i]).attr("data-title")) {
                    var $hashItem = $("<li>");

                    if (i == 0) {
                        _title = $(swiperSlides[i]).attr("data-title");
                    } else {
                        _title = " &nbsp;/ " + $(swiperSlides[i]).attr("data-title");
                    }
                    var _a = $("<a>", { html: _title, href: "#" });
                    $hashItem.append(_a);
                    titleStr.push($hashItem);
                    count.push(i);
                }
            }
            $breadCrump.html(titleStr);
            $(".breadcrumb li:last-child")
                .find("a")
                .contents()
                .unwrap();
            $.each(titleStr, function (i, e) {
                $(e).click(function () {
                    mySwiper.slideTo(count[i]);
                });
            });


        });
        validaModulo(numModulo, slideActual)
    });

    function animacionPersonajes(slideAnim) {
        
    if (slideAnim == '18') {
        
    
                // animaciones chat1 SMM_007.vue
                if (document.getElementById('chat_1_1').classList.contains('chat1')) {

                    setTimeout(() => {
                        document.getElementById('chat_1_1').classList.remove('d-none');
                        document.getElementById('chat_1_1').classList.add('d-block');
                    }, 0);
                }
                if (document.getElementById('chat_1_2').classList.contains('chat1')) {
        
                    setTimeout(() => {
                        document.getElementById('chat_1_2').classList.remove('d-lg-none');
                        document.getElementById('chat_1_2').classList.add('d-lg-block');
                    }, 1000);
                }
                if (document.getElementById('chat_1_3').classList.contains('chat1')) {
                    setTimeout(() => {
                        document.getElementById('chat_1_3').classList.remove('d-none');
                        document.getElementById('chat_1_3').classList.add('d-block');
                    }, 1000);
                }
        
                // animaciones chat1 SMM_007.vue
                // animaciones chat2 SMM_007.vue
        
                if (document.getElementById('chat_2_3').classList.contains('chat2')) {
                    setTimeout(() => {
                        document.getElementById('chat_2_3').classList.remove('d-none');
                        document.getElementById('chat_2_3').classList.add('d-block');
                    }, 5000);
                }
                if (document.getElementById('chat_2_2').classList.contains('chat2')) {
        
                    setTimeout(() => {
                        document.getElementById('chat_2_2').classList.remove('d-none');
                        document.getElementById('chat_2_2').classList.add('d-block');
                    }, 6000);
                }
                if (document.getElementById('chat_2_1').classList.contains('chat2')) {
        
                    setTimeout(() => {
                        document.getElementById('chat_2_1').classList.remove('d-none');
                        document.getElementById('chat_2_1').classList.add('d-block');
                    }, 6000);
                }
        
                // animaciones chat2 SMM_007.vue
                // animaciones chat3 SMM_007.vue
                if (document.getElementById('chat_3_1').classList.contains('chat3')) {
        
                    setTimeout(() => {
                        document.getElementById('chat_3_1').classList.remove('d-none');
                        document.getElementById('chat_3_1').classList.add('d-block');
                    }, 12000);
                }
                if (document.getElementById('chat_3_2').classList.contains('chat3')) {
        
                    setTimeout(() => {
                        document.getElementById('chat_3_2').classList.remove('d-lg-none');
                        document.getElementById('chat_3_2').classList.add('d-lg-block');
                    }, 12000);
                }
                if (document.getElementById('chat_3_1').classList.contains('chat3')) {
                    setTimeout(() => {
                        document.getElementById('chat_3_2').classList.remove('d-none');
                        document.getElementById('chat_3_3').classList.add('d-block');
                    }, 12000);
                }
        
                // animaciones chat3 SMM_007.vue
            }
    }

    function validaModulo(modulo, slide) {
        const boton1 = document.getElementById("modulo_1")
        const boton2 = document.getElementById("modulo_2")
        const boton11 = document.getElementById("modulo_11")
        const boton22 = document.getElementById("modulo_22")
        const boton3 = document.getElementById("modulo_3")
        const boton4 = document.getElementById("modulo_4")
       
        boton4.classList.add("d-none")

        switch (modulo) {

      
            case '1':
                if (slide =='12') {
                   
                    botonRight.addClass("d-none")  
                }else{
                    botonRight.removeClass("d-none")  
                }

                if (slide == '22') {
                    boton1.classList.add("d-none");
                    boton2.classList.remove("d-none");
                    boton3.classList.add("d-none");
                } else {
                    boton22.classList.add("d-none");
                    boton1.classList.add("d-none");
                    boton2.classList.add("d-none");
                    boton3.classList.add("d-none");
                }
                break;
            case '2':
                if (slide == '1') {
                    boton11.classList.remove("d-none");
                    boton2.classList.add("d-none");
                    boton3.classList.add("d-none");
                    setTimeout(() => {
                        // boton11.classList.add("d-none");
                    }, 5000);
                } else if (slide == '27') {

                    boton1.classList.add("d-none");
                    boton2.classList.add("d-none");
                    boton3.classList.remove("d-none");
                } else {
                    boton11.classList.add("d-none");
                    boton1.classList.add("d-none");
                    boton2.classList.add("d-none");
                    boton3.classList.add("d-none");
                }
                break;
            case '3':
                if (slide == '1') {
                    boton1.classList.add("d-none");
                    boton22.classList.remove("d-none");
                    boton3.classList.add("d-none");

                    setTimeout(() => {
                        // boton22.classList.add("d-none");
                    }, 5000);
                } else if (slide == '13') {
                    boton11.classList.remove("d-none");
                    boton22.classList.remove("d-none");
                    boton3.classList.add("d-none");
                    boton4.classList.remove("d-none")
                }
                else {
                    boton11.classList.add("d-none");
                    boton22.classList.add("d-none");
                    boton1.classList.add("d-none");
                    boton2.classList.add("d-none");
                    boton3.classList.add("d-none");
                }
                break;

            default:
                break;
        }

    }
}

