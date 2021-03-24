$(function() {$(".container-fluid").hide()})



describe("MakeCap function", function(){
    
    it("should change the type to Cappucino", function(){
        myCoffee.makeCap()
        expect(myCoffee.type).toEqual("Cappucino");
    })
    it(" should change the typeCost", function(){
        myCoffee.makeCap()
        expect(myCoffee.typeCost).toEqual(30);
    })
    it(" update the total cost", function(){
        myCoffee.makeCap()
        expect(myCoffee.totalCost).toEqual(myCoffee.sizeCost+myCoffee.typeCost+myCoffee.extrasCost);
    })
})

describe("MakeAmo function", function(){
    
    it("should change the type to Americano", function(){
        myCoffee.makeAmo()
        expect(myCoffee.type).toEqual("Americano");
    })
    it(" should change the typeCost", function(){
        myCoffee.makeAmo()
        expect(myCoffee.typeCost).toEqual(20);
    })
    it(" update the total cost", function(){
        myCoffee.makeAmo()
        expect(myCoffee.totalCost).toEqual(myCoffee.sizeCost+myCoffee.typeCost+myCoffee.extrasCost);
    })
})

describe("MakeLatte function", function(){
    
    it("should change the type to Latte", function(){
        myCoffee.makeLatte()
        expect(myCoffee.type).toEqual("Caffe Latte");
    })
    it(" should change the typeCost", function(){
        myCoffee.makeLatte()
        expect(myCoffee.typeCost).toEqual(40);
    })
    it(" update the total cost", function(){
        myCoffee.makeLatte()
        expect(myCoffee.totalCost).toEqual(myCoffee.sizeCost+myCoffee.typeCost+myCoffee.extrasCost);
    })
})

describe("addExtra function", function(){

    var extra='sugar';
    

    it("should change the extra's state in the array", function(){
        myCoffee.addExtra(extra);
        expect(extras[extra]).toEqual(1);
    })
    it("should get the price of the extra",function(){
        expect(extras_prices[extra]).toEqual(1);
    })
    it("should update the cost of extras", function(){
        myCoffee.extrasCost=0;//it's iterative, so clear before test
        myCoffee.addExtra(extra);
        expect(myCoffee.extrasCost).toEqual(1);
    })
    it("should update the total cost", function(){
        myCoffee.addExtra(extra);
        expect(myCoffee.totalCost).toEqual(myCoffee.sizeCost+myCoffee.typeCost+myCoffee.extrasCost);
    })
})

describe("removeExtra function", function(){

    var extra='sugar';

    it("should change the extra's state in the array", function(){
        myCoffee.removeExtra(extra);
        expect(extras[extra]).toEqual(0);
    })
    it("should get the price of the extra",function(){
        expect(extras_prices[extra]).toEqual(1);
    })
    it("should update the cost of extras", function(){
        myCoffee.extrasCost=extras_prices[extra];
        myCoffee.removeExtra(extra);
        expect(myCoffee.extrasCost).toEqual(0);
    })
    it("should update the total cost", function(){
        myCoffee.removeExtra(extra);
        expect(myCoffee.totalCost).toEqual(myCoffee.sizeCost+myCoffee.typeCost+myCoffee.extrasCost);
    })
})