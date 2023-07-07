let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
        {
            item: "Shampoo",
            quantity: 2,
            price_$: 3
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2
        },
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3
        },
    ]
}
console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points are: ${customer.points}.`);

let list = customer.cart
let total_bill = 0;


console.log("Purchased Items:")


for (let i = 0; i < list.length; i++) {

    total_bill += (list[i].price_$ * list[i].quantity),
  
    console.log(`${list[i].quantity}x ${list[i].item} ---- $${list[i].price_$}.00`)
    
    customer.points += list[i].quantity 

}
console.log(`Total Bill: ${total_bill}`)
console.log(`New Current Points: ${customer.points}`)
