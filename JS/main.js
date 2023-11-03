// Notify user that the website isn't fully operational with a status message.
function statusMessage() {
  // Check if the flag is set in sessionStorage
  if (!sessionStorage.getItem('statusMessageDisplayed')) { // Get the status message from session storage so it only displays once in a session
      const status = document.getElementById('status'); // Set Status ID
      const overlay = document.getElementById('overlay'); // Set Overlay ID
      setTimeout(() => { // Set Timeout so it is delayed by 1 second for effect
          status.style.opacity = '1'; // Set status message opacity to 1 so it is visible
          overlay.style.opacity = '1'; // Set background overlay opacity to 1 so it is visible
          status.style.zIndex = "9"; // Set status message z-index to be above overlay
          overlay.style.zIndex = "8"; // Set overlay z-index to cover page
      }, 100); // 1 second timeout

      // Set the flag in sessionStorage to indicate that the message has been displayed
      sessionStorage.setItem('statusMessageDisplayed', 'true');  // upload info to local storage again
  } else{ // when the message has already been displayed
    const status = document.getElementById('status'); // set status ID
    const overlay = document.getElementById('overlay'); // set overlay ID
    status.style.opacity = "0"; // set opacity to 0
    overlay.style.display = 'none'; // set overlay display to none so it doesn't effect anything else
    status.style.zIndex = "-999"; // set status z-index to lowest so it doesn't effect anything else
    overlay.style.zIndex = "-999"; // set overlay z-index to lowest so it doesn't effect anything else
  }
}

function closeMessage() {  // close status message
  const status = document.getElementById('status'); // set status ID
    const overlay = document.getElementById('overlay'); // set overlay ID
    status.style.opacity = "0"; // set opacity to 0
    overlay.style.display = 'none'; // set overlay display to none so it doesn't effect anything else
    status.style.zIndex = "-999"; // set status z-index to lowest so it doesn't effect anything else
    overlay.style.zIndex = "-999"; // set overlay z-index to lowest so it doesn't effect anything else
}

document.body.onload = statusMessage; // when the page loads, run statusMessage function


// Define a custom HTML element called 'header-component'
class Header extends HTMLElement { // Have my header html in one place so if i need to change something it changes on all my pages
  constructor() {
    super();
  }

  // When the custom element is connected to the DOM, execute this function
  connectedCallback() {
    this.innerHTML = `
    <header class="navigation-bar">
    <header class="top-header">
      <div class="navbar-container">
        <ul class="navbar one" id="j">
          <div class="dropdown-menu-header">
          <li class="navbar-item burger">
            <a class="navbar-item burger" href="#" id="burger">
              <i id="faBars" class="fa-solid fa-bars" onclick="openHeader()"></i>
            </a>
          </li>
            <ul class="contactbtn">
              <li class="contact">
                <a class="navbar-item" href="contact.html">
                  <!-- <i class="fa-brands fa-pinterest"></i> -->Contact Me
                </a>
              </li>
              <!-- <li>
                            <a class="dropdown-item">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li> -->
            </ul>
          </div>
          <div class="logotext">
            <li class="navbar-item logoimage">
              <a class="navbar-item" href="index.html"><img class="logo-big" style="width: 400px" src="Materials/Logo Text.svg" /><img class="logo-small" src="Materials/Logo.svg"></a>
            </li>
          </div>
          <li class="navbar-item bag">
            <a class="navbar-item bag" href="#" id="cartButton">
              <i class="fa-solid fa-bag-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <header class="header-two" id="headerTwo">
      <div class="navbar-container">
        <ul class="navbar two" id="navbar">
          <li class="navbar-item">
            <a class="navbar-a-item" href="index.html">Home</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-a-item" href="shopall.html">Shop All</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-a-item" href="portfolio.html">Portfolio</a>
          </li>
          <li class="navbar-item dropdown-menu-name">
            <a href="shopall.html" class="navbar-a-item dropdown-menu-name-a">
              Collections <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown-menu-header drop">
              <ul class="header-menu__dropdown-nav">
                <li>
                  <a class="dropdown-item" data-category="New"> New </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Limited Edition">
                    Limited Edition
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Landscape Images">
                    Landscape Images
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Favourites"> Favourites </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Black and White">
                    Black and White
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Flowers"> Flowers </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Dogs"> Dogs </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Cats"> Cats </a>
                </li>
                <li>
                  <a class="dropdown-item" data-category="Wildlife"> Wildlife </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="navbar-item">
            <a class="navbar-a-item" href="about.html">About</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-a-item" style="cursor: pointer" onclick="scrollBottom()">Socials</a>
          </li>
        </ul>
      </div>
    </header>
  </header>
  <header class="collapsed-header" id="collapsedHeader">
    <div class="navbar-container three">
      <ul class="navbar three" id="navbar">
        <li class="navbar-item">
          <a class="navbar-a-item" href="index.html">Home</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-a-item" href="shopall.html">Shop All</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-a-item" href="portfolio.html">Portfolio</a>
        </li>
        <li class="navbar-item">
          <a href="shopall.html" class="navbar-a-item">
            Collections
          </a>
        </li>
        <li class="navbar-item">
          <a class="navbar-a-item" href="about.html">About</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-a-item" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </header>
  <div class="cart-container" id="cartDrawer">
  <div class="cart-full-title">Your Bag</div>
    <i class="fa-solid fa-xmark" id="cartClose"></i>
    <div class="cart" id="cartItems">
      
    </div>
    <div id="cartEmptyMessage"></div>
  </div>
    `;
  }
}

