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

const itemContainer = document.querySelector("#product_container");

printItems();



// function to increase amount with click on plusbutton
function increaseAmount(e) {
    let index = e.target.id.replace('plus-', '');
    index = Number(index);
    shopItems[index].amount += 1;

    printItems();  
} 


// function to decrease amount with click on minusbutton
function decreaseAmount(e) {
    let index = e.target.id.replace('minus-', '');
    index = Number(index);
    shopItems[index].amount -= 1;

    printItems();  
} 



// function to print out all the shopitems onto the webpage
function printItems() {
    itemContainer.innerHTML = '';

    for(let i = 0; i < shopItems.length; i++) {
    itemContainer.innerHTML +=
    `<div class="product_items">
    <img src='${shopItems[i].img.source}'>
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


    const plusBtn = document.querySelectorAll('.plus');
    for (let i = 0; i < plusBtn.length; i++) {
        plusBtn[i].addEventListener('click', increaseAmount)
    };

    const minusBtn = document.querySelectorAll('.minus');
    for (let i = 0; i < minusBtn.length; i++) {
        minusBtn[i].addEventListener('click', decreaseAmount)
    };
}







    




   
       
           
    
     




       /* 
       


    const minusBtn = document.querySelector('.minus');
    
    let totalAmount = document.querySelector('.totalamount')


plusBtn.addEventListener('click', increase);
function increase() {
    
} 

minusBtn.addEventListener('click', decrease);
function decrease() {
    if (inputValue.value > 0) {
        inputValue.value -= 1;
    }
}
*/








  //function to update number next to cart-icon when buttons are pressed
   /*function updateCart() {
    const cartAmount =  document.querySelector('.cartNumber');
    cartAmount.innerHTML = '';

    for (let i = 0; i < printItems.length; i++) {
        if (printItems[i].amount > 0) {
            console.log('hejfdfa');
        }
    }
    updateCart();   
}*/






