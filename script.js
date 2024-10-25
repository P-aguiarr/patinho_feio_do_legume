// Existing event listeners for switching between sign-in and sign-up
document.getElementById('switchToSignIn').addEventListener('click', () => {
    document.querySelector('.sign-in-container').style.left = '0';
    document.querySelector('.sign-up-container').style.left = '-50%';
});

document.getElementById('switchToSignUp').addEventListener('click', () => {
    document.querySelector('.sign-in-container').style.left = '50%';
    document.querySelector('.sign-up-container').style.left = '0';
});

// Initial item count and cart items
let itemCount = 0;
const cartItems = {}; // Object to store cart items and their quantities

// Function to handle adding items to the cart
function addItemToCart(event) {
    const itemName = event.currentTarget.querySelector('h3').textContent;
    
    // Check if the item is already in the cart
    if (cartItems[itemName]) {
        cartItems[itemName].quantity += 1;
    } else {
        cartItems[itemName] = { name: itemName, quantity: 1 };
    }

    // Update the item count
    itemCount++;
    document.getElementById('itemCount').textContent = itemCount;
}

// Adding click event listeners to product items (assuming they have the class 'destination-card')
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    card.addEventListener('click', addItemToCart);
});

// Display cart items in the tooltip when clicking the floating cart icon
const floatingCart = document.getElementById('floatingCart');
const cartTooltip = document.getElementById('cartTooltip');
const cartItemsList = document.getElementById('cartItemsList');

floatingCart.addEventListener('click', () => {
    // Toggle the visibility of the tooltip
    if (cartTooltip.style.display === 'none' || cartTooltip.style.display === '') {
        cartTooltip.style.display = 'block';
        
        // Populate the tooltip with cart items
        cartItemsList.innerHTML = ''; // Clear the list first
        for (const itemName in cartItems) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${cartItems[itemName].quantity}</span> <span>${cartItems[itemName].name}</span>`;
            cartItemsList.appendChild(listItem);
        }
    } else {
        cartTooltip.style.display = 'none';
    }
});

// Close the tooltip if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target !== floatingCart && event.target !== cartTooltip && !cartTooltip.contains(event.target)) {
        cartTooltip.style.display = 'none';
    }
});
