
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

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  imageContainer.appendChild(closeButton);

  closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    closeEnlargedContainer(imageContainer);
  });
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



