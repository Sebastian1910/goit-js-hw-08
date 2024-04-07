import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

// Funkcja do dodawania elementów galerii
function addGalleryItems() {
  galleryItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.setAttribute('href', item.original);

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.setAttribute('src', item.preview);
    img.setAttribute('alt', item.description);
    img.setAttribute('data-source', item.original);

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });
}

// Dodanie elementów galerii po załadowaniu zawartości DOM
document.addEventListener('DOMContentLoaded', function () {
  addGalleryItems();
});

// Obsługa kliknięcia na obrazek
gallery.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const src = event.target.dataset.source;
    const alt = event.target.getAttribute('alt');

    const instance = basicLightbox.create(`
      <img src="${src}">
    `);

    instance.show();

    console.log('Image source:', src);
    console.log('Image alt:', alt);
  }
});

console.log(galleryItems);
