// Define a custom HTML element called 'header-component'
class Header extends HTMLElement {
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
            <ul class="contactbtn">
              <li class="contact">
                <a class="navbar-item" href="contact.html">
                  <!-- <i class="fa-brands fa-pinterest"></i> -->Contact Me
                </a>
              </li>
              <!-- <li>
                            <a class="dropdown-item" data-category="" href="tml">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" data-category="" href="tml">
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
              <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
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

customElements.define('header-component', Header);


// Get references to HTML elements
var navbar = document.getElementById("headerTwo");
var filter = document.getElementById("fil");
var or = document.getElementById("or");

// Add scroll event listener to window
window.onscroll = function () {
  scrollFunction();
};

// Function to handle scrolling
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    // If the page is scrolled down more than 120 pixels, fix the navbar at the top
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  } else {
    // If not, make the navbar relative again
    navbar.style.position = "relative";
    navbar.style.top = "0px";
  }
}

// Function to toggle the filter display
function openFilter() {
  if (filter.style.display == 'flex') {
    filter.style.display = 'none';
  } else {
    filter.style.display = 'flex';
  }
}

// Function to toggle the orientation display
function openOrientation() {
  if (or.style.display == 'flex') {
    or.style.display = 'none';
  } else {
    or.style.display = 'flex';
  }
}

// Create an overlay div for enlarging images
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Function to enlarge an image container
function enlargeImageContainer(imageContainer) {
  // Styles to enlarge the image container and display the overlay
  imageContainer.style.position = 'fixed';
  imageContainer.style.top = "100px";
  imageContainer.style.left = "0";
  imageContainer.style.right = "0";
  imageContainer.style.marginLeft = 'auto';
  imageContainer.style.marginRight = 'auto';
  imageContainer.style.width = '70%';
  imageContainer.style.height = '70%';
  imageContainer.style.zIndex = '9999';
  imageContainer.style.cursor = 'default';
  imageContainer.style.transition = 'transform 0.3s ease';

  overlay.style.display = 'block';

  // Enlarge the image within the container
  imageContainer.style.transform = 'scale(1.2)';

  // Create and add a close button to the image container
  const closeButton = imageContainer.querySelector('.close-button');

  if (!closeButton) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    imageContainer.appendChild(closeButton);

    // Add click event listener to close the enlarged container
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      closeEnlargedContainer(imageContainer);
    });
  }
}

// Function to close the enlarged image container
function closeEnlargedContainer(imageContainer) {
  overlay.style.display = 'none';

  // Restore the original styles of the image container
  imageContainer.style.position = 'relative';
  imageContainer.style.top = null;
  imageContainer.style.left = null;
  imageContainer.style.width = "300px";
  imageContainer.style.height = "300px";
  imageContainer.style.zIndex = null;
  imageContainer.style.transition = "transform 0.2s";
  imageContainer.style.cursor = 'pointer';
  imageContainer.style.transform = 'none';

  // Remove the close button
  const closeButton = imageContainer.querySelector('.close-button');
  if (closeButton) {
    imageContainer.removeChild(closeButton);
    closeButton.removeEventListener('click', () => {
      closeEnlargedContainer(container);
    });
  }
}

// Initialize the shopping cart with data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById("cartItems");
const cartDraw = document.getElementById('cartDrawer');
const cartEmptyMessage = document.getElementById('cartEmptyMessage');
const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
  updateCartDisplay();
}

// Function to add an item to the cart
function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.title === item.title);

  if (existingItem) {
    // Item already exists in cart; increment quantity
    existingItem.quantity++;
  } else {
    // Item is not in cart; add it with quantity 1
    item.quantity = 1;
    cart.push(item);
  }
  updateCartDisplay();
  localStorage.setItem('cart', JSON.stringify(cart));
  // Open the cart when an item is added
  cartDraw.classList.add('open-cart');
}

// Function to remove an item from the cart
function removeFromCart(index) {
  localStorage.setItem('cart', JSON.stringify(cart));
  cart.splice(index, 1);
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  renderCart();
}

// Function to render the cart
function renderCart() {
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      // Display a message when the cart is empty
      const emptyMessage = document.createElement('div');
      emptyMessage.textContent = 'Bag is empty.';
      cartEmptyMessage.innerHTML = '';
      cartEmptyMessage.appendChild(emptyMessage);
    } else {
      cartEmptyMessage.innerHTML = '';

      let totalPrice = 0;

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

        cartItemsContainer.appendChild(cartItem);

        const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
        totalPrice += itemPrice * item.quantity;
      });

      const totalContainer = document.createElement('div');
      const totalPriceElement = document.createElement('div');
      const Checkout = document.createElement('a');

      totalPriceElement.classList.add('cart-total');
      Checkout.classList.add('cart-checkout');
      totalContainer.classList.add('cart-total-container');

      Checkout.setAttribute('href', 'checkout.html');
      totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
      Checkout.innerHTML = "Checkout";

      cartItemsContainer.appendChild(totalContainer);
      totalContainer.appendChild(totalPriceElement);
      totalContainer.appendChild(Checkout);

      // Add event listeners for quantity buttons
      const removeButtons = document.querySelectorAll('.remove-from-cart');
      removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          removeFromCart(index);
        });
      });

      const incrementButtons = document.querySelectorAll('.increment-quantity');
      incrementButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          incrementQuantity(index);
        });
      });

      const decrementButtons = document.querySelectorAll('.decrement-quantity');
      decrementButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          decrementQuantity(index);
        });
      });

      // Function to increment the quantity of an item in the cart
      function incrementQuantity(index) {
        cart[index].quantity++;
        updateCartDisplay();
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      // Function to decrement the quantity of an item in the cart
      function decrementQuantity(index) {
        if (cart[index].quantity > 1) {
          cart[index].quantity--;
          updateCartDisplay();
          localStorage.setItem('cart', JSON.stringify(cart));
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
  cartButton.addEventListener('click', () => {
    cartDraw.classList.add('open-cart');
    updateCartDisplay();
  });
}

if (cartClose) {
  // Close the cart when the close button is clicked
  cartClose.addEventListener('click', () => {
    cartDraw.classList.remove('open-cart');
  });
}