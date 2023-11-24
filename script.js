// Create array with items - DONE

/* Function: addItem (adds item to cart on start page)
    - when the minus-button is clicked the value of the input decreases by 1 (number)
    - A total next to the cart is updated
    - IF the value reaches 0 customer the function of the minus-button no longer works
    - when the plus-button is clicked the value of the input increases by 1 (number)

*/

// array with all shop items
let shopItems = [
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
]

const itemContainer = document.querySelector(".product_container");

function printItems() {
    for(let i = 0; i < shopItems.length; i++) {
    itemContainer.innerHTML +=
    `
    <div class="product_items">
    <img src='${shopItems[i].img.source}'>
    <h3> ${shopItems[i].name} </h3>
    <p> ${shopItems[i].price} ${shopItems[i].unit}</p>
    <p> Rating ${shopItems[i].rating}</p>
    <div class="product_buttons">
        <button class="minus">-</button>
        <input type="number">
        <button class="plus">+</button>
    </div>
    `
    }
}


printItems();
