class Header extends HTMLElement {
  constructor() {
    super();
  }

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
                            <a class="dropdown-item" href="Blank.html">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="Blank.html">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li> -->
            </ul>
          </div>
          <div class="logotext">
            <li class="navbar-item logoimage">
              <a class="navbar-item" href="index.html"><img class="logo-big" style="width: 400px" src="Logo Text.svg" /><img class="logo-small" src="Logo.svg"></a>
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
                  <a class="dropdown-item" href="New.html"> New </a>
                </li>
                <li>
                  <a class="dropdown-item" href="LE.html">
                    Limited Edition
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="LI.html">
                    Landscape Images
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Favourites.html"> Favourites </a>
                </li>
                <li>
                  <a class="dropdown-item" href="BW.html">
                    Black and White
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Flowers.html"> Flowers </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Dogs.html"> Dogs </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Cats.html"> Cats </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Wildlife.html"> Wildlife </a>
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


var navbar = document.getElementById("headerTwo");
var filter = document.getElementById("fil")
var or = document.getElementById("or")



window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";

  } else {
    navbar.style.position = "relative";
    navbar.style.top = "0px";
  }
}


function openFilter() {
  if (filter.style.display == 'flex') {
    filter.style.display = 'none';
  }
  else {
    filter.style.display = 'flex';
  }
}

function openOrientation() {
  if (or.style.display == 'flex') {
    or.style.display = 'none';
  }
  else {
    or.style.display = 'flex';
  }
}

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);


function enlargeImageContainer(imageContainer) {
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

  imageContainer.style.transform = 'scale(1.2)';

  const closeButton = imageContainer.querySelector('.close-button');

  if (!closeButton) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    imageContainer.appendChild(closeButton);

    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      closeEnlargedContainer(imageContainer);
    });
  }
}

function closeEnlargedContainer(imageContainer) {
  overlay.style.display = 'none';

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



const productGrid = document.getElementById("shop");
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart data from localStorage
const cartItemsContainer = document.getElementById("cartItems");
const cartDraw = document.getElementById('cartDrawer');
const cartEmptyMessage = document.getElementById('cartEmptyMessage'); // Added
// Load cart data from localStorage when the page loads
const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
  updateCartDisplay();
}


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

function removeFromCart(index) {
  localStorage.setItem('cart', JSON.stringify(cart));
  cart.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  renderCart();
}

function renderCart() {
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.textContent = 'Cart is empty.';
      cartEmptyMessage.innerHTML = '';
      cartEmptyMessage.appendChild(emptyMessage);
    } else {
      cartEmptyMessage.innerHTML = '';

      let totalPrice = 0;

      cart.forEach((item, index) => {
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

      const totalPriceElement = document.createElement('div');
      totalPriceElement.classList.add('cart-total');
      totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
      cartItemsContainer.appendChild(totalPriceElement);

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

      function incrementQuantity(index) {
        cart[index].quantity++;
        updateCartDisplay();
        localStorage.setItem('cart', JSON.stringify(cart));
      }

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
  cartButton.addEventListener('click', () => {
    cartDraw.classList.add('open-cart');
    updateCartDisplay();
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cartDraw.classList.remove('open-cart');
  });
}






