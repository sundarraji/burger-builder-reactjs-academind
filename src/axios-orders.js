import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-c9e0c.firebaseio.com/',
});

export default instance;