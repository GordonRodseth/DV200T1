$(function(){
    $(".hide").hide();
    console.log("running");

    var cartvis=0;

    $(".showcart").on("click", function(){
        if(cartvis===0){
            $(".cart-overlay").show();
            cartvis=1;
        }
        else if(cartvis===1){
            $(".cart-overlay").hide();
            cartvis=0;
        }

    });//show items in cart

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

    $(".coffee").on("click", function(){
        $(".coffee").removeClass("active");
        $(this).addClass("active");
        document.getElementById("coffee-name").textContent= this.id;
    });//switch btwn coffee types

    $(".addons").on("click", function(){
        $(this).toggleClass("col-3");
        $(this).toggleClass("col-8");

        $(".size").toggleClass("col-9");
        $(".size").toggleClass("col-4");

        $(".info").toggleClass("col-8");
        $(".info").toggleClass("col-6");

        $(".options").toggleClass("col-4");
        $(".options").toggleClass("col-6");

        $(".priceandcart").toggleClass("col-12");
        $(".priceandcart").toggleClass("col-3");

        $(".description").toggle();

        $(".pics").toggleClass("col-6");
        $(".pics").toggleClass("col-12");
        $(".pic").toggle();

        $(".extra-option").toggle();
        $(".spec-in").toggle();
        $(".nexttoprice").toggle();
        $(".nexttopriceandcart").toggle();

    });//adjust size of order form columns as extras expands

})

