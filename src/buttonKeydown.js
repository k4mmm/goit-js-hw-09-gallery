const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
import gallery from './gallery-items';

window.addEventListener('keydown', (e) => {
    let indexRef = gallery.findIndex(
        (galleryItem) => galleryItem.original === lightboxImage.src);
        
    if (e.key === "ArrowLeft") {
        indexRef === 0 ? indexRef = gallery.length - 1 : indexRef -= 1;
        lightboxImage.src = gallery[indexRef].original;
    }
    if (e.key === "ArrowRight") {
        indexRef === gallery.length - 1 ? indexRef = 0 : indexRef += 1;
        lightboxImage.src = gallery[indexRef].original;
    }
    if (e.key === "Escape") {
        lightboxRef.classList.remove('is-open');
        lightboxImage.src = "";
        lightboxImage.alt = ""
    };
})
