import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}" 
    data-source="${item.original}"
    alt="${item.description}"
    ></a></li>`).join("");

gallery.insertAdjacentHTML('afterbegin', markup);


gallery.addEventListener('click', selectImage);
function selectImage(event) {
    event.preventDefault();

    if(event.target === event.currentTarget){   
            return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
   
    // if(instance.show()){
    //     document.addEventListener('keydown', instance.close());
    // }
    // instance.close();      
    
    instance.show();
}