customElements.define('header-component', Header); // when i put header-element tag in html it will act as the Header 

//Collapesed header open
let collapsedHeader = document.getElementById('collapsedHeader'); // variable for collapsed header
let icon = document.getElementById('faBars'); // variable for icon
let body = document.body; // variable for body
let html = document.getElementById('html'); // variaable for html

function openHeader(){ // open header hamburger header
  if(collapsedHeader.style.transform == 'translateX(0%)'){ // allow animation my using translateX function
    collapsedHeader.style.transform = 'translateX(-100%)' // slide in menu
    icon.classList.add('fa-bars'); // change icon to bars
    icon.classList.remove('fa-xmark'); // remove xmark icon
  }else{
    collapsedHeader.style.transform = 'translateX(0%)' // slide out menu
    icon.classList.add('fa-xmark'); // add xmark icon
    icon.classList.remove('fa-bars'); // remove bars icon
    html.style.overflow = 'hidden'; // stop scrolling on body
  }
}


// Get references to HTML elements
let filter = document.getElementById("fil"); // variable for filter
let or = document.getElementById("or"); // variable for orientation of images
let banner = document.getElementById("banner"); // variable for banner
let navbar = document.getElementById("headerTwo"); // variable for navbar

// Add scroll event listener to window
window.onscroll = function () { // Create funtion so the navbar fixes on scroll at certain height
  scrollFunction();
};

// Function to handle scrolling
function scrollFunction() {
  if (document.body.scrollTop > 165 || document.documentElement.scrollTop > 165) {
    // If the page is scrolled down more than 120 pixels, fix the navbar at the top
    navbar.style.position = "fixed"; // Set navbar to fixed 
    navbar.style.top = "0"; // Fix it to the top
    banner.style.marginTop = "56.5px" // Add top margin to banner to avoid overlap
  } else {
    // If not, make the navbar relative again
    navbar.style.position = "relative";
    navbar.style.top = "0px"; // set navbar to relative and top to 0px to remove fixed position
    banner.style.marginTop = "0px" // remove top margin from banner
  }
}

// Function to toggle the filter display
function openFilter() {
  if (filter.style.display == 'flex') { // if filter is flex, 
    filter.style.display = 'none'; // hide it
  } else {
    filter.style.display = 'flex'; // if not flex, show it
  }
}

// Function to toggle the orientation display
function openOrientation() {
  if (or.style.display == 'flex') { // if orientation is flex,
    or.style.display = 'none'; // hide it
  } else {
    or.style.display = 'flex'; // if orientation is not flex, show it
  }
}

