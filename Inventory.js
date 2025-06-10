console.log('Inventory System')
const Inventory = [
    {name:'bags', price:700, quantity:15},
    {name:'shoes', price:500, quantity:10},
    {name:'clothes', price:400, quantity:9},
]

// to add a new product to the inventory 
function addProduct (name,price,quantity){
    return Inventory.push({
        name:name,
        price:price,
        quantity:quantity
    })
}

addProduct('gucci-mane',1500,6)
console.log(Inventory)


