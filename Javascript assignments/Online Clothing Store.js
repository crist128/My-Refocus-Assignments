var ShopInfo = 
    {
        ShopName: "Zara",
        Address: "Manhattan Avenue, New York",
        ZipCode: "NY656",
    }


var user = [
    {
        firstName: "Angelina",
        surName: "Jolie",
        Age: "47",
        birthday: "4.06.1975"
    },
    {
        firstName: "Anne",
        surName: "Curtis",
        Age: "38",
        birthday: "11.03.1985"
    }]


var items = [
    {
        itemName: "Blue jeans",
        category: "Trousers",
        price: 50,
        stock: 456,
    },
    {
        itemName: "T-shirt",
        category: "Garments",
        price: 30,
        stock: 20,

    }]



function addUser(info){
    user.push(info)
    console.log(info.firstName +" " +info.surName + " has been added");

}

function addItems(info){
    items.push(info)
    console.log(info.itemName + " has been added");
    
    }

function addStock (){
    let Inventory = items.stock
    if(Inventory.length < 50){
        Inventory += 100
    }
    console.log("100 " + info.itemName + " has been added to the inventory")

}

addUser({
    firstName:"Brad",
    surName:"Pit",
    Age:"47",
    birthday: "12.08.1975"
})

addItems({
    itemName : "Shoes",
    category: "Footwear",
    price : 150,
    stock: 200,
})



