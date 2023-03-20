import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector('.gallery');

function createGallaryMarcup (items){
    return items.map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`).join('');
}

const addGalleryMarkup = createGallaryMarcup(galleryItems);

galeryEl.insertAdjacentHTML('beforeend', addGalleryMarkup);
