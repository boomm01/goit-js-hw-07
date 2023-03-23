import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

function createGallaryMarcup({ preview, original, description }) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
}

const galeryCard = galleryItems.map((el) => createGallaryMarcup(el));

galeryEl.insertAdjacentHTML("beforeend", galeryCard.join(""));

galeryEl.addEventListener("click", onImageClick);



function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionsDelay: 250,
 });
   lightbox.open();
 


  galeryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      lightbox.close();
    }
  });
}





// function onImageClick(event) {
//    event.preventDefault();
 
//    if (event.target.nodeName !== "IMG") {
//      return;
//    }
 
//    const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionsDelay: 250,
//   });
//     lightbox.on('show.simplelightbox', function(){
//       lightbox.open();
//     });
  
 
 
//    galeryEl.addEventListener("keydown", (event) => {
//      if (event.code === "Escape") {
//       lightbox.on('close.simplelightbox', function(){
//          lightbox.close();
//        });
//      }
//    });
//  }
 