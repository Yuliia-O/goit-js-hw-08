import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function doImgMarkup(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a>`,
    ''
  );
}

const imgMarkup = doImgMarkup(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', imgMarkup);

const lightbox = new SimpleLightbox('.gallery  a', {
  captionsData: 'alt',
  captionDelay: 250,
});
