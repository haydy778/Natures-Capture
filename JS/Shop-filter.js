import { images } from './data.js';
const productGrid = document.getElementById("shop");
var filter = document.getElementById("fil")
var or = document.getElementById("or")

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.dropdown-item');
  const searchBar = document.getElementById('search');


  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.textContent.trim();
      filterItems(selectedCategory);
      or.style.display = 'none';
      filter.style.display = 'none';
    })
  })


  searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase().trim();
    console.log('Search Term:', searchTerm);
    const selectedCategoryElement = document.querySelector('.dropdown-item.active');
    const selectedCategory = selectedCategoryElement ? selectedCategoryElement.textContent.trim() : "All";
    filterItems(selectedCategory, searchTerm);
  });

  function filterItems(category, searchTerm) {

    const filteredImages = images.filter((image) => {
      return (
        (searchTerm === '' || image.title.toLowerCase().includes(searchTerm)) &&
        (category === "All" || 
        image.collection.includes(category) ||
        (category === "Landscape" && image.orientation === "Landscape") ||
        (category === "Portrait" && image.orientation === "Portrait"))
        )
    });
    displayImages(filteredImages);
  }

  function displayImages(filteredImages) {
    productGrid.innerHTML = "";

    filteredImages.forEach((image) => {
      const product = document.createElement('div');
      const imageContainer = document.createElement('div');
      const textContainer = document.createElement('div');
      const name = document.createElement('h1');
      const price = document.createElement('p');
      const addcartButton = document.createElement('button');

      addcartButton.classList.add('addcart');
      product.classList.add('product');
      imageContainer.classList.add('image-product-container');
      textContainer.classList.add('text-price-orientation');
      price.classList.add('price');
      name.classList.add('name');

      price.appendChild(document.createTextNode(image.price));
      name.appendChild(document.createTextNode(image.title));
      addcartButton.appendChild(document.createTextNode("Add To Cart"));

      product.id = image.id;
      imageContainer.style.background = "url('" + image.source + "') no-repeat center scroll";

      textContainer.appendChild(name);
      textContainer.appendChild(price);
      textContainer.appendChild(addcartButton);
      product.appendChild(imageContainer);
      product.appendChild(textContainer);
      productGrid.appendChild(product);


      addcartButton.addEventListener('click', () => {
        addToCart(image);
      });

      imageContainer.addEventListener('click', () => {
        enlargeImageContainer(imageContainer);
      });
    });
  }

  // Initially, show all images
  filterItems("All", "");
});