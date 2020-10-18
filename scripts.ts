let message: string = 'Hello World';
console.log(message);

function add(param1: number, param2: number): number {
    return param1 + param2;

}

// Write a function that returns the sum of all numbers regardless of # of params.

//create a function using rest operator (to put unknown values into an array)
function add2(...param3: number[]): number {

    //get a variable to hold total and initizle to zero
     let total = 0;

     //create a foreach to map through array of numbers adding each one to find the sum of values

     param3.forEach((num) => {
         total += num;
     });

     return total;

}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

