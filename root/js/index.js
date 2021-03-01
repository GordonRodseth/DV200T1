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

        if(this.id==="Cappucino"){
            console.log("Cap");
            $(".ex7").attr("style","background-image:url(../assets/cup-cap.svg)");
        }

        if(this.id==="Americano"){
            console.log("Cap");
            $(".ex7").attr("style","background-image:url(../assets/cup-amo.svg)");
        }

        if(this.id==="Latte"){
            console.log("Cap");
            $(".ex7").attr("style","background-image:url(../assets/cup-latte.svg)");
        }
    });//switch btwn coffee types

    $(".extras-title").on("click", function(){

        console.log("click");

        $(this).toggleClass("expand")

        if($(this).hasClass("expand")){
            $(this).attr("style","height:10%");
        }
        else{
            $(this).attr("style","height:80%");
        }

        $(".addons").toggleClass("col-3");
        $(".addons").toggleClass("col-8");

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

        $(".extras-options").toggle();
        $(".spec-in").toggle();
        $(".nexttoprice").toggle();
        $(".nexttopriceandcart").toggle();

    });//adjust size of order form columns as extras expands
    
    $(".check").on("click", function(){
        $(this).toggleClass("selected");

        console.log($(this).attr('id'));

        if($(this).attr('id')==="sugar"){
            $(".sugar").toggle();
        }

        if($(this).attr('id')==="cream"){
            $(".cream").toggle();   
        }
        if($(this).attr('id')==="milk"){
            $(".milk").toggle();
        }
        if($(this).attr('id')==="espresso"){
            $(".espresso").toggle();
        }
        if($(this).attr('id')==="honey"){
            $(".honey").toggle();
        }
        if($(this).attr('id')==="carm"){
            $(".carm").toggle();
        }
        if($(this).attr('id')==="haze"){
            $(".haze").toggle();
        }
        if($(this).attr('id')==="cin"){
            $(".cin").toggle();
        }
        if($(this).attr('id')==="van"){
            $(".van").toggle();
        }
    })

})

