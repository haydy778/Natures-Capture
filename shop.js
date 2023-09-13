
import {images} from './data.js'

const productGrid = document.getElementById("shop");
images.map((image, index) => {
    addImageCard(image, index);
})


function addImageCard(image, index) {
    if (image.collection.includes("All")) {
    const product = document.createElement('div');
    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    const textContainer = document.createElement('div');
    const price = document.createElement('p');
    const addcart = document.createElement('button');

    addcart.classList.add('addcart');
    product.classList.add('product');
    imageContainer.classList.add('image-product-container');
    img.classList.add('image-product');
    textContainer.classList.add('text-price-orientation');
    price.classList.add('price');

    price.appendChild(document.createTextNode(image.price));

	product.id = index;
    img.src = image.source;
    // product.id = image.title;

    product.appendChild(addcart);
    imageContainer.appendChild(img);
    textContainer.appendChild(price);
    product.appendChild(imageContainer);
    product.appendChild(textContainer);

    productGrid.appendChild(product);
    }
}

