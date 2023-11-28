// Toggle pageview with cart clicks
// variable for the cartbutton icon
const cartBtn = document.querySelector('#cartBtn');
cartBtn.addEventListener('click', orderSummary);

//function that toggles the page view between products vs order summary
function orderSummary() {
   const productPage = document.querySelector('#product_container');
   productPage.classList.toggle('visually_hidden');

   const orderConfirmation = document.querySelector('#orderConfirmation');
   orderConfirmation.classList.toggle('visually_hidden');
}




// Toggle between order summary and confirmation order
//variable for the orderbutton in order summary
const orderBtn = document.querySelector('#order_button');
orderBtn.addEventListener('click', thankYouNote);

function thankYouNote() {
    const confirmationNote = document.querySelector('#confirmation_container');
    confirmationNote.classList.toggle('visually_hidden');

    const orderConfirmation = document.querySelector('#orderConfirmation');
    orderConfirmation.classList.toggle('visually_hidden');
}

/**
 * 
 * 
 * ARRAY WITH ITEMS
 * 
 * 
 */

// array with all shopitems in objects
let shopItems = [
    {
        img: {
            source: 'assets/bowls/twin-set-bowls.jpg',
            alt: 'One wooden bowl stood on a second wooden bowl ontop of a red table',
            width: 250,
            height: 250, 
        },
        name: 'Twin bowls',
        price: 300,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/twin-set.jpg',
            alt: 'A wooden bowl balancing on a second wooden bowl ontop of a red table',
            width: 250,
            height: 250, 
        },
        name: 'Twin set',
        price: 280,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },
    {
        img: {
            source: 'assets/bowls/flower-pot.jpg',
            alt: 'Wooden flower pot',
            width: 250,
            height: 250, 
        },
        name: 'Flower pot',
        price: 299,
        unit: 'kr',
        rating: 5,
        category: 'Pots',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/lime-plate.jpg',
            alt: 'Wooden plate with three limes against a red background',
            width: 250,
            height: 250, 
        },
        name: 'Lime plate',
        price: 150,
        unit: 'kr',
        rating: 5,
        category: 'Plates',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/single-bowl.jpg',
            alt: 'Wooden bowl with purple grapes against a red background',
            width: 250,
            height: 250, 
        },
        name: 'Single bowl',
        price: 200,
        unit: 'kr',
        rating: 3,
        category: 'Bowls',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/single-plate.jpg',
            alt: 'Wooden plate on a red table',
            width: 250,
            height: 250, 
        },
        name: 'Single plate',
        price: 180,
        unit: 'kr',
        rating: 5,
        category: 'Plates',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/triple-bowls.jpg',
            alt: 'Three wooden bowls stacked ontop of each other on a red table',
            width: 250,
            height: 250, 
        },
        name: 'Triplets',
        price: 450,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/triplet-set.jpg',
            alt: 'Three wooden bowls with single fruits next to each other on white cloth',
            width: 250,
            height: 250, 
        },
        name: 'Triplets set',
        price: 550,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/triplet-set.jpg',
            alt: 'Three wooden bowls with single fruits next to each other on white cloth',
            width: 250,
            height: 250, 
        },
        name: 'Triplets set',
        price: 550,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },

    {
        img: {
            source: 'assets/bowls/triplet-set.jpg',
            alt: 'Three wooden bowls with single fruits next to each other on white cloth',
            width: 250,
            height: 250, 
        },
        name: 'Triplets set',
        price: 550,
        unit: 'kr',
        rating: 5,
        category: 'Bowls',
        amount: 0,
    },

    
]

let cartViewNumber = document.querySelector('.cartNumber');

const itemContainer = document.querySelector("#product_container");
const summaryTotal = document.querySelector('.order_amount');
const mondayMsg = document.querySelector('.monday_message');

const cartContainer = document.querySelector('.cartorder_container');
const today = new Date();


const isFriday = today.getDay() === 5; // true or false
const isMonday = today.getDay() === 1; // true or false
const currentHour = today.getHours();

let shippingCost = document.querySelector('.shipping_cost');


//calling on the array to be printed out in the webshop
printItems();

//empty array for the ordersummary overview
let cartTotal = []


// function to increase amount with click on plusbutton
function increaseAmount(e) {
    let index = e.target.id.replace('plus-', '');
    index = Number(index);
    shopItems[index].amount += 1;
    cartTotal = shopItems.filter(item => item.amount > 0);
    
    
    printItems(); 
    cartOverview();
    calculateTotalAmount();
} 

// function to decrease amount with click on minusbutton
function decreaseAmount(e) {
    let index = e.target.id.replace('minus-', '');
    if (shopItems[index].amount > 0) {
        index = Number(index);
        shopItems[index].amount -= 1;
}
    printItems(); 
    calculateTotalAmount(); // calling on function which alters number next to carticon
} 

// specialrules
function getPriceMultiplier() {
    if (isFriday && currentHour >= 15 || isMonday && currentHour <= 3 ) {
        return 1.15;
    }
    return 1;
}


