var extras={sugar:0,
            cream:0,
            milk:0,
            espresso:0,
            honey:0,
            caramel:0,
            hazelnut:0,
            cinnamon:0,
            vanilla:0};

var extras_prices={sugar:1,
                cream:5,
                milk:5,
                espresso:10,
                honey:10,
                caramel:15,
                hazelnut:15,
                cinnamon:10,
                vanilla:10}

var amdesc="Caffè Americano (also known as Americano or American; Italian pronunciation: [kafˈfɛ ameriˈkaːno]; Spanish: café americano, literally American coffee) is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added."
var capdesc="A cappuccino (Italian pronunciation: [kapputˈtʃiːno]; Italian plural: cappuccini) is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam) Variations of the drink involve the use of cream instead of milk, using non-dairy milks, and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a caffè latte, with a thicker layer of microfoam. The name comes from the Capuchin friars, referring to the colour of their habits, and in this context referring to the colour of the beverage when milk is added in small portion to dark, brewed coffee."
var latdesc="Caffe latte(/ˈlɑːteɪ/ or /ˈlæteɪ/) is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte [kafˌfɛ e lˈlatte], caffelatte [kaffeˈlatte] or caffellatte [kaffelˈlatte], which means 'coffee & milk'. In northern Europe and Scandinavia, the term café au lait has traditionally been used for the combination of espresso and milk. In France, café latte is mostly known from the original Italian name of the drink (caffè latte or caffelatte)"


class CoffeeClass{
    constructor(type, size,typeCost,sizeCost,extrasCost) {
    this.type = type;
    this.size = size;
    this.extras=extras;

    this.typeCost=typeCost;
    this.sizeCost=sizeCost;
    this.extrasCost=extrasCost;
    this.totalCost=this.extrasCost+this.sizeCost+this.typeCost;
    }

    updatePrice=()=>{

        document.getElementById("small_price").textContent= "R "+(this.typeCost+0)+".00";
        document.getElementById("tall_price").textContent= "R "+(this.typeCost+10)+".00";
        document.getElementById("grande_price").textContent= "R "+(this.typeCost+20)+".00";

        this.totalCost=this.sizeCost+this.typeCost+this.extrasCost;
        document.getElementById("price").textContent="R "+this.totalCost+".00";  
        console.log(this);
    }

    makeCap=()=>{
        this.type="Cappucino";
        this.typeCost=30;
        this.updatePrice();
        $(".info-pic").attr("style","background-image:url(../assets/cup-cap.svg)");
        $(".ex7").attr("style","background-image:url(../assets/cup-cap.svg);");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }
        
        document.getElementById("coffee-desc").textContent=capdesc;
        document.getElementById("coffee_name").textContent= "Cappucino";

        document.getElementById("#ing").textContent="Espresso, Steamed Milk & Frothed Milk";
    }

    makeAmo=()=>{
        this.type="Americano";
        this.typeCost=20;
        this.updatePrice();
        $(".info-pic").attr("style","background-image:url(../assets/cup-amo.svg)");
        $(".ex7").attr("style","background-image:url(../assets/cup-amo.svg);");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }

        document.getElementById("coffee-desc").textContent=amdesc;
        document.getElementById("coffee_name").textContent= "Americano";

        document.getElementById("#ing").textContent="Espresso & Hot Water"
    }

    makeLatte=()=>{
        this.type="Caffe Latte";
        this.typeCost=40;
        this.updatePrice();
        $(".info-pic").attr("style","background-image:url(../assets/cup-latte.svg)");
        $(".ex7").attr("style","background-image:url(../assets/cup-latte.svg);");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }

        document.getElementById("coffee-desc").textContent=latdesc;
        document.getElementById("coffee_name").textContent= "Caffe Latte";
        document.getElementById("#ing").textContent="Espresso, Steamed Milk & Foam";
    }

    makeSmall=()=>{
        this.size="Small";
        this.sizeCost=0;

        $(".info-pic-container").animate({height:"50%"}, "medium");
        $(".ex7-container").animate({height:"35%"}, "medium");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }

        this.updatePrice();

    }
    makeTall=()=>{
        this.size="Tall";
        this.sizeCost=10;
        
        $(".info-pic-container").animate({height:"70%"}, "medium");
        $(".ex7-container").animate({height:"40%"}, "medium");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }

        this.updatePrice();
    }
    makeGrande=()=>{
        this.size="Grande";
        this.sizeCost=20;

        $(".info-pic-container").animate({height:"100%"}, "medium");
        $(".ex7-container").animate({height:"50%"}, "medium");

        if(isexpanded===1){
            $(".info-pic-container").hide();
        }
        
        this.updatePrice();
    }

    addExtra=(extra)=>{
        extras[extra]=1;
        this.extrasCost=this.extrasCost + extras_prices[extra];
        this.updatePrice();
    }

    removeExtra=(extra)=>{
        extras[extra]=0;
        this.extrasCost=this.extrasCost - extras_prices[extra];
        this.updatePrice();
    }
    
}

