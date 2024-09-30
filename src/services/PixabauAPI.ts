import axios from 'axios';

const KEY = '36810234-b5e1d7960ec1148affe35137c';

axios.defaults.baseURL = `https://pixabay.com/api`;

const config = `&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

async function getImages(q: string) {
  const response = await axios.get(`?q=${q}${config}`);
  const data = await response.data;
  const hits = await data.hits;

  return hits;
}

export default getImages;
