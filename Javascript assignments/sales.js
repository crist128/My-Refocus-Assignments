var userID = null;
var cart = 0;
var isLoggedIn = false;
const Data = {
    ShopInfo: [
        {
            ShopName: "Zara",
            Address: "Manhattan Avenue, New York",
            ZipCode: "NY656",
        }],

    User: [
        {
            firstName: "Angelina",
            surName: "Jolie",
            Age: "47",
            birthday: "4.06.1975"
        },
        {
            firstName: "John",
            surName: "Doe",
            Age: "38",
            birthday: "11.03.1985"
        }

    ],

    Items: [
        {
            itemName: "Blue jeans",
            category: "Trousers",
            price: 50,
            stock: 456,
        },
        {
            itemName: "Polo Shirt",
            category: "Garments",
            price: 50,
            stock: 30,


        },
    ]

}


function loginUser(firstName, surName) {
    Data.User.forEach((element, index) => {
        if (element.firstName == firstName && element.surName == surName) {
            isLoggedIn = true;
            userID = index;

            console.log("Hi " + element.firstName + " " + element.surName);
        }
    });

    if (!isLoggedIn) {
        userID = null;
        console.log("Invalid Credentials!")
    }
}




function addtoCart(itemName, cart) {
    if (isLoggedIn) {
        cart.push();
        itemName += cart;
        console.log("You have added " + itemName + " to cart");
    }
    return addtoCart
}

var order = Data.Items;

function confirmOrder(itemName, stocks) {
    if (isLoggedIn) {
        addtoCart += itemName;
        console.log(`You have purchased ${stocks} ${itemName}`);
        addtoCart = stocks;
    } else {
        console.log("Please log in")
    }
}

   


function receipt(amount, payment) {

    if (isLoggedIn) {

    }
    const change = payment - amount;
    console.log(`Total amount is: ${amount}`);
    console.log(`Payment: ${payment}`)
    console.log("Your change is " + (change));

}


function addUser(info) {
    Data.User.push(info)
    console.log(info.firstName + " " + info.surName + " has been added");

}

function addItems(info) {
    Data.Items.push(info)
    console.log(info.itemName + " has been added");

}


function addItemStocks(itemName, stocks) {
    Data.Items.forEach((item) => {
        if (item.name == itemName) {
            item.stock += stocks;
            itemFound = true;

            console.log(`Successfully restocked ${stockToAdd} stocks of ${itemName}`)
        } else {
            console.log(`${item} " not found"`)
        }
    })
    return addItemStocks

}





addUser({
    firstName: "Brad",
    surName: "Pit",
    Age: "47",
    birthday: "12.08.1975"
});

addItems({
    itemName: "Shoes",
    category: "Footwear",
    price: 150,
    stock: 200,
});

loginUser("John", "Doe");
confirmOrder("Blue jeans", 2);
receipt(250, 500);

console.log(Data.Items[0])