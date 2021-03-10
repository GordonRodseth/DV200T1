class MyCoffee{
    constructor(type, size, extra_sugar, extra_cream, extra_milk, extra_espresso, extra_honey, extra_carm, extra_hazel, extra_cinamon, extra_vanilla) {
    this.type = type;
    this.size = size;
    this.extra_sugar = extra_sugar;
    this.extra_cream = extra_cream;
    this.extra_milk = extra_milk;
    this.extra_espresso = extra_espresso;
    this.extra_honey = extra_honey;
    this.extra_carm = extra_carm;
    this.extra_hazel = extra_hazel;
    this.extra_cinamon = extra_cinamon;
    this.extra_vanilla = extra_vanilla;
    }
}

 $(function(){

if($("#sugar").hasClass("selected")){
    coffee_cost=coffee_cost+10;
    
}
else{
    coffee_cost=coffee_cost-10
}

if($("#milk").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#cream").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#espresso").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#honey").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#carm").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#haze").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#cin").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}

if($("#van").hasClass("selected")){
    coffee_cost=coffee_cost+10;
}
})