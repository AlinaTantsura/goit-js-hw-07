import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}" 
    alt="${item.description}"
    ></a></li>`).join("");

gallery.insertAdjacentHTML('afterbegin', markup);
gallery.addEventListener("click", notDownload);
function notDownload(event) {
    event.preventDefault();
    let { target, currentTarget } = event;
    if(target === currentTarget){
        return;
    }
    console.log(target);
    // const instance = basicLightbox.create(`
    // <img src="${target.href}">`);
    // instance.show();
}


// const galleryBox = new SimpleLightbox('.galleryBox');