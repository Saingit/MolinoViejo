import $ from '../common/js/jquery3.4.1'

export function Controles(){
    $(function () {

        $(".card-header").on("click", function(){
            $(".card-header").removeClass("active");

            $(this).addClass("active");
        })
    })
    
}