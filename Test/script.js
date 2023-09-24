// Get references to the cart button, cart drawer, and close button
const cartButton = document.getElementById('cart-button');
const cartDrawer = document.getElementById('cart-drawer');
const closeCartButton = document.getElementById('close-cart');

// Add click event listeners to open and close the cart drawer
cartButton.addEventListener('click', () => {
    console.log('Cart drawer clicked');
    cartDrawer.classList.add('cart-open');
});

closeCartButton.addEventListener('click', () => {
    cartDrawer.classList.remove('cart-open');
});