// Create an overlay div for enlarging images
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Function to enlarge an image container
function enlargeImageContainer(imageContainer) {
  // Styles to enlarge the image container and display the overlay

  // Set the position to fixed so that the image stays in a fixed position on the screen
  imageContainer.style.position = 'fixed';

  // Adjust the top position to 100px from the top of the viewport
  imageContainer.style.top = "100px";

  // Set the left and right positions to 0 to take up the full width of the viewport
  imageContainer.style.left = "0";
  imageContainer.style.right = "0";

  // Center the image horizontally by setting left and right margins to 'auto'
  imageContainer.style.marginLeft = 'auto';
  imageContainer.style.marginRight = 'auto';

  // Set the width to 60% and the height to 70% of the viewport
  imageContainer.style.width = '60%';
  imageContainer.style.height = '70%';

  // Set a high z-index value to ensure the image is displayed on top of other elements
  imageContainer.style.zIndex = '9999';

  // Change the cursor to default to indicate it's not clickable
  imageContainer.style.cursor = 'default';

  // Apply a smooth transition effect when transforming the image
  imageContainer.style.transition = 'transform 0.3s ease';

  // Display the overlay by changing its display property
  overlay.style.display = 'block';

  // Enlarge the image within the container by scaling it to 1.2 times its original size
  imageContainer.style.transform = 'scale(1.2)';

  // Get the aspect ratio of the image from a custom attribute
  const aspectRatio = parseFloat(imageContainer.getAttribute('data-aspect-ratio'));

  // Adjust container width and height based on the aspect ratio

  // If the aspect ratio is greater than 1, it's a landscape image
  if (aspectRatio > 1) {
    imageContainer.style.width = '60%'; // Keep the width at 60%
  } else {
    // If the aspect ratio is less than or equal to 1, it's a portrait image
    imageContainer.style.width = '30%'; // Set a narrower width for portrait
    imageContainer.style.height = '75%'; // Adjust the height for portrait
  }

  // Create and add a close button to the image container
  const closeButton = imageContainer.querySelector('.close-button');

  if (!closeButton) {
    // If there is no existing close button, create one

    // Create a button element
    const closeButton = document.createElement('button');

    // Add a class to the button for styling
    closeButton.classList.add('close-button');

    // Set the button's inner HTML to display an "X" symbol
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // Append the close button to the image container
    imageContainer.appendChild(closeButton);

    // Add a click event listener to the close button to handle closing the enlarged container
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the click event from bubbling up
      closeEnlargedContainer(imageContainer); // Call the closeEnlargedContainer function
    });
  }
}


// Function to close the enlarged image container
function closeEnlargedContainer(imageContainer) {
  overlay.style.display = 'none'; // Hide the overlay

  // Restore the original styles of the image container
  imageContainer.style.position = 'relative'; // Set the position to relative
  imageContainer.style.top = null; // Reset the top position
  imageContainer.style.left = null; // Reset the left position
  imageContainer.style.width = "300px"; // Set the width to 300px
  imageContainer.style.height = "300px"; // Set the height to 300px
  imageContainer.style.zIndex = null; // Reset the z-index
  imageContainer.style.transition = "transform 0.2s"; // Set the transition effect
  imageContainer.style.cursor = 'pointer'; // Set the cursor style to pointer
  imageContainer.style.transform = 'none'; // Reset the transformation

  // Remove the close button
  const closeButton = imageContainer.querySelector('.close-button'); // Find the close button within the image container
  if (closeButton) {
    imageContainer.removeChild(closeButton); // Remove the close button element
    closeButton.removeEventListener('click', () => {
      closeEnlargedContainer(container); // Remove the click event listener for the close button
    });
  }
}

// Initialize the shopping cart with data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve and parse the cart data from localStorage, or create an empty array if no data is found
const cartItemsContainer = document.getElementById("cartItems"); // Get the cart items container element
const cartDraw = document.getElementById('cartDrawer'); // Get the cart drawer element
const cartEmptyMessage = document.getElementById('cartEmptyMessage'); // Get the cart empty message element
const savedCart = localStorage.getItem('cart'); // Retrieve the cart data from localStorage

if (savedCart) {
  cart = JSON.parse(savedCart); // Parse the saved cart data if it exists
  updateCartDisplay(); // Update the display of the shopping cart
}

// Function to add an item to the cart
function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.title === item.title); // Check if the item is already in the cart

  if (existingItem) {
    // Item already exists in cart; increment quantity
    existingItem.quantity++; // Increase the quantity of the existing item
  } else {
    // Item is not in cart; add it with quantity 1
    item.quantity = 1; // Set the quantity of the new item to 1
    cart.push(item); // Add the new item to the cart
  }
  updateCartDisplay(); // Update the display of the shopping cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Store the updated cart data in localStorage
  // Open the cart when an item is added
  cartDraw.classList.add('open-cart'); // Add a class to open the cart drawer
}

// Function to remove an item from the cart
function removeFromCart(index) {
  localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart data in localStorage
  cart.splice(index, 1); // Remove the item at the specified index from the cart
  updateCartDisplay(); // Update the display of the shopping cart
}

