import iziToast from 'izitoast'; // Описаний у документації
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів
import SimpleLightbox from 'simplelightbox'; // Описаний в документації
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів

import { serviceImages } from './js/pixabay-api';
import { creatGallery } from './js/render-functions';

const form = document.querySelector('.group-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  let question = event.target.elements.query.value.trim(); // input world
  console.log(event.target.elements);
  console.log(question);
  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      title: '',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

  //   loader.style.display = 'inline-block';

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
          position: 'topRight',
        });
      }

      gallery.insertAdjacentHTML('beforeend', creatGallery(data.hits));
      question = '';
      // galleryModal.refresh();
      // loader.style.display = 'none';
    })

    .catch(error => {
      console.log(error.message);
    });
}

//     .finally(() => event.target.reset());

// для ініціалізації модального вікна
const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// return arr.map((webformatURL, largeImageURL, tags, likes, views, comments, downloads ))

//=============================================================================

// import { imagesSearch } from './js/pixabay-api';
// import { renderImages } from './js/render-functions';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// import errorImage from './img/error.png';

// const form = document.querySelector('.form');
// const gallery = document.querySelector('.gallery');
// const loader = document.querySelector('.loader');

// form.addEventListener('submit', handleSearch);

// function handleSearch(event) {
//   event.preventDefault();
//   gallery.innerHTML = '';
//   let inputElement = event.target.elements.name;
//   const inputSearch = inputElement.value.trim();
//   if (!inputSearch) {
//     iziToast.show({
//       title: '',
//       iconUrl: `${errorImage}`,
//       backgroundColor: 'red',
//       messageColor: 'white',
//       message: `Enter the data for the search!`,
//       position: 'topRight',
//     });
//     return;
//   }

//   loader.style.display = 'inline-block';

//   imagesSearch(inputSearch)
//     .then(arrImg => {
//       if (arrImg.length === 0) {
//         iziToast.show({
//           title: '',
//           iconUrl: `${errorImage}`,
//           backgroundColor: 'red',
//           messageColor: 'white',
//           message: `Sorry, there are no images matching your search query. Please try again!`,
//           position: 'topRight',
//         });
//       }
//       gallery.insertAdjacentHTML('beforeend', renderImages(arrImg));
//       lightbox.refresh();
//       inputElement.value = '';
//       loader.style.display = 'none';
//     })
//     .catch(error => console.log(error));
// }
