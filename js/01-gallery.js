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
    let { target, currentTarget } = event;
    if(target === currentTarget){
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${target.dataset.source}">`);

    instance.show(); 
    document.addEventListener('keydown', closeModal);
    function closeModal(event){
        if (event.key === "Escape"){
            instance.close();
            document.removeEventListener('keydown', closeModal);
        }
    }
}
