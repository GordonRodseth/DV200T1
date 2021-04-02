
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
        $(this).animate({width:"0"})

        if($(this).hasClass("slide-1")){
            $(".slide-2").animate({width:"100%"})  
        }
        else if($(this).hasClass("slide-2")){
            $(".slide-3").animate({width:"100%"})  
        }
        else if($(this).hasClass("slide-3")){
            $(".slide-1").animate({width:"100%"})  
        }
    })
    //slider

});

