import axios from 'axios';

const KEY = '36810234-b5e1d7960ec1148affe35137c';

axios.defaults.baseURL = `https://pixabay.com/api`;

const config = `&key=${KEY}&image_type=photo&orientation=horizontal`;

async function getImages(q: string, page: number = 1, per_page: number) {
  const response = await axios.get(`?q=${q}&page=${page}&per_page=${per_page}${config}`);
  const data = await response.data;

  return data;
}

export default getImages;
