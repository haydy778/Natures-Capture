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

        imageContainer.addEventListener('click', () => {
            enlargeImageContainer(imageContainer);
        });
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

  if(!closeButton){
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
