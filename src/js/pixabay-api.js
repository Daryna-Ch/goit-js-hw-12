import axios from 'axios';

const API_KEY = '47534092-804b13b479cbd901190151ed2';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const perPage = 15
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  const { data } = await axios.get(BASE_URL, { params });

  if (!data.hits.length) {
    throw new Error('No images found');
  }

  return data;
}