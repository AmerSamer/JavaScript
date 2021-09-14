const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    let candyEle;
    candyStore.candies.forEach(element => {
        if(element.id === id){
            candyEle = element;
        }
    });
    return candyEle;
}
let x = getCandy(candyStore, '5hd7y');
// console.log(x);

function getPrice(candyStore, id){
    return getCandy(candyStore, id).price;
}

let y = getPrice(candyStore, '5hd7y');
// console.log(y);

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({name:name, id:id, price:price, amount:1})
}
addCandy(candyStore, '1ser45', 'kinder', 6);
// console.log(candyStore);

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
function buy(candyStore, id){
    let candy = getCandy(candyStore, id);
    if(candy.amount > 0){
        candyStore.cashRegister += candy.price;
        candy.amount--;
    }
     
}
buy(candyStore, '5hd7y');
console.log(candyStore);