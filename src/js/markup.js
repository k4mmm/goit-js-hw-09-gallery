import gallery from './gallery-items'
const galleryRef = document.querySelector('.js-gallery');

function insertMurkup(gallery) {
    const arr = gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=""
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
    galleryRef.innerHTML = arr;
};

insertMurkup(gallery)
