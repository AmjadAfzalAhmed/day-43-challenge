"use strict";
// While being used as standalone,inside a traditional function the result of this keyword will be as undefined
// no matter what , either we run it inside browser or in node.js environment result will be the same. 
function test() {
    return this;
}
console.log(test());
// The result of the following usage of this keyword should be an empty object in node environment
// and a window object while being run in the browser. It remains within its lexical boundaries / the scope
// of the function where this keyword is used
let arrowFunc = () => this;
console.log(arrowFunc());
