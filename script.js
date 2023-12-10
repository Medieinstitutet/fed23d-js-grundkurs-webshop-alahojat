// ----------------------------------------------------------------------------------------
//------------------------------VARIABLES--------------------------------------------------
// ----------------------------------------------------------------------------------------
// VARIABLES - startpage
const cartBtn = document.querySelector('#cartBtn'); // variable for the cartbutton icon in the header
let cartViewNumber = document.querySelector('.cartNumber'); // variable for carticon in header
const itemContainer = document.querySelector(".product_container"); // variable for product container on startpage
const cartContainer = document.querySelector('.cartorder_container'); // variable for container of printed products in order summary
const summaryTotal = document.querySelector('.order_amount'); // variable for the total price amount showing in the order summary section
const today = new Date(); // next time move this variable inside function to prevent customer from utilising discount on other day than specified
const darkModeToggle = document.querySelector('#darkmode_icon'); // variable for the darkmode icon in the header


// VARIABLES - sort according to name, price and category
const sortProductBtnContainer = document.querySelector('.sortproduct_title'); // variable for sortproduct btn and icon
const sortProductBtn = document.querySelector('.sortproduct_button'); // variable for sortproduct button
const sortProductDiv = document.querySelector('.sortproduct_content'); // variable for sort product container
const sortName = document.querySelector('.sort_name'); // variable for the 'name' p-element in the sortproduct section
const sortPrice = document.querySelector('.sort_price'); // variable for the 'price' p-element in the sortproduct section
const sortCategory = document.querySelector('.sort_category'); // variable for the 'category' p-element in the sortproduct section
const sortRating = document.querySelector('.sort_rating'); // variable for the 'rating' p-element in the sortproduct section
let nameOrder = true; // variable to declare the sorting order for name
let priceOrder = true; // variable to declare the sorting order for price
let categoryOrder = true; // variable to declare the sorting order for price
let ratingOrder = true; // variable to declare the sorting order for rating

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
const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]')); // variable for card and invoice radiobuttons in the ordersummary
const cardOption = document.querySelector('#payment_card'); // variable for the cardpayment form input container
const invoiceOption = document.querySelector('#payment_invoice'); // variable for the invoicepayment form input container
let selectedPaymentOption = 'card'; // set default payment option to card

// VARIABLES - orderform
const orderButton = document.querySelector('#order_button'); // variable for the orderbutton at the end of all forminputs

