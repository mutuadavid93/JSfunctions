
// Traditional way
/*function addition(a, b){
    return (
        console.log(a+b),
        console.info(this)
    );
};
addition(2, 2); */

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