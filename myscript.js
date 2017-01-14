
// Traditional way
function addition(a, b){
    return (
        console.log(a+b),
        console.info(this)
    );
};
addition(2, 2); 

// As a property of an obj
var calc = {
  status: 'awesome',
  plus : function (z, d) {
        return (
            console.log(this),
        console.log(this.status),
        console.log(z * d)
        ); 
    }  
};
calc.plus(10, 10);


///////////////////////////////
//
// Constructor
//
//////////////////////////////

// Using a function as a constructor
var Dog = function () {
    var name, breed;
};

// an instance of Dog Obj
var aDog = new Dog();

// the func vars become props then we set vals
aDog.name = "K9 Wolve";
aDog.breed = "Poodle";

// now we get the vals back
console.log(aDog.name);




/////////////////////////////
//
// Prototype
//
/////////////////////////////

//Constructor
var Horse = function () {
  var gender, age;  
};

// function
var speak = function (saywhat) {
  console.log(saywhat);  
};

// Expand our Horse functionality, add speak() to Horse Obj
// i.e Inherite the function speak()
Horse.prototype.speak = speak;

aHorse = new Horse;

aHorse.gender = "Female";
aHorse.speak('Neigh');

//////////////////////////
//
// Call and Apply 
//
/////////////////////////

var cry = function (tears) {
    console.log(tears);
    console.log(this.love);
};

var cryOut = { normal: "meow", love: "purr" };

cry.call(cryOut, cryOut.normal);
//cry.apply(cryOut, ['meouff']);



//////////////////////////////
// 
// Anonymous closure
//
/////////////////////////////

// vars are closed inside the func and 
// not accessible outside it.
(function() {
    console.log('Foolish');
})();