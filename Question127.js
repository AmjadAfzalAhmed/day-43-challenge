"use strict";
// The Traditional Function
function addNums(val1, val2) {
    return val1 + val2;
}
console.log(addNums(5, 5));
// The same operation carried through a simple one liner Arrow Function
let addNums1 = () => 5 + 5;
console.log(addNums1());
// The same arrow function re-defined if the user has to perform addition on some other values
let addNums2 = (val1, val2) => val1 + val2;
console.log(addNums2(5, 5));
