import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

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
    img.setAttribute('title', item.description); // Dodanie opisu jako tytułu obrazka

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });

  gallery.addEventListener('click', function (event) {
    event.preventDefault();
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, // Włączenie wyświetlania podpisów
    captionDelay: 250, // Ustawienie opóźnienia w wyświetlaniu podpisu
  });

  console.log(galleryItems);
});
