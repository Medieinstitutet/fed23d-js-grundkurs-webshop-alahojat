
/**
 * 
 * 
 * TOGGLE PAGEVIEW
 * 
 * 
 */
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


/**
 * 
 * 
 * TOGGLE ORDER CONFIRMATION
 * 
 * 
 */

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

// function to print out all the shopitems onto the webpage
function printItems() {
    itemContainer.innerHTML = '';

    for(let i = 0; i < shopItems.length; i++) {
    itemContainer.innerHTML += // container for all HTML code for products
    `<div class="product_items"> 
    <img src='${shopItems[i].img.source}' loading="lazy">
    <h3> ${shopItems[i].name} </h3>
    <p class="product_price"> ${shopItems[i].price} ${shopItems[i].unit}</p>
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




const cartContainer = document.querySelector('.cartorder_container');


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
    
    if (cartTotal[index].amount > 1) {
        cartTotal[index].amount -= 1;
        updateViews();
        calculateTotalAmount();
    } else if (cartTotal[index].amount === 1) { 
        cartTotal[index].amount -= 1;
        replaceMinus.innerHTML = `Remove item`;
        updateViews();
        calculateTotalAmount();
    }

   
    
}

// function that pushes ordered amount into order summary overview
function cartOverview() {
    cartContainer.innerHTML = '';

    cartTotal.forEach((shopItems, index) => {
        if (shopItems.amount > 0) {
        cartContainer.innerHTML += 
        `<div class="cartorder_items">
        <img src='${shopItems.img.source}' loading="lazy"> 
        <div class="cartorder_info">
            <h3>${shopItems.name}</h3>
            <p>Total items: ${shopItems.amount}</p>
            <button class="cart-plus" data-id="${index}">+</button>
            <button class="cart-minus" data-id="${index}">-</button>
        </div>
        </div>`;
    }
        });

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





