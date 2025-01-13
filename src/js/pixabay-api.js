const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47526493-0201b9f5d9dd403f56de0598a';

export function serviceImages(question) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: question,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json(); //promis
  });
}
