import fetchMock from 'fetch-mock';
import { BASE_URL } from './constants';
import entitles from './entities.json';

fetchMock.mock(`${BASE_URL}/flats`, entitles);
// eslint-disable-next-line import/prefer-default-export
export const getFlats = () => fetch(`${BASE_URL}/flats`)
  .then((res) => res.json());
