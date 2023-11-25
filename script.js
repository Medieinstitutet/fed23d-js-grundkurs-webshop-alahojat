// toggle pageview with cart clicks

const cartBtn = document.querySelector('.material-symbols-outlined');

cartBtn.addEventListener('click', orderSummary);
function orderSummary() {
   const productPage = document.querySelector('#product_container');
   productPage.classList.toggle('hidden');
}

orderSummary();






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

    
]

const itemContainer = document.querySelector("#product_container");


// function to print out all the shopitems onto the webpage

function printItems() {
    for(let i = 0; i < shopItems.length; i++) {
    itemContainer.innerHTML +=
    `<div class="product_items">
    <img src='${shopItems[i].img.source}'>
    <h3> ${shopItems[i].name} </h3>
    <p> ${shopItems[i].price} ${shopItems[i].unit}</p>
    <p> Rating ${shopItems[i].rating}</p>
    <div class="product_buttons">
        <button class="minus-${i}">-</button>
        <input class="item_input" type="number">
        <button class="plus-${i}">+</button>
    </div>`;
       
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    let inputValue = document.querySelector('.item_input');

    console.log(inputValue);
    
}
}
printItems();




// function for plus and minusbuttons to increase/decrease value of input


