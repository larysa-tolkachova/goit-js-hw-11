import iziToast from 'izitoast'; // Описаний у документації
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів
import SimpleLightbox from 'simplelightbox'; // Описаний в документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

import { serviceImages } from './js/pixabay-api';
import { creatGallery } from './js/render-functions';

const form = document.querySelector('.group-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

// для ініціалізації модального вікна
const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
// ==============================================

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  let question = event.target.elements.query.value.trim(); // input world

  gallery.innerHTML = ' ';

  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'inline-block';

  serviceImages(question) //promise
    .then(data => {
      console.log(data);
      console.log(data.hits.length);
      console.log(data.hits);

      if (data.hits.length === 0) {
        iziToast.show({
          title: '',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topCenter',
        });
      }

      gallery.insertAdjacentHTML('beforeend', creatGallery(data.hits));
      galleryModal.refresh();
      loader.style.display = 'none';
    })

    .catch(error => {
      console.log(error.message);
    })
    .finally(() => event.target.reset());
}
