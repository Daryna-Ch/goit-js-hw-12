import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const loadMoreButton = document.createElement('button');
let lightbox = new SimpleLightbox('.gallery a');

let query = '';
let page = 1;
const perPage = 15;
let totalHits = 0;

loadMoreButton.textContent = 'Load more';
loadMoreButton.classList.add('hidden');
gallery.parentNode.appendChild(loadMoreButton);

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  query = searchInput.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  toggleLoader(true);
  loadMoreButton.classList.add('hidden');

  try {
    const data = await fetchImages(query, page, perPage);
    totalHits = data.totalHits;

    renderImages(data.hits);

    if (page * perPage < totalHits) {
      loadMoreButton.classList.remove('hidden');
    } else {
      showEndOfCollectionMessage();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    toggleLoader(false);
  }
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  toggleLoader(true);

  try {
    const data = await fetchImages(query, page, perPage);

    renderImages(data.hits);
    lightbox.refresh();

    if (page * perPage >= totalHits) {
      loadMoreButton.classList.add('hidden');
      showEndOfCollectionMessage();
    } else {
      smoothScroll();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.classList.toggle('hidden', !show);
}

function showEndOfCollectionMessage() {
  iziToast.info({ title: 'Info', message: "We're sorry, but you've reached the end of search results." });
}

function smoothScroll() {
  const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}
