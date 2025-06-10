console.log('Inventory System')
const Inventory = [
    {id:1,name:'bags', price:700, quantity:15},
    {id:2,name:'shoes', price:500, quantity:10},
    {id:3,name:'clothes', price:400, quantity:9},
]

// to add a new product to the inventory 
function addProduct (id,name,price,quantity){
    return Inventory.push({
        id:id,
        name:name,
        price:price,
        quantity:quantity
    })
}

addProduct(4,'gucci-mane',1500,6)
// to update the quantity of stock of a product 
function updateStock (productName, newQuantity){
    const product = Inventory.find(item => item.name === productName);
    if (product){
        product.quantity += newQuantity;
        console.log(`${productName} quantity updated , New quantity is ${product.quantity}`)
    }
    else {console.log(`${productName} not found in the inventory`)}
}
updateStock('shoes', 12)
updateStock('bags', 52)
// to delete a product from the inventory 
let remove = Inventory.filter((Inventory) => Inventory.id !== 1)

// console.log(remove)
// a customer order for a product 
console.log(`Order for a product`)
const order = "clothes"
const product = Inventory.find(item => item.name === order);
if (product) {
    if (product.quantity > 0) {
        product.quantity -= 1;
        console.log(`Order placed for ${order}. Available stock left: ${product.quantity}`);
    } else {
        console.log(`${order} is already sold out!`);
    }
} else {
    console.log(`${order} does not exist in inventory.`);
}
console.log(Inventory)


