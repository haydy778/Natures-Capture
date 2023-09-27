// Import the 'images' array from a 'data.js' file
import { images } from "./data.js";

// Get references to various DOM elements
const productGrid = document.getElementById("shop");
var filter = document.getElementById("fil");
var or = document.getElementById("or");

// Get references to filter buttons, search bar
const filterButtons = document.querySelectorAll(".dropdown-item");
const searchBar = document.getElementById("search");

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the selected category from the button's text content
    const selectedCategory = button.textContent.trim();
    // Get the search term from the search bar
    const searchTerm = searchBar.value.toLowerCase().trim();
    // Call the filterItems function to filter and display images
    filterItems(selectedCategory, searchTerm);
    // Hide filter and or elements (possibly dropdowns)
    or.style.display = "none";
    filter.style.display = "none";
  });
});

// Add event listener to the search bar for filtering on input
searchBar.addEventListener("input", () => {
  // Get the search term from the input field
  const searchTerm = searchBar.value.toLowerCase().trim();
  console.log("Search Term:", searchTerm);
  // Get the selected category from the active filter button
  const selectedCategoryElement = document.querySelector(".dropdown-item.active");
  const selectedCategory = selectedCategoryElement
    ? selectedCategoryElement.textContent.trim()
    : "All";
  // Call the filterItems function to filter and display images
  filterItems(selectedCategory, searchTerm);
});

// Function to filter the images based on selected category and search term
function filterItems(selectedCategory, searchTerm) {
  const filteredImages = images.filter((image) => {
    return (
      // Check if the image title contains the search term and matches the selected category
      (searchTerm === "" || image.title.toLowerCase().includes(searchTerm)) &&
      (selectedCategory === "All" ||
        image.collection.includes(selectedCategory) ||
        (selectedCategory === "Landscape" &&
          image.orientation === "Landscape") ||
        (selectedCategory === "Portrait" && image.orientation === "Portrait"))
    );
  });
  // Call the displayImages function to display the filtered images
  displayImages(filteredImages);
}

// Function to display the filtered images
function displayImages(filteredImages) {
  productGrid.innerHTML = ""; // Clear the product grid

  filteredImages.forEach((image) => {
    // Create DOM elements for each image
    const product = document.createElement("div");
    const imageContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const name = document.createElement("h1");
    const price = document.createElement("p");
    const addcartButton = document.createElement("button");

    // Add CSS classes to the created elements
    addcartButton.classList.add("addcart");
    product.classList.add("product");
    imageContainer.classList.add("image-product-container");
    textContainer.classList.add("text-price-orientation");
    price.classList.add("price");
    name.classList.add("name");

    // Set text content and image source
    price.appendChild(document.createTextNode(image.price));
    name.appendChild(document.createTextNode(image.title));
    addcartButton.appendChild(document.createTextNode("Add To Cart"));

    // Set the background image of the image container
    imageContainer.style.background = "url('" + image.source + "') no-repeat center scroll";

    // Append elements to the product grid
    textContainer.appendChild(name);
    textContainer.appendChild(price);
    textContainer.appendChild(addcartButton);
    product.appendChild(imageContainer);
    product.appendChild(textContainer);
    productGrid.appendChild(product);

    // Add event listeners for adding to cart and enlarging images
    addcartButton.addEventListener("click", () => {
      addToCart(image);
    });

    imageContainer.addEventListener("click", () => {
      enlargeImageContainer(imageContainer);
    });
  });
}

// Initially, show all images by calling filterItems with "All" category and empty search term
filterItems("All", "");
