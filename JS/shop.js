import {images} from '../data.js' 

const productGrid = document.getElementById("shop");
images.map((image, index) => {
    addImageCard(image, index);
})


function addImageCard(image, index) {
    if (image.collection.includes('All')) {
        const product = document.createElement('div');
        const imageContainer = document.createElement('div');
        const textContainer = document.createElement('div');
        const name = document.createElement('h1');
        const price = document.createElement('p');
        const addcart = document.createElement('button');
        const addcartButton = document.createElement('button');

        addcart.classList.add('addcart');
        product.classList.add('product');
        imageContainer.classList.add('image-product-container');
        textContainer.classList.add('text-price-orientation');
        price.classList.add('price');
        name.classList.add('name')
        addcartButton.classList.add('addcart');

        price.appendChild(document.createTextNode(image.price));
        name.appendChild(document.createTextNode(image.title));
        addcartButton.appendChild(document.createTextNode("Add To Cart"));
        product.id = index;
        imageContainer.style.background = "url('" + image.source + "') no-repeat center scroll";
        // product.id = image.title;

        textContainer.appendChild(name);
        textContainer.appendChild(price);
        textContainer.appendChild(addcartButton);
        product.appendChild(imageContainer);
        product.appendChild(textContainer);
        productGrid.appendChild(product);

    }
}

