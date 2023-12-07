// ----------------------------------------------------------------------------------------
//------------------------------VARIABLES--------------------------------------------------
// ----------------------------------------------------------------------------------------
// VARIABLES - startpage
const cartBtn = document.querySelector('#cartBtn'); // variable for the cartbutton icon in the header
let cartViewNumber = document.querySelector('.cartNumber'); // variable for carticon in header
const itemContainer = document.querySelector(".product_container"); // variable for product container on startpage
const cartContainer = document.querySelector('.cartorder_container'); // variable for container of printed products in order summary
const summaryTotal = document.querySelector('.order_amount'); // variable for the total price amount showing in the order summary section
const today = new Date();

// VARIABLES - date and time for discounts
const isFriday = today.getDay() === 5; // variable for true or false Friday
const isSaturday = today.getDay() === 6; // variable for true or false Saturday
const isSunday = today.getDay() === 0; // variable for true or false Sunday
const isMonday = today.getDay() === 1; // variable for true or false Monday
const currentHour = today.getHours(); // variable for setting the time
const mondayMsg = document.querySelector('.monday_message'); // variable for discount message on mondays

// VARIABLES - order and shipment overview
let shippingCost = document.querySelector('.shipping_cost'); // variable for shipping cost container
const resetBtn = document.querySelector('.reset_button'); // variable for resetbutton at the end of the cart page that resets form input and cart total
resetBtn.addEventListener('click', resetAll); // eventlistner for the end of page resetbutton, to reset all forminput and product in cart

// VARIABLES - inside ordersummary
const orderBtn = document.querySelector('#order_button'); //variable for the orderbutton in order summary
const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]')); // variable for card and invoicebuttons in the ordersummary

//variables for card and invoice radiobuttons
const cardOption = document.querySelector('#payment_card');
const invoiceOption = document.querySelector('#payment_invoice');
let selectedPaymentOption = 'card';

// VARIABLES - orderform
const orderButton = document.querySelector('#order_button');

