import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

function createGallaryMarcup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
    )
    .join("");
}

const addGalleryMarkup = createGallaryMarcup(galleryItems);

galeryEl.insertAdjacentHTML("beforeend", addGalleryMarkup);

galeryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width = '800' heigth = '600'/>`
  );
  instance.show();

  galeryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  }, {once: true});
}