var myCoffee=new CoffeeClass(0,0,0,0,0,0,0);

console.log(myCoffee);

var cart=[];
//cart array

$(function() {

    console.log("running")
    myCoffee.makeAmo();
    myCoffee.makeTall();

    $(".hide").hide();
    //hide anything tagged with hide

    var cartvis=0;
    //flag cart visibility

    $(".showcart").on("click", function(){
        if(cartvis===0){
            $(".cart-overlay").show();
            cartvis=1;
            $("body").attr("style", "overflow-y:hide")
        }
        else if(cartvis===1){
            $(".cart-overlay").hide();
            cartvis=0;
        }

    });
    //show cart overlay

    $(".coffee").on("click", function(){
        $(".coffee").removeClass("active");
        $(this).addClass("active");
    });
    //switching btwn coffee types
});

var isexpanded=0;

function toggleExpand(){

    $(".options").toggleClass("col-md-4 col-sm-12");
    $(".options").toggleClass("col-md-6 col-sm-12");

    if (isexpanded===0){
        isexpanded=1;

        $(".sizes").animate({width:'40%'},"medium");

        $(".addons").animate({width:'60%'},"medium");

        console.log("expand");
        $(".info-pic-container").hide();
    }
    else{
        isexpanded=0;

        $(".addons").animate({width:'25%'},"medium");

        $(".sizes").animate({width:'75%'},"medium");

        
        console.log("unexpand");
        $(".info-pic-container").show();
    }

    console.log(isexpanded);

    $(".info").toggleClass("col-md-8 col-sm-12");
    $(".info").toggleClass("col-md-6 col-sm-12");

    $(".priceandcart").toggleClass("col-12");
    $(".priceandcart").toggleClass("col-3");

    $(".description").toggle();

    $(".pics").toggleClass("col-md-6 col-sm-12");
    $(".pics").toggleClass("col-12");
    $(".pic").toggle();

    $(".extras-options").toggle();
    $(".spec-in").toggle();
    $(".nexttoprice").toggle();
    $(".nexttopriceandcart").toggle();

    $(".push").toggle();
    


    //Expand Extras bar
}

var selectSize=(selection)=>{
    $(".size").removeClass("selected");
    $("#"+selection).addClass("selected");
    console.log(selection)

    if(selection==="small"){
        myCoffee.makeSmall()
    }
    if(selection==="tall"){
        myCoffee.makeTall();
    }
    if(selection==="grande"){
        myCoffee.makeGrande();
    }
}

var selectExtras=(selection)=>{
    
    $("#"+selection).toggleClass("selected");
    $("."+selection).slideToggle();


    if($("#"+selection).hasClass("selected")){
        myCoffee.addExtra(selection);
    }
    else{
        myCoffee.removeExtra(selection)
    }
}

var getExtras=(currentextras)=>{

    if(myCoffee.extrasCost===0){
        currentextras="No Additions"
    }
    else{
        $.each( extras, function( index, value ){
                if(value===1){
                    currentextras=currentextras+"  "+index+",";
                }
            })
        
    }

    console.log(currentextras);
    return(currentextras);
}

var getCartTotal=()=>{
    var carttotal=0;

    for(i=0; i<cart.length;i++){
        console.log("item no. "+i+" in cart costs "+cart[i].totalCost)
        carttotal=carttotal+cart[i].totalCost;
    }
    console.log("the cart total is "+carttotal)
    checkDiscount(carttotal);
}

var checkDiscount=(current_price)=>{

    var total=current_price;

    var code=discountcode.value;

    if(code==="12345"){
        total=total-(total/4);
        console.log("12345")
    }
    document.getElementById("total-price").textContent="R"+total;
}

var addToCart=()=>{

    var allextras=" ";
    document.getElementById("#showcart").textContent="Cart*";
    cart.push(new CoffeeClass(myCoffee.type,myCoffee.size,myCoffee.typeCost,myCoffee.sizeCost,myCoffee.extrasCost))
    console.log(cart);

    allextras=getExtras(allextras);
    getCartTotal();

    $(".cart-elements").append(
        "<div class='cart-item'>"+
            "<div class='line'></div>"+
            "<h1 id='item-size'>"+ myCoffee.size+"</h1>"+
            "<h2 id='item-type'>"+myCoffee.type+"</h2>"+
            "<h3 id='item-extras'> With: "+allextras+"</h3>"+
            "<h3 id='item-price'> R"+myCoffee.totalCost+".00</h3>"+
        "</div>"
    );
    
}

