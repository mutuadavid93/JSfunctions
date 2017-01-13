
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