// VARIABLES - all RegEx and inputs in order form
const nameInput = document.querySelector('#fname'); // variable for forminput: name
const nameError = document.querySelector('#name_error'); // variable for the errormessage in the name inputfield
let nameErrorShown = false; // lets errormessage = false by default.
const nameRegEx = new RegExp(/^[a-z ,.'-]+$/i); // RegEx for name and surname input

const surnameInput = document.querySelector('#lname'); // variable to declare the 'surname' input
const surnameError = document.querySelector('#surname_error'); // variable for errormessage in name input
let surnameErrorShown = false; // lets errormessage = false by default.
const surnameRegEx = new RegExp(/^[a-z ,.'-]+$/i); // RegEx for name and surname input


// RegEx for form - address input
const adressRegEx = new RegExp('^\\d{3}\\s*\\d{2}$'); // variable for the address RegEx
const postcodeInput = document.querySelector('#zip'); // variable to declare the 'postcode' input
const postcodeRegEx = new RegExp('^\\d{3}\\s*\\d{2}$'); // variable for the postcode RegEx
const cityInput = document.querySelector('#city'); // variable to declare the 'city' input
const cityRegEx = new RegExp(/^[a-z ,.'-]+$/i); // variable for the city RegEx
const cityError = document.querySelector('#city_error');
const numberInput = document.querySelector('#tel'); // variable to declare the 'number' (phonenumber) input
const numberRegEx = new RegExp(/^[0-9]+$/); // variable for the number RegEx
const emailInput = document.querySelector('#email'); // variable to declare the 'email' input
const emailRegEx = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/); // variable for the email RegEx
const emailError = document.querySelector('#email_error');
const personalId = document.querySelector('#ssn'); // variable to declare the 'personal ID' input
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/); // variable for the Swedish Persona number RegEx

// VARIABLES - 15 minute timelimit and popup-message
let timeLimitMessage = document.querySelector('#timeout_message'); // variable for container pop up message when customer is too slow
let timeLimit; // variable for the starting timer of popup-message for slow customer
const timeoutBtn = document.querySelector('#timeout_button'); // variable for button that takes customer back to the form once popup message is triggered
const timeOutMessage = document.querySelector('.timeout_message'); // variable for popup message that shows when customers time has run out

// ----------------------------------------------------------------------------------------
//------------------------------ARRAYS-----------------------------------------------------
// ----------------------------------------------------------------------------------------

// array with all products
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
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
    },


]

//empty array for the cartsummary for the products to be pushed to
let cartTotal = []

// ----------------------------------------------------------------------------------------
//--------------------------FUNCTIONS AND EVENTLISTENERS-----------------------------------
// ----------------------------------------------------------------------------------------

//function that toggles the page view between products vs order summary
function orderSummary() {
    const productPage = document.querySelector('.product_container');
    productPage.classList.toggle('visually_hidden');


    const orderConfirmation = document.querySelector('.order_confirmation');
    orderConfirmation.classList.toggle('visually_hidden');
}
cartBtn.addEventListener('click', orderSummary); // ???????

// Toggle between order summary and confirmation order
function thankYouNote() { 
    const confirmationNote = document.querySelector('.confirmation_container');
    confirmationNote.classList.toggle('visually_hidden');
    const orderConfirmation = document.querySelector('.order_confirmation');
    orderConfirmation.classList.toggle('visually_hidden');
}
orderBtn.addEventListener('click', thankYouNote); // click-function that enables thank you note to popup


// loop that adds a function to the radiobuttons for card/invoice payment option
cardInvoiceRadios.forEach(radioButton => {
    radioButton.addEventListener('change', switchPaymentMethod);
});

// function switches between input fields for card vs invoice and toggles their visibility
function switchPaymentMethod(e) {
    cardOption.classList.toggle('hidden');
    invoiceOption.classList.toggle('hidden');
    selectedPaymentOption = e.target.value;
    activateOrderButton();
}

// RegEx functions and eventlisteners
function isPersonalIdNumberValid() {
    return personalIdRegEx.exec(personalId.value) !== null;
}
personalId.addEventListener('change', activateOrderButton);

// function to check if value of name input is correct
function isNameInputValid() { //function to check if the name input is valid   
   if (nameRegEx.exec(nameInput.value) === null) {
    nameInput.classList.add('error_input');
    nameError.textContent = 'Invalid input!'
    console.log('LISSNE');
    return false;
   } else if (nameRegEx.exec(nameInput.value) !== null) {
    nameInput.classList.remove('error_input');
    nameError.textContent = ''
    console.log('helloo');
    return true;
   }
}
nameInput.addEventListener('input', isNameInputValid); // when the inputfield for name changes, 

// function to check if value of surname input is correct
function isSurnameValid() {
    if (surnameRegEx.exec(surnameInput.value) === null) {
        surnameInput.classList.add('error_input');
        surnameError.textContent = 'Invalid input!'
        console.log('FEL SURNAME');
       } else if (surnameRegEx.exec(surnameInput.value) !== null) {
        surnameInput.classList.remove('error_input');
        surnameError.textContent = ''
        console.log('RÄTT SURNAME');
       }
    
}
surnameInput.addEventListener('input', isSurnameValid); // eventlistener for when surname input changes

// function to check if value of address input is correct
// eventlistener for when address input changes

// function to check if value of postcode input is correct
function isPostcodeValid() {
    
    return postcodeRegEx.exec(postcodeInput.value) !== null;
}
postcodeInput.addEventListener('input', isPostcodeValid); // eventlistener for when postcode-input changes

// function to check if value of name input is correct
function isCityValid() {
    if (cityRegEx.exec(cityInput.value) === null) {
        cityInput.classList.add('error_input');
        cityError.textContent = 'Invalid input!'
        console.log('FEL CITY');
       } else if (cityRegEx.exec(cityInput.value) !== null) {
        cityInput.classList.remove('error_input');
        cityError.textContent = ''
        console.log('JAAA CITY');
       }



    // return cityRegEx.exec(cityInput.value) !== null;
}
cityInput.addEventListener('input', isCityValid); // eventlistener for when number-input changes

// function to check if value of number input is correct 
function isNumberValid() {
    return numberRegEx.exec(numberInput.value) !== null;
}
numberInput.addEventListener('input', isNumberValid); // eventlistener for when number-input changes


// function to check if value of email input is correct 
function isEmailValid() {
    if (emailRegEx.exec(emailInput.value) === null) {
        emailInput.classList.add('error_input');
        emailError.textContent = 'Invalid input!'
        console.log('FEL EMAIL');
       } else if (emailRegEx.exec(emailInput.value) !== null) {
        emailInput.classList.remove('error_input');
        emailError.textContent = ''
        console.log('RÄTT EMAIL');
        return true;
       }
       
}
emailInput.addEventListener('input', isEmailValid); // eventlistener for when email-input changes


// function for when and how the order button is activated and enabled vs disabled.
function activateOrderButton() {   
    // DisplayErrors();
    
    const allPersonFieldsValid = 
    isNameInputValid() &&
    isSurnameValid() &&
    isPostcodeValid() &&
    isEmailValid() &&
    isNumberValid() &&
    isEmailValid();

    if (allPersonFieldsValid && selectedPaymentOption === 'card') {
        orderButton.removeAttribute('disabled');
        return;
    }

    if (allPersonFieldsValid && selectedPaymentOption === 'invoice' && isPersonalIdNumberValid()) {
        orderButton.removeAttribute('disabled');
            return;
    }

    orderButton.setAttribute('disabled', '');
    
}

// inside allPersonFieldsValid const
//nameInput.value.trim() !== '' &&
    //surnameInput.value.trim() !== '' &&
    //postcodeInput.value.trim() !== '' &&
    //cityInput.value.trim() !== '' &&
    //numberInput.value.trim() !== '' &&
    //emailInput.value.trim() !== '' 

// specialrules
function getPriceMultiplier() {
    if (isFriday && currentHour >= 15 || isSaturday || isSunday || isMonday && currentHour <= 3) {
        return 1.15;
    }
    return 1;
}

// function to print out all the shopitems onto the webpage
function printItems() {
    itemContainer.innerHTML = '';


    let priceIncrease = getPriceMultiplier();


    for (let i = 0; i < shopItems.length; i++) {
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

printItems(); //calling on the array to be printed out in the webshop

// function to increase amount with click on plusbutton
function increaseAmount(e) {
    if (cartTotal.length === 0) {
        startTimer();   // starts timer when item is added to the cart
        console.log('item is added');
    } else if (shopItems.every(item => item.amount < 1)) {
        startTimer(); // restarts the timer again AFTER cart has manually been reduced to 0 by customer
        console.log('timer has restarted');
    }

    let index = e.target.id.replace('plus-', '');
    index = Number(index);
    shopItems[index].amount += 1;
    cartTotal = shopItems.filter(item => item.amount > 0);


    printItems();
    cartOverview();
    calculateTotalAmount();
}

function stopTimer() {
    if (shopItems.every(item => item.amount === 0)) {
        clearTimeout(timeLimit);
        console.log('timer stopped');
    }
}

// function to decrease amount with click on minusbutton
function decreaseAmount(e) {
    let index = e.target.id.replace('minus-', '');
    if (shopItems[index].amount > 0) {
        index = Number(index);
        shopItems[index].amount -= 1;
    }

    stopTimer();
    printItems();
    calculateTotalAmount(); // calling on function which alters number next to carticon
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
    stopTimer(); // stops the timer if cart is emptied INSIDE cartsummary
}

// function for the delete-button inside each item in the ordersummary
function deleteCartItem(e) {
    const productId = Number(e.currentTarget.id.replace('delete-', ''));
    const i = cartTotal.findIndex((product) => product.id === productId);
    console.log(productId);
    console.log(i);


    if (i !== -1) {
        cartTotal.splice(i, 1);
        cartOverview(); // Update the cart view after removing the item
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
                <button class="remove_item_cart" id="delete-${shopItems.id}">Remove</button>
                </div>`;
        }
    });

    summaryTotal.innerHTML = `${sum}`;

    // apply discount on mondays
    if (today.getDay() === 1 && today.getHours() < 10) {
        sum *= 0.9; //Monday discount on all of order
        orderMsg += '<p></p>';
        mondayMsg.innerHTML =
            `<p>Yay! You have just received a Monday discount on your order!</p>
            `;
    }


    //shipping free/discount when ordering 15 or more donuts       
    if (orderedItemAmount > 15) {
        shippingCost.innerHTML = `Shipping is free with your order!`;
    } else {
        shippingCost.innerHTML = `Shipping: ${Math.round(25 + (0.1 * sum))} kr`;
    }

    let invoiceRadioOption = document.querySelector('#invoice_radio');
    //if order more than 800SEK, invoice option isn't available
    if (sum > 800) {
        invoiceRadioOption.classList.add('hidden');
    } else {
        invoiceRadioOption.classList.remove('hidden');
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

    // remove single item in cart
    Array.from(document.querySelectorAll('.remove_item_cart')).forEach((btn) => {
        btn.addEventListener('click', deleteCartItem);
    });


}

// function that changes the total amount of items in the carticon at the top of the page when customer adds or deducts a product
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

// function for the timer to be set to 15 minutes
function startTimer() {
    timeLimit = setTimeout(tooSlow, 1000 * 20); // Set a time limit of 3 seconds (adjust as needed)  
}

// Popup-message with a 15 minute timelimit. Display overlay element which notifies customer as well as resets the form inputs by customer.
function tooSlow() {
    timeLimitMessage.style.display = 'block';
    document.querySelector('#cartform').reset();
    console.log('You were too slow');
}

// Button inside the 15-minute popup-message, when customer clicks on it, it removes the message overlay.
function goBackBtn() {
    timeLimitMessage.style.display = 'none';
    emptyCart();
    console.log('Cart is emptied');
}
timeoutBtn.addEventListener('click', goBackBtn); // eventlistener: 'go back' button inside timelimit popup message

// function that resets all form inputs and cart total 
function resetAll() {
    document.querySelector('#cartform').reset(); // form for customer details
    document.querySelector('.payment_card').reset(); // form for card payment info
    document.querySelector('.payment_invoice').reset(); // form for invoice payment info
    emptyCart();
}

function emptyCart() {
    shopItems.forEach((product) => {
        product.amount = 0;
    });
    cartTotal = [];
    calculateTotalAmount();
    updateViews();
}


