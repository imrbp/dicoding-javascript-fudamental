// using ES6 Module
import {coffeeStock as stock, isCoffeeMachineReady} from './state.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(stock);


// Using js module
// const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 80);

// console.log(isCoffeeMachineReady);