// Function to update the cart display
function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount'); // Get the cart count element
  if (cartCount) {
    cartCount.textContent = cart.length; // Update the cart count with the current number of items in the cart
  }

  renderCart(); // Call the render cart Function
}


// Function to render the cart
function renderCart() {
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = ''; // Clear the cart items container

    if (cart.length === 0) {
      // Display a message when the cart is empty
      const emptyMessage = document.createElement('div');
      emptyMessage.textContent = 'Bag is empty.';
      cartEmptyMessage.innerHTML = ''; // Clear the cart empty message
      cartEmptyMessage.appendChild(emptyMessage); // Display the empty cart message
    } else {
      cartEmptyMessage.innerHTML = ''; // Clear the cart empty message

      let totalPrice = 0; // set current total price of cart items

      // Loop through each item in the cart
      cart.forEach((item, index) => {
        // Create HTML elements for each cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
              <div class="cart-details">
                <div class="cart-image-container">
                  <img src="${item.source}" alt="${item.title}" class="cart-item-image">
                </div>
                <div class="cart-item-details">
                  <div class="cart-title">${item.title}</div>
                  <div class="cart-price">${item.price}</div>
                  <div class="cart-quantity">
                    Qty:
                    <button class="decrement-quantity increments" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increment-quantity increments" data-index="${index}">+</button>
                  </div>
                  <button class="remove-from-cart" data-index="${index}">Remove</button>
                </div>
              </div>
              `;

        cartItemsContainer.appendChild(cartItem); // Add the cart item to the cart items container

        const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, '')); // Extract the numerical price from the item
        totalPrice += itemPrice * item.quantity; // Calculate the total price of all items in the cart
      });

      const totalContainer = document.createElement('div');
      const totalPriceElement = document.createElement('div');
      const Checkout = document.createElement('a');

      totalPriceElement.classList.add('cart-total');
      Checkout.classList.add('cart-checkout');
      totalContainer.classList.add('cart-total-container');

      Checkout.setAttribute('href', '#'); // Set the link for the "Checkout" button
      totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`; // Display the total price
      Checkout.innerHTML = "Checkout"; // Label the "Checkout" button

      Checkout.addEventListener('click', () => {
        alert('This feature is not currently available'); // Display an alert when the "Checkout" button is clicked
      })

      cartItemsContainer.appendChild(totalContainer); // Add the total container to the cart items container
      totalContainer.appendChild(totalPriceElement); // Add the total price element to the total container
      totalContainer.appendChild(Checkout); // Add the "Checkout" button to the total container

      // Add event listeners for quantity buttons
      const removeButtons = document.querySelectorAll('.remove-from-cart');
      removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index'); // Get the index of the item to be removed
          removeFromCart(index); // Call the removeFromCart function
        });
      });

      const incrementButtons = document.querySelectorAll('.increment-quantity');
      incrementButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index'); // Get the index of the item to increment
          incrementQuantity(index); // Call the incrementQuantity function
        });
      });

      const decrementButtons = document.querySelectorAll('.decrement-quantity');
      decrementButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index'); // Get the index of the item to decrement
          decrementQuantity(index); // Call the decrementQuantity function
        });
      });

      // Function to increment the quantity of an item in the cart
      function incrementQuantity(index) {
        cart[index].quantity++; // Increment the quantity of the selected item
        updateCartDisplay(); // Update the cart display
        localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart data in localStorage
      }

      // Function to decrement the quantity of an item in the cart
      function decrementQuantity(index) {
        if (cart[index].quantity > 1) {
          cart[index].quantity--; // Decrement the quantity of the selected item (if it's greater than 1)
          updateCartDisplay(); // Update the cart display
          localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart data in localStorage
        }
      }
    }
  }
}


// Cart Drawer Open/Close Function
const cartButton = document.getElementById('cartButton');
const cartClose = document.getElementById('cartClose');

if (cartButton) {
  // Open the cart when the cart button is clicked
  cartButton.addEventListener('click', () => { // when the cart button is clicked
    cartDraw.classList.add('open-cart'); // open cart
    updateCartDisplay(); // refresh cart display
  });
}

if (cartClose) {
  // Close the cart when the close button is clicked
  cartClose.addEventListener('click', () => { // when cart close is clicked
    cartDraw.classList.remove('open-cart'); // close cart
  });
}

