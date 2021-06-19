const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

galleryRef.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.classList.value === 'gallery__image') {
        lightboxRef.classList.add('is-open');
        lightboxImage.src = e.target.dataset.source;
        lightboxImage.alt = e.target.alt;
    }
});

lightboxRef.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    if (e.target.dataset.action === 'close-lightbox' || e.target.className === 'lightbox__overlay') {
        lightboxRef.classList.remove('is-open');
        lightboxImage.src = "";
        lightboxImage.alt = "";
    };
});