// function to print out all the shopitems onto the webpage
function printItems() {
    itemContainer.innerHTML = '';


    let priceIncrease = getPriceMultiplier();


    for(let i = 0; i < shopItems.length; i++) {
    itemContainer.innerHTML += // container for all HTML code for products
    `<div class="product_items"> 
    <img src='${shopItems[i].img.source}' loading="lazy">
    <h3> ${shopItems[i].name} </h3>
    <p class="product_price"> ${Math.round(shopItems[i].price * priceIncrease)} ${shopItems[i].unit}</p>
    <div class="product_buttons">
        <button class="minus" id="minus-${i}">-</button>
        <p id="amountInput"> ${shopItems[i].amount} </p>
        <button class="plus" id="plus-${i}">+</button>
    </div>
    <p> Rating: ${shopItems[i].rating}</p>
    <p class"category"> Category: ${shopItems[i].category}</p>
    </div>`;  
    } 

    //variabel for the plus button and function
    const plusBtn = document.querySelectorAll('.plus');
    for (let i = 0; i < plusBtn.length; i++) {
        plusBtn[i].addEventListener('click', increaseAmount)
    };

     //variabel for the minus button and function
    const minusBtn = document.querySelectorAll('.minus');
    for (let i = 0; i < minusBtn.length; i++) {
        minusBtn[i].addEventListener('click', decreaseAmount)
    };    
}

// function that increases item INSIDE order summary
function increaseCartPlus(e) {
    const index = e.currentTarget.dataset.id;
        cartTotal[index].amount += 1;
        updateViews(); 
        calculateTotalAmount(); 
             
}

// function that decreases item INSIDE order summary
function decreaseCartMinus(e) {
    const replaceMinus = document.querySelector('.cart-minus');
    const index = e.currentTarget.dataset.id;
    
    if (cartTotal[index].amount > 0) {
        cartTotal[index].amount -= 1;
        updateViews();
        calculateTotalAmount();
    } 
}


// function that pushes ordered amount into order summary overview
function cartOverview() {
    cartContainer.innerHTML = '';
    
    let sum = 0;
    let orderedItemAmount = 0;
    let orderMsg = '';
    let priceIncrease = getPriceMultiplier();

     //loop that shows ordered products in cartoverview
    cartTotal.forEach((shopItems, index) => {
        summaryTotal.innerHTML += ``;
        
        orderedItemAmount += shopItems.amount;

       // discount for 10 or more donuts
        if (shopItems.amount > 0) {  
            let itemPrice = shopItems.price 
            if (shopItems.amount >= 0) {
                itemPrice *= 0.9;
            }

            const newItemPrice = Math.round(itemPrice * priceIncrease);

            sum += shopItems.amount * newItemPrice;  

            cartContainer.innerHTML += 
                `<div class="cartorder_items">
                <h3>${shopItems.name}</h3>
                <div class="image_wrapper">
                    <img src='${shopItems.img.source}' loading="lazy">        
                </div>       
                <p>${shopItems.amount} items</p>                                
                <div class="cartorder_buttons">
                    <button class="cart-plus" data-id="${index}">+</button>
                    <button class="cart-minus" data-id="${index}">-</button>
                </div>
                <p> Total: ${shopItems.amount * newItemPrice}kr</p>        
                <button class="remove_item">Remove</button>
                </div>`
                ;
        }        
    });
    
    summaryTotal.innerHTML = `${sum}`;
           
        // apply discount on mondays
        if (today.getDay() === 1) {
            sum *= 0.9; //Monday discount on all of order
            orderMsg += '<p></p>';
            mondayMsg.innerHTML = 
            `<p>Yay! You have just received a Monday discount on your order!</p>
            `;
        }

        
        //shippingCost.innerHTML += ``;
       
        if (orderedItemAmount > 15) {
            shippingCost.innerHTML = `Shipping is free with your order!`;
        } else {
            shippingCost.innerHTML = `Shipping: ${Math.round(25 + (0.1 * sum))} kr`;
        }



       
        //variable for the plusbutton inside order summary
        const cartPlus = document.querySelectorAll('.cart-plus');
        for (let i = 0; i < cartPlus.length; i++) {
            cartPlus[i].addEventListener('click', increaseCartPlus)
        };

        //variable for the minusbutton inside order summary
        const cartMinus = document.querySelectorAll('.cart-minus');
        for (let i = 0; i < cartMinus.length; i++) {
            cartMinus[i].addEventListener('click', decreaseCartMinus)
        }; 
        
        
}


function calculateTotalAmount() {

    let totalAmount = cartTotal.reduce((total, product) => total + product.amount, 0);

    const cartNumber = document.querySelector('.cartNumber');
    if (cartNumber) {
        cartNumber.textContent = totalAmount;
    }
}

function updateViews() {
    printItems();
    cartOverview();
}



//function to print out cost and total amount of items together in order summary

/*
function printSummary() {
    const summaryTotal = document.querySelector('.ordersummary_container');

    summaryTotal.innerHTML = '';
    
    
    let orderMsg = '';

    shopItems.forEach(item => {
        if (item.amount > 0) {
            
            summaryTotal.innerHTML += 
            `
            <article>
                <span> ${item.name} </span>

            </article>
            `
        };

    });
    
    
 
}; 

*/









