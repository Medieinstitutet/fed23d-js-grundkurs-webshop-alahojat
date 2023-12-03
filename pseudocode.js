/**
 * Issues currently: when clicking on 'go back' button in the time out popupmessage I would like the page to reset.
 * The invoice option doesnt reset if the previous cart has had more than 800SEKs worth of products in it
 */


/**
 * Activate timer when item is added to cart
 * if cart goes down to 0, return the function
 * 
 */


// DONE
// Create array with items DONE


// DONE
/* Function: addItem (adds item to cart on start page)
    - when the minus-button is clicked the value of the input decreases by 1 (number)
    - A total next to the cart is updated
    - IF the value reaches 0 customer the function of the minus-button no longer works
    - when the plus-button is clicked the value of the input increases by 1 (number)

*/

//DONE
/* Function: toggleView (toggles between the shopview and the cartview)
    - when cart icon is clicked, the order page appears:
        Function: orderSummary (show an overview of items displayShoppingCart in the order summary) 
        - IF order placed before 10am on a monday, 10% off is applied on full amount of the cart
        - order summary shows text "Måndagsrabatt: 10 % på hela beställningen"
        - when cart icon is clicked again, the order page disappears
*/


//DONE
// Function: addToCart (updates number next to cart icon when customer presses minus or plus)




// DONE
/* Function: change value of cart based on rules... IF..ELSE
    - 
*/



// DONE
// Function: displayShoppingCart (connect and style cart based off values from array with items)



/* Function: array filters
    Function: sortItemsName (enables items to be filtered based on name)
    - when button is clicked, items in array sort alphabetically

    Function: sortItemsPrice (enables items to be filtered based on price)
    - when button is clicked, items in array sort according to price

    Function: sortItemsCategory (enables items to be filtered based on category)
    - when button is clicked, items in array sort according to category

    Function: sortItemsRating (enables items to be filtered based on rating)
    when button is clicked, items in array sort according to rating
*/







// DONE
/* Function: removeItem (removes item from order summary)
    - when button is clicked, value input is reset to 0
*/

// DONE
/* Function: paymentCard (activates payment form)
    - when card-button is clicked, new inputfields for cardnumber, date/year and CVC appear
*/


// DONE
/* Function: paymentInvoice (activats invoice form)
    DONE when invoice-button is clicked, new inputfield for swedish ID number appears
    DONE IF total amount is > 800kr, this function is returned.
*/

// DONE
// create function that toggles visibility of paymentCard and paymentInvoice once clicked?

// DONE
/* Function: resetForm (resets both form and orders upon click)
    - when button is clicked all input values are deleted
    - card or invoice is also reset
    */




/* Function: orderButton (enables button to be pressed when form is correctly filled, activates "Thank You" note.
However resets form after 15 min)
    - when form input values for order AND invoice are correct, button changes from grey and inactive
     to blue and clickable
    - when blue button is clicked a thank you note pops up
*/

















/*

Ändra minusknapp till removeitem
else if (cartTotal[index].amount === 1) { 
        cartTotal[index].amount -= 1;
        replaceMinus.innerHTML = `Remove item`;
        updateViews();
        calculateTotalAmount();
        console.log(replaceMinus);
    }   


*/

/*
// function that resets the cartamount to 0
function resetCart() {
    shopItems.forEach(item => {
        item.amount = 0;
    });
  
}
*/


/*
// prints message to customer after 15 mins
function tooSlow() {
    alert('Sorry, your time has run out!');
}
*/



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



/*
  let timeLimit = setTimeout(tooSlow, 1000); // variable for time limit for customer

        const orderSummaryClicked = document.querySelector('#orderConfirmation');
        const isOrderSummaryVisibile = !orderSummaryClicked.classList.contains('visually_hidden');

        if (isOrderSummaryVisibile) {
            clearTimeout(timeLimit);
            tooSlow();  
            resetCart();
        } 



// function that resets the cartamount to 0
function resetCart() {
    shopItems.forEach(item => {
        item.amount = 0;
    });
  
}
*/

