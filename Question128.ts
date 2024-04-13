// arrow function to take multiple items in it, while using the rest parameters
// along with the use of reduce() method to sum up its total value 

let product = (...items:any) => items.reduce((num1, num2) => num1 * num2 + 2) ;

console.log(product(5,6,7));


