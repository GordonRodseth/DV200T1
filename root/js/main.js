
$(function() {

    console.log("running")

    $(".hide").hide();
    //hide anything tagged with hide

    var cartvis=0;
    //flag cart visibility

    $(".showcart").on("click", function(){
        if(cartvis===0){
            $(".cart-overlay").show();
            cartvis=1;
        }
        else if(cartvis===1){
            $(".cart-overlay").hide();
            cartvis=0;
        }

    });
    //show cart overlay



    $(".slide").on("click", function(){

        console.log("slide click");

        if($(this).hasClass("slide-1")){
            $(this).toggleClass("slide-1");
            $(this).addClass("slide-2");
        }
        else if($(this).hasClass("slide-2")){
            $(this).toggleClass("slide-2");
            $(this).addClass("slide-3");
        }
        else if($(this).hasClass("slide-3")){
            $(this).toggleClass("slide-3");
            $(this).addClass("slide-1");
        }
    })
    //slider

});

