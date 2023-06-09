// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

var subtotalWithDiscount1 = 0;
var subtotalWithDiscount2 = 0

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++){
       if (id == products[i].id){
    // 2. Add found product to the cartList array
            cartList.push(products[i]);
            console.log(cartList);
        }
    }
}*/
    
// Exercise 2
function cleanCart() {
    cart.length = 0;
    var DOMcleanCart = document.getElementById('cart_list');
    var DOMcleanTotal = document.getElementById('total_price');
    DOMcleanCart.textContent = ' ';
    DOMcleanTotal.textContent = ' ';
    console.log(cart);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }
    console.log(total); 
}

// Exercise 4
/*function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        let product = cartList[i];
        let existingProduct = null;
    
        for (let j = 0; j < cart.length; j++) {
          if (cart[j].name === product.name) {
            existingProduct = cart[j];
            break;
          }
        }
    
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          cart.push(Object.assign({}, product, { quantity: 1 }));
        }
      }
      console.log(cart);
}*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3){
            subtotalWithDiscount1 = cart[i].quantity * 10;
            console.log('total a pagar aceite ' +subtotalWithDiscount1);
            total += subtotalWithDiscount1;   
        }else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            subtotalWithDiscount2 = cart[i].quantity * cart[i].price * 2/3;
            console.log('total a pagar pastel ' +subtotalWithDiscount2);
            total += subtotalWithDiscount2;
        } else {
           total += cart[i].quantity * cart[i].price;
        }
        
    }
}

// Exercise 6
    function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let tbody = document.getElementById('cart_list')
    for (let i = 0; i < cart.length; i++){
        //nombre
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = cart[i].name;
        tr.appendChild(tdNombre);
        //precio
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = cart[i].price +' €';
        tr.appendChild(tdPrecio);
        //cantidad
        let tdCantidad = document.createElement("td");
        tdCantidad.textContent = cart[i].quantity;
        tr.appendChild(tdCantidad);
        //total
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3){
            let tdTotal = document.createElement("td");
            tdTotal.textContent = subtotalWithDiscount1.toFixed(2) +' €';
            tr.appendChild(tdTotal);
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10){
            let tdTotal = document.createElement("td");
            tdTotal.textContent = subtotalWithDiscount2.toFixed(2) +' €';
            tr.appendChild(tdTotal);

        } else {
            let tdTotal = document.createElement("td");
            tdTotal.textContent = (cart[i].quantity*cart[i].price).toFixed(2) +' €';
            tr.appendChild(tdTotal);
        }

        //agragar a la tabla
        tbody.appendChild(tr);

        // Botones de incremento y decremento
        let tdButtons = document.createElement('td');
        //boton decremento
        let decrementButton = document.createElement('button');
        decrementButton.classList.add('btn', 'btn-danger');
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', () => removeFromCart());  
        /*//boton incremento
        let incrementButton = document.createElement('button');
        incrementButton.classList.add('btn', 'btn-success');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', () => removeFromCart());*/
        //agregar botones
        tdButtons.appendChild(decrementButton);
        //tdButtons.appendChild(incrementButton);
        tr.appendChild(tdButtons);
    }
    let totalPrice = document.getElementById('total_price');
    totalPrice.textContent = total.toFixed(2) +' €';
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let product = null;

    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            product = products[i];
            break;
        }
    }

    if (product) {
        let existingProduct = null;

        for (let j = 0; j < cart.length; j++) {
            if (cart[j].name === product.name) {
                existingProduct = cart[j];;
                break;
            }
        }
        if (existingProduct) {
            existingProduct.quantity++;
          } else {
            cart.push(Object.assign({}, product, { quantity: 1 }));
          }
    }

    console.log(cart);  
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

}

function open_modal(){
	console.log("Open Modal");
    //generateCart()
    addToCart();
    applyPromotionsCart();
	printCart();
}
 