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
        var amdesc="Caffè Americano (also known as Americano or American; Italian pronunciation: [kafˈfɛ ameriˈkaːno]; Spanish: café americano, literally American coffee) is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added."
        var capdesc="A cappuccino (Italian pronunciation: [kapputˈtʃiːno]; Italian plural: cappuccini) is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam) Variations of the drink involve the use of cream instead of milk, using non-dairy milks, and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a caffè latte, with a thicker layer of microfoam. The name comes from the Capuchin friars, referring to the colour of their habits, and in this context referring to the colour of the beverage when milk is added in small portion to dark, brewed coffee."
        var latdesc="Caffe latte(/ˈlɑːteɪ/ or /ˈlæteɪ/) is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte [kafˌfɛ e lˈlatte], caffelatte [kaffeˈlatte] or caffellatte [kaffelˈlatte], which means 'coffee & milk'. In northern Europe and Scandinavia, the term café au lait has traditionally been used for the combination of espresso and milk. In France, café latte is mostly known from the original Italian name of the drink (caffè latte or caffelatte)"

        if(this.id==="Cappucino"){
            console.log("Cap");
            $(".info-pic").attr("style","background-image:url(../assets/cup-cap.svg)");
            $(".ex7").attr("style","background-image:url(../assets/cup-cap.svg)");

            if($(".extras-title").hasClass("expand")){
                $(".info-pic").hide();
            }
        
            
            document.getElementById("coffee-desc").textContent=capdesc;
        }

        if(this.id==="Americano"){
            console.log("Cap");

            $(".info-pic").attr("style","background-image:url(../assets/cup-amo.svg)");
            $(".ex7").attr("style","background-image:url(../assets/cup-amo.svg)");

            if($(".extras-title").hasClass("expand")){
                $(".info-pic").hide();
            }
        
            document.getElementById("coffee-desc").textContent=amdesc;
        }

        if(this.id==="Latte"){
            console.log("Cap");
            $(".info-pic").attr("style","background-image:url(../assets/cup-latte.svg)");
            $(".ex7").attr("style","background-image:url(../assets/cup-latte.svg)");

            if($(".extras-title").hasClass("expand")){
                $(".info-pic").hide();
            }
        
            
            document.getElementById("coffee-desc").textContent=latdesc;
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

        $(".push").toggle();
        $(".info-pic").toggle();

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