// VARIABLES - all RegEx and inputs in order form
const nameInput = document.querySelector('#fname'); // variable for forminput: name
const nameRegEx = new RegExp(/^[a-zåäö ,.'-]+$/i); // RegEx for name and surname input
const nameError = document.querySelector('#name_error'); // variable for the errormessage in the name inputfield
const surnameInput = document.querySelector('#lname'); // variable to declare the 'surname' input
const surnameError = document.querySelector('#surname_error'); // variable for errormessage in surname input
const surnameRegEx = new RegExp(/^[a-zåäö ,.'-]+$/i); // RegEx for name and surname input
const addressInput = document.querySelector('#street-address'); // variable for forunput: address
const addressRegEx = new RegExp(/^[a-zåäöA-ZÅÄÖ0-9\s,'.-]*$/i); // variable for the address RegEx
const addressError = document.querySelector('#address_error'); // variable for the errormessage in the address inputfield
const postcodeInput = document.querySelector('#zip'); // variable to declare the 'postcode' input
const postcodeRegEx = new RegExp('^\\d{3}\\s*\\d{2}$'); // variable for the postcode RegEx
const postcodeError = document.querySelector('#postcode_error'); // variable for the errormessage in the postcode inputfield
const cityInput = document.querySelector('#city'); // variable to declare the 'city' input
const cityRegEx = new RegExp(/^[a-z ,.'-]+$/i); // variable for the city RegEx
const cityError = document.querySelector('#city_error'); // variable for the errormessage in the city inputfield
const numberInput = document.querySelector('#tel'); // variable to declare the 'number' (phonenumber) input
const numberRegEx = new RegExp(/^[0-9+()]+$/); // variable for the number RegEx
const numberError = document.querySelector('#number_error'); // variable for the errormessage in the city inputfield
const emailInput = document.querySelector('#email'); // variable to declare the 'email' input
const emailRegEx = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/); // variable for the email RegEx
const emailError = document.querySelector('#email_error'); // variable for the errormessage in the email inputfield
const personalId = document.querySelector('#ssn'); // variable to declare the 'personal ID' input
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/); // variable for the Swedish Persona number RegEx
const personalIdError = document.querySelector('#personalid_error'); // variable for the errormessage in the Personal ID inputfield

// VARIABLES - 15 minute timelimit and popup-message
let timeLimitMessage = document.querySelector('#timeout_message'); // variable for container pop up message when customer is too slow
let timeLimit; // variable for the starting timer of popup-message for slow customer
const timeoutBtn = document.querySelector('#timeout_button'); // variable for button that takes customer back to the form once popup message is triggered
const timeOutMessage = document.querySelector('.timeout_message'); // variable for popup message that shows when customers time has run out

// VARIABLES - orderconfirmation thank you note
const confirmationNote = document.querySelector('.confirmation_container'); // variable for the thank you note after customer has clicked 'order'
const goBackToStartBtn = document.querySelector('#gobacktostart'); // variable for the close button inside the thank you note

// ----------------------------------------------------------------------------------------
//------------------------------ARRAYS-----------------------------------------------------
// ----------------------------------------------------------------------------------------

// original array with all 10 products as objects
let shopItems = [
    {
        img: {
            source: 'assets/bowls/twin-set-bowls.jpg',
            alt: 'One wooden bowl stood on a second wooden bowl ontop of a red table',
            width: 250,
            height: 250,
        },
        name: 'Twin bowls',
        price: 450,
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
        price: 400,
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
        price: 349,
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
        price: 299,
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
        price: 249,
        unit: 'kr',
        rating: 4.5,
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
        price: 699,
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
        name: 'Set of three',
        price: 749,
        unit: 'kr',
        rating: 4.9,
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
        name: 'The three´s',
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
        name: 'Three in 1',
        price: 659,
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


// function that toggles between default mode and darkmode when clicking the icon in top left corner
function toggleDarkMode() {
    document.body.classList.toggle('darkmode');
    console.log('knapp funkar');
}
darkModeToggle.addEventListener('click', toggleDarkMode); // eventlistener that triggers darkmode toggle when clicked



//--------------------------SORTING PRODUCTS-----------------------------------------------

// function that toggles the visibility of the sortproduct section and it's options to sort from
function showSort() {
    sortProductDiv.classList.toggle('hidden');  
}
sortProductBtn.addEventListener('click', showSort); // eventlistener to show sort product options when button is clicked

// function that toggles and removes the visibility of the 'sort' button when the cartbutton is clicked
function hideSort() {
    sortProductBtnContainer.classList.toggle('hidden'); // hide sortbutton
    sortProductDiv.classList.add('hidden'); // hide options 
}
cartBtn.addEventListener('click', hideSort); // eventlistener to trigger above function when the cartbutton is clicked

// function to toggle of all items in alphabetical order
function sortByName() {
    if (nameOrder) { // order A -Z
        shopItems.sort((product1, product2) => {
            return product1.name === product2.name ? 0 : product1.name < product2.name ? -1 : 1;
        });
    } else { // order Z - A
        shopItems.sort((product1, product2) => {
            return product1.name === product2.name ? 0 : product1.name > product2.name ? -1 : 1;
        });
    }
    nameOrder = !nameOrder // toggles the order for the next click on 'name'
    printItems()
}
sortName.addEventListener('click', sortByName); // eventlistener to sort products by name when clicked
sortName.addEventListener('keypress', sortByName); // eventlistener to sort products by name when tabbed through and 'enter' key is used

// function to toggle of all items according to price
function sortByPrice() {
    if (priceOrder) { // order 1 - 9, smallest amount to highest
        shopItems.sort((product1, product2) => {
            return product1.price === product2.price ? 0 : product1.price < product2.price ? -1 : 1;
        });
    } else { // order 9 - 1, highest amount to smallest
        shopItems.sort((product1, product2) => {
            return product1.price === product2.price ? 0 : product1.price > product2.price ? -1 : 1;
        });
    }
    priceOrder = !priceOrder // toggles the order for the next click on 'price'
    printItems()
}
sortPrice.addEventListener('click', sortByPrice); // eventlistener to sort products by price when clicked
sortPrice.addEventListener('keypress', sortByPrice); // eventlistener to sort products by price when tabbed through and 'enter' key is used

// function to toggle of all items according to category in alphabetical order as well
function sortByCategory() {
    if (categoryOrder) { // order A - Z
        shopItems.sort((product1, product2) => {
            return product1.category === product2.category ? 0 : product1.category < product2.category ? -1 : 1;
        });
    } else { // order Z - A
        shopItems.sort((product1, product2) => {
            return product1.category === product2.category ? 0 : product1.category > product2.category ? -1 : 1;
        });
    }
    categoryOrder = !categoryOrder // toggles the order for the next click on 'category'
    printItems()
}
sortCategory.addEventListener('click', sortByCategory); // eventlistener to sort products by category when clicked
sortCategory.addEventListener('keypress', sortByCategory); // eventlistener to sort products by category when tabbed through and 'enter' key is used

// function to toggle of all items according to rating of item
function sortByRating() {
    if (ratingOrder) { // order 1 - 9, smallest amount to highest
        shopItems.sort((product1, product2) => {
            return product1.rating === product2.rating ? 0 : product1.rating < product2.rating ? -1 : 1;
        });
    } else { // order 9 - 1, highest amount to smallest
        shopItems.sort((product1, product2) => {
            return product1.rating === product2.rating ? 0 : product1.rating > product2.rating ? -1 : 1;
        });
    }
    ratingOrder = !ratingOrder // toggles the order for the next click on 'rating'
    printItems()
}
sortRating.addEventListener('click', sortByRating); // eventlistener to sort products by rating when clicked
sortRating.addEventListener('keypress', sortByRating); // eventlistener to sort products by rating when tabbed through and 'enter' key is used

//--------------------------TOGGLING PAGE VIEWS-----------------------------------------------

//function that toggles the page view between products vs order summary
function orderSummary() {
    const productPage = document.querySelector('.product_container'); // variable for the section that shows all printed products
    productPage.classList.toggle('visually_hidden');
    const orderConfirmation = document.querySelector('.order_confirmation'); // variable for the section that shows all order confirmation content
    orderConfirmation.classList.toggle('visually_hidden');  
}
cartBtn.addEventListener('click', orderSummary); // eventlistener that toggles between the different page views (productpage/order confirmation) when the cartlogo is clicked

// Function that shows the thank you note/confirmation of order (div) when the order button is clicked
function thankYouNote() {
    confirmationNote.style.display = 'block';
    clearTimeout( timeLimit); // stops the timer for the timeout message when customer has clicked on the orderbutton
}
orderBtn.addEventListener('click', thankYouNote); // click-function that enables thank you note/confirmation div

//--------------------------TOGGLE FOR PAYMENT OPTIONS-----------------------------------------------

// loop that adds a function to the radiobuttons for card/invoice payment option
cardInvoiceRadios.forEach(radioButton => {
    radioButton.addEventListener('change', switchPaymentMethod);
});

// function switches between input fields for card vs invoice and toggles their visibility
function switchPaymentMethod(e) {
    cardOption.classList.toggle('hidden');
    invoiceOption.classList.toggle('hidden');
    selectedPaymentOption = e.target.value;
    activateOrderButton(); // call on the activateOrderButton function
}

//--------------------------REGEX AND FORM FUNCTIONS-----------------------------------------------

// function to check if value of name input is correct
function isPersonalIdNumberValid() {
    return personalIdRegEx.exec(personalId.value) !== null;
}
personalId.addEventListener('input', activateOrderButton); // eventlistener when the inputfield for personalID changes, 
personalId.addEventListener('input', displayPersonalIdError); // // eventlistener when the inputfield for personalID changes, 

// function to check if value of name input is correct
function isNameInputValid() {   
    return nameRegEx.exec(nameInput.value) !== null;
}
nameInput.addEventListener('input', activateOrderButton); // eventlistener when the inputfield for name changes, 
nameInput.addEventListener('input', displayNameError); // eventlistener when the inputfield for name changes, 

// function to check if value of surname input is correct
function isSurnameValid() {
    return nameRegEx.exec(surnameInput.value) !== null;
}
surnameInput.addEventListener('input', activateOrderButton); // eventlistener for when surname input changes
surnameInput.addEventListener('input', displaySurnameError); // eventlistener for when surname input changes

// function to check if value of address input is correct
function isAddressInputValid() { //function to check if the name input is valid   
    return addressRegEx.exec(addressInputInput.value) !== null;
}
addressInput.addEventListener('input', activateOrderButton); // eventlistener for when address input changes
addressInput.addEventListener('input', displayAddressError); // eventlistener for when address input changes

// function to check if value of postcode input is correct
function isPostcodeValid() {
    return postcodeRegEx.exec(postcodeInput.value) !== null;
}
postcodeInput.addEventListener('input', activateOrderButton); // eventlistener for when postcode-input changes
postcodeInput.addEventListener('input', displayPostcodeError); // eventlistener for when postcode-input changes

// function to check if value of name input is correct
function isCityValid() {
    return cityRegEx.exec(cityInput.value) !== null;
}
cityInput.addEventListener('input', activateOrderButton); // eventlistener for when number-input changes
cityInput.addEventListener('input', displayCityError); // eventlistener for when number-input changes

// function to check if value of number input is correct 
function isNumberValid() {
    return numberRegEx.exec(numberInput.value) !== null;
}
numberInput.addEventListener('input', activateOrderButton); // eventlistener for when number-input changes
numberInput.addEventListener('input', displayNumberError); // eventlistener for when number-input changes

// function to check if value of email input is correct 
function isEmailValid() {
    return emailRegEx.exec(emailInput.value) !== null;
}
emailInput.addEventListener('input', activateOrderButton); // eventlistener for when email-input changes
emailInput.addEventListener('input', displayEmailError); // eventlistener for when email-input changes

// errormessage and red outline shown when personal ID input is incorrect
function displayPersonalIdError() {
    const personalIdMatch = personalIdRegEx.exec(personalId.value);
    if (personalIdMatch === null) { // if the value of personal id isn't correct
        personalId.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        personalIdError.textContent = 'Invalid Personal ID input!' // display this errormessage inside the empty span
        return true;
       } else {
        personalId.classList.remove('error_input'); // otherwise remove the red dotted border
        personalIdError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when name input is incorrect
function displayNameError() {
    const nameMatch = nameRegEx.exec(nameInput.value);
    if (nameMatch === null) { // if the value of name isn't correct
        nameInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        nameError.textContent = 'Invalid name input!' // display this errormessage inside the empty span
        return true;
        
       } else {
        nameInput.classList.remove('error_input'); // otherwise remove the red dotted border
        nameError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when surname input is incorrect
function displaySurnameError() {
    const surnameMatch = surnameRegEx.exec(surnameInput.value);
    if (surnameMatch === null) { // if the value of surname isn't correct
        surnameInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        surnameError.textContent = 'Invalid surname input!' // display this errormessage inside the empty span
        return true;
       } else {
        surnameInput.classList.remove('error_input'); // otherwise remove the red dotted border
        surnameError.textContent = '' // empty the textcontent inside the span
        return false
       }
}

// errormessage and red outline shown when address input is incorrect
function displayAddressError() {
    const addressMatch = addressRegEx.exec(addressInput.value);
    if (addressMatch === null) { // if the value of address isn't correct
        addressInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        addressError.textContent = 'Invalid address input!' // display this errormessage inside the empty span
        return true;
       } else {
        addressInput.classList.remove('error_input'); // otherwise remove the red dotted border
        addressError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when postcode input is incorrect
function displayPostcodeError() {
    const postcodeMatch = postcodeRegEx.exec(postcodeInput.value);
    if (postcodeMatch === null) { // if the value of postcode isn't correct
        postcodeInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        postcodeError.textContent = 'Invalid postcode input!' // display this errormessage inside the empty span
        return true;
       } else {
        postcodeInput.classList.remove('error_input'); // otherwise remove the red dotted border
        postcodeError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when city input is incorrect
function displayCityError() {
    const cityMatch = cityRegEx.exec(cityInput.value);
    if (cityMatch === null) { // if the value of city isn't correct
        cityInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        cityError.textContent = 'Invalid city input!' // display this errormessage inside the empty span
        return true;
       } else {
        cityInput.classList.remove('error_input'); // otherwise remove the red dotted border
        cityError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when number input is incorrect
function displayNumberError() {
    const numberMatch = numberRegEx.exec(numberInput.value);
    if (numberMatch === null) { // if the value of number isn't correct
        numberInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        numberError.textContent = 'Invalid number input!' // display this errormessage inside the empty span
        return true;
       } else {
        numberInput.classList.remove('error_input'); // otherwise remove the red dotted border
        numberError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// errormessage and red outline shown when email input is incorrect
function displayEmailError() {
    const emailMatch = emailRegEx.exec(emailInput.value)
    if (emailMatch === null) { // if the value of email isn't correct
        emailInput.classList.add('error_input'); // add this class to the input field that shows a red dotted border
        emailError.textContent = 'Invalid email input!' // display this errormessage inside the empty span
        return true;
       } else {
        emailInput.classList.remove('error_input'); // otherwise remove the red dotted border
        emailError.textContent = '' // empty the textcontent inside the span
        return false;
       }
}

// function for when and how the order button is activated and enabled vs disabled.
function activateOrderButton() {   
    // let atLeastOneProductInCart = (cartTotal.length == 0);

    // if there is no items in the cart, keep the order button set as disabled
    if (cartTotal.length == 0) {
        orderButton.setAttribute('disabled')
    }

    const allPersonFieldsValid = 
    isNameInputValid() &&
    isSurnameValid() &&
    isPostcodeValid() &&
    isCityValid() &&
    isNumberValid() &&
    isEmailValid() &&
    nameInput.value.trim() !== '' &&
    surnameInput.value.trim() !== '' &&
    postcodeInput.value.trim() !== '' &&
    cityInput.value.trim() !== '' &&
    numberInput.value.trim() !== '' &&
    emailInput.value.trim() !== '';

   
    // if cardpayment is applied and all form inputs are validated the order button becomes active
    if (selectedPaymentOption === 'card' )
 {
        if (allPersonFieldsValid) {
            orderButton.removeAttribute('disabled');
            return;
        }
    }

    // if invoicepayment is applied and all form inputs are validated the order button becomes active
    if (selectedPaymentOption === 'invoice' && isPersonalIdNumberValid()) {
        orderButton.removeAttribute('disabled');
            return;
    }

    // otherwise the order button is set to inactive
    orderButton.setAttribute('disabled', '');    
}

//--------------------------PRINTING PRODUCTS AND DISCOUNTS-----------------------------------------------

// function for weekend price increase
function getPriceMultiplier() { // Increase all product prices with 1.15 if the day customer orders is between 3pm friday through until monday 3am
    if (isFriday && currentHour >= 15 || isSaturday || isSunday || isMonday && currentHour < 3) {
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
            <img src='${shopItems[i].img.source}' width="${shopItems[i].img.width}" height="${shopItems[i].img.height}"
            alt="${shopItems[i].img.alt}">
            <h3> ${shopItems[i].name} </h3>
            <p class="product_price"> ${Math.round(shopItems[i].price * priceIncrease)} sek</p>
            <div class="product_buttons">
                <button class="minus" id="minus-${i}">-</button>
                <p class="amountInput"> ${shopItems[i].amount} </p>
                <button class="plus" id="plus-${i}">+</button>
            </div>
            <p class="product_rating"> <span class="material-symbols-outlined">
            star_rate</span> ${shopItems[i].rating}</p>
            <p class="category">${shopItems[i].category}</p>
        </div>`;
    }

    //variabel for the plus button and function
    const plusBtn = document.querySelectorAll('.plus');
    for (let i = 0; i < plusBtn.length; i++) { // add a eventlistener to all plusBtn in the loop
        plusBtn[i].addEventListener('click', increaseAmount)
    };

    //variabel for the minus button and function
    const minusBtn = document.querySelectorAll('.minus');
    for (let i = 0; i < minusBtn.length; i++) { // add a eventlistener to all minusBtn in the loop
        minusBtn[i].addEventListener('click', decreaseAmount)
    };
}

printItems(); //calling on the array to be printed out in the webshop

// function to increase amount with click on plusbutton
function increaseAmount(e) {
    if (cartTotal.length === 0) {
        startTimer();   // starts timer when item is added to the cart
    } else if (shopItems.every(item => item.amount < 1)) {
        startTimer(); // restarts the timer again AFTER cart has manually been reduced to 0 by customer
    }

    let index = e.target.id.replace('plus-', '');
    index = Number(index);
    shopItems[index].amount += 1;
    cartTotal = shopItems.filter(item => item.amount > 0);
    printItems();
    cartOverview();
    calculateTotalAmount();
}

// function to stops the timer that starts when a customr puts an item in the cart
function stopTimer() {
    if (shopItems.every(item => item.amount === 0)) { // if the cartamount is reduced back to zero, the timer is stopped
        clearTimeout(timeLimit); // clear the timeout
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

    if (i !== -1) {
        cartTotal.splice(i, 1);
        cartOverview(); // Update the cart view after removing the item
        calculateTotalAmount();
        updateViews();
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
       
        // 10% discount when customer orders 10 or more of the same product
        if (shopItems.amount > 0) {
            let itemPrice = shopItems.price
            if (shopItems.amount >= 10) {
                itemPrice *= 0.9;
            }

            const newItemPrice = Math.round(itemPrice * priceIncrease);
            sum += shopItems.amount * newItemPrice;

            cartContainer.innerHTML += //print out this html inside cartContainer when product is added to cart
                `<div class="cartorder_items">
                    <h3>${shopItems.name}</h3>
                    <div class="image_wrapper">
                        <img src='${shopItems.img.source}' width="${shopItems.img.width}" height="${shopItems.img.height}"
                        alt="${shopItems.img.alt}">        
                    </div> 
                    <div class="cartinfo_wrapper">                                
                        <div class="cartorder_buttons">
                            <button class="cart-minus" data-id="${index}">-</button>
                            <button class="cart-plus" data-id="${index}">+</button>
                        </div>
                        <p>Quantity: ${shopItems.amount}</p> 
                        <p> Total: ${shopItems.amount * newItemPrice} sek</p>
                    </div>        
                    <button class="remove_item_cart" id="delete-${shopItems.id}">Remove</button>
                </div>`;
        }
    });

    summaryTotal.innerHTML = `${sum}`; // let the 'Total' inside cart summary display the dynamic sum

    // apply 10% discount when customers buys any items before 10am on Mondays
    if (today.getDay() === 1 && today.getHours() < 10) {
        sum *= 0.9; //Monday discount on all of order
        orderMsg += '<p></p>';
        mondayMsg.innerHTML = // when this happens, display this content
            `<p>Yay! You have just received a Monday discount on your order!</p>
            `;
    } 

    //shipping free/discount when ordering 15 or more donuts       
    if (orderedItemAmount > 15) { // if customer orders more than 15 items in total
        shippingCost.innerHTML = `Shipping is free with your order!`; // display this message inside the shippingCost element 
    } else {
        shippingCost.innerHTML = `Shipping: ${Math.round(25 + (0.1 * sum))} sek`; // otherwise display this message showing the default cost of shipping
    }

    let invoiceRadioOption = document.querySelector('#invoice_radio'); // variable for the invoice radio button in the payment section
    //if order is more than 800SEK, invoice as selected payment option isn't available
    if (sum > 800) {
        invoiceRadioOption.classList.add('hidden'); // hide option to pay by invoice
    } else {
        invoiceRadioOption.classList.remove('hidden'); // otherwise remove the hidden class
    }

    const cartPlus = document.querySelectorAll('.cart-plus'); //variable for the plusbutton inside order summary
    for (let i = 0; i < cartPlus.length; i++) { // for each plusbutton inside cart, add a click event that calls the function increaseCartPlus
        cartPlus[i].addEventListener('click', increaseCartPlus) // eventlistener for the button
    };

    const cartMinus = document.querySelectorAll('.cart-minus'); //variable for the minusbutton inside order summary
    for (let i = 0; i < cartMinus.length; i++) { // for each minusbutton inside cart, add a click event that calls the function decreaseCartMinus
        cartMinus[i].addEventListener('click', decreaseCartMinus) // eventlistener for the button
    };

    // add a click eventlistener to each removebutton in the cartTotal array
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

// update the views in printItems and cartOverview
function updateViews() {
    printItems();
    cartOverview();
}

//--------------------------PAGE TIMER AND EMPTYING OF CART-----------------------------------------------

// function for the timeout time to be set to 15 minutes
function startTimer() {
    timeLimit = setTimeout(tooSlow, 1000 * 60 * 15); // 
}

// Popup-message with a 15 minute timelimit. Display overlay element which notifies customer as well as resets the form inputs by customer.
function tooSlow() {
    timeLimitMessage.style.display = 'block'; // display the overlay element saying customer is too slow
    document.querySelector('#cartform').reset(); // reset all inputs inside form
}

// Button inside the 15-minute popup-message, when customer clicks on it, it removes the message overlay and empties cart.
function goBackBtn() {
    timeLimitMessage.style.display = 'none'; //remove overlay element saying customer is too slow
    emptyCart(); // empties cart once button has been clicked
}
timeoutBtn.addEventListener('click', goBackBtn); // eventlistener: 'go back' button inside timelimit popup message

// function that resets all form inputs and cart total 
function resetAll() {
    document.querySelector('#cartform').reset(); // resets form for customer details
    document.querySelector('.payment_card').reset(); // resets form for card payment info
    document.querySelector('.payment_invoice').reset(); // resters form for invoice payment info
    emptyCart(); // empties any items inside cart
}

// function that sets empties cart and updates the total amount in cart icon as well as product overview on mainpage
function emptyCart() {
    shopItems.forEach((product) => {
        product.amount = 0;
    });
    cartTotal = []; // lets cartTotal be empty
    calculateTotalAmount();
    updateViews();   
}

// function that removes the thank you note and resets all products and forminputs when button 'close' is clicked
function goToStartPageAfterOrder() {
    window.scrollTo({ top: 0, behavior: 'smooth'}); // when button is clicked, page scrolls back to top of page
    confirmationNote.style.display = 'none'; // removes the modal showing the thank you note
    const productPage = document.querySelector('.product_container'); // variable for the intial printed products
    productPage.classList.remove('visually_hidden'); // removes the hidden class from productPage
    const orderConfirmation = document.querySelector('.order_confirmation'); // variable for the cofirmation section
    orderConfirmation.classList.add('visually_hidden');  // removes the hidden class from orderConfirmation
    resetAll(); // resets all form inputs and items in cart
    hideSort(); // 
}
goBackToStartBtn.addEventListener('click', goToStartPageAfterOrder); // eventlistener for the 'close' button inside thankyou-note


