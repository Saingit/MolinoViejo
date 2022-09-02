import $ from '../js/jquery3.4.1'

export function Navigation(){

	
	
    $('.menu-bar').on("click", function () {
	
		$(".contenido").toggleClass("abrir");
		alternaColorIcono();
	});
 
	function alternaColorIcono() {
		if ($(".menu-bar").hasClass("icon-cerrar")) {
			// $(".menu-bar").css("background-color", "#2c184a");
			$(".menu-bar").toggleClass("icon-menu icon-cerrar");
			$(".sidebar").css("display","none")
	
		} else if ($(".menu-bar").hasClass("icon-menu")) {
			// $(".menu-bar").css("background-color", "#AE3E97");
			// $(".icon-cerrar").css("color","#2c184a");
			$(".menu-bar").toggleClass("icon-menu icon-cerrar");
			$(".sidebar").css("display","block")
		}
		
	}

	$(document).ready(function(){
		$(".sidebar-dropdown > a").click(function () {

			$(this).parent().children('.sidebar-submenu').slideUp(100);
			
			$(this).find('.flechamenu').toggleClass("desplegado cerrado");
	
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			}else{
				$(this).parent().addClass("active");
				$(this).parent().children('.sidebar-submenu').slideDown(100);
			}
		});

		$(".itemNavContenido").on("click",function(){
			$(".contenido").toggleClass("abrir");
			alternaColorIcono();
		})
		$(".modulo").on("click",function(){
			$(".contenido").toggleClass("abrir");
			alternaColorIcono();
		})

		
	})
	
}