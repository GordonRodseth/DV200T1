$(function(){
    $(".hide").hide();
    //hide anything tagged with hide

    //declare variables
        class Coffee{
            constructor(type, size, cost, extras) {
            this.type = type;
            this.size = size;
            this.cost=cost;
            this.extras=extras;
            }
        }
        //create MyCoffee class

        var coffee_type;
        var coffee_size="Tall";

        var base_cost=30;
        var extra_cost=0;
        var size_cost=0;
        var coffee_cost= base_cost+extra_cost+size_cost;
        document.getElementById("price").textContent=coffee_cost;  

        var extras="";
        //declare coffee parameters

        var cart=[];
        //cart array

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

     

    $(".coffee").on("click", function(){
        $(".coffee").removeClass("active");
        $(this).addClass("active");
        document.getElementById("coffee_name").textContent= this.id;
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
            base_cost=20;
            coffee_cost= base_cost+extra_cost+size_cost;
            document.getElementById("price").textContent=coffee_cost;  
            
        }

        if(this.id==="Americano"){
            console.log("Cap");

            $(".info-pic").attr("style","background-image:url(../assets/cup-amo.svg)");
            $(".ex7").attr("style","background-image:url(../assets/cup-amo.svg)");

            if($(".extras-title").hasClass("expand")){
                $(".info-pic").hide();
            }
            document.getElementById("coffee-desc").textContent=amdesc;
            base_cost=30;
            coffee_cost= base_cost+extra_cost+size_cost;
            document.getElementById("price").textContent=coffee_cost; 
        }

        if(this.id==="Latte"){
            console.log("Cap");
            $(".info-pic").attr("style","background-image:url(../assets/cup-latte.svg)");
            $(".ex7").attr("style","background-image:url(../assets/cup-latte.svg)");

            if($(".extras-title").hasClass("expand")){
                $(".info-pic").hide();
            }
            document.getElementById("coffee-desc").textContent=latdesc;
            base_cost=40;
            coffee_cost= base_cost+extra_cost+size_cost;
            document.getElementById("price").textContent=coffee_cost; 
        }
    });
    //switch btwn coffee types



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

    });
    //Expand Extras bar


    $(".check").on("click", function(){
        $(this).toggleClass("selected");

        console.log($(this).attr('id'));
        
        if($(this).attr('id')==="sugar"){
            $(".sugar").toggle();

            if($("#sugar").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10;
            }
        }
        if($(this).attr('id')==="cream"){
            $(".cream").toggle();
            
            if($("#cream").hasClass("selected")){
                extra_cost=extra_cost+10;
            }
            else{
                extra_cost=extra_cost-10;
            }
        }
        if($(this).attr('id')==="milk"){
            $(".milk").toggle();

            if($("#milk").hasClass("selected")){
                extra_cost=extra_cost+10;
            }
            else{
                extra_cost=extra_cost-10;  
            }
        }
        if($(this).attr('id')==="espresso"){
            $(".espresso").toggle();

            if($("#espresso").hasClass("selected")){
                extra_cost=extra_cost+10;
            }
            else{
                extra_cost=extra_cost-10;  
            }
        }
        if($(this).attr('id')==="honey"){
            $(".honey").toggle();

            if($("#honey").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10; 
            }
        }
        if($(this).attr('id')==="carm"){
            $(".carm").toggle();

            if($("#carm").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10;
            }
        }
        if($(this).attr('id')==="haze"){
            $(".haze").toggle();

            if($("#haze").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10; 
            }
        }
        if($(this).attr('id')==="cin"){
            $(".cin").toggle();

            if($("#cin").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10;
            }
        }
        if($(this).attr('id')==="van"){
            $(".van").toggle();

            if($("#van").hasClass("selected")){
                extra_cost=extra_cost+10; 
            }
            else{
                extra_cost=extra_cost-10; 
            }
        }
        //extras

        if($(this).hasClass('size')){

            $(".size").removeClass("selected");
            $(this).toggleClass("selected");

            if($(this).attr('id')==="small"){
                coffee_size= "Small";
                size_cost=-10;
            }
            if($(this).attr('id')==="tall"){
                coffee_size= "Tall";
                size_cost=0;
            }
            if($(this).attr('id')==="grande"){
                coffee_size= "Grande";
                size_cost=10;
            }
        }
        //size

        coffee_cost= base_cost+extra_cost+size_cost;
        document.getElementById("price").textContent=coffee_cost; 

    })//Coffee options

   


    $(".addtocart").on("click",function(){
        if($("#sugar").hasClass("selected")){
            
            console.log("has sugar");
            extras=extras+" Sugar,";
        }

        if($("#milk").hasClass("selected")){
            
            console.log("has milk");
            extras=extras+" Milk,";
        }

        if($("#cream").hasClass("selected")){
            
            console.log("has cream");
            extras=extras+" Cream,";
        }

        if($("#espresso").hasClass("selected")){
            
            console.log("has espresso");
            extras=extras+" Espresso,";
        }

        if($("#honey").hasClass("selected")){
            
            console.log("has honey");
            extras=extras+" Honey,";
        }

        if($("#carm").hasClass("selected")){
            
            console.log("has carm");
            extras=extras+" Caramel Syrup,";
        }

        if($("#haze").hasClass("selected")){
            
            console.log("has haze");
            extras=extras+" Hazelnut Syrup,";
        }

        if($("#cin").hasClass("selected")){
            
            console.log("has cin");
            extras=extras+" Cinnamon,";
        }

        if($("#van").hasClass("selected")){
            
            console.log("has van");
            extras=extras+" Vanilla,";
        }

        coffee_type=document.getElementById("coffee_name").textContent;
        console.log(coffee_type);

        console.log(coffee_size);

        cart.push(new Coffee(coffee_type, coffee_size, coffee_cost, extras))
        console.log(cart)

        console.log(extras);

    })
    //add to cart
})