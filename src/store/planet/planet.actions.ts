import GenericService from '../../service/generic';
import {SET_WISHLIST} from './planet.types';

export const setWishlist = (payload: any, isAdded: boolean) => {
  return {
    type: SET_WISHLIST,
    payload,
    isAdded,
  };
};

export async function getPlanets(page: number) {
  return new Promise((resolved, rejected) => {
    const service = new GenericService(`planets/?page=${page}`);
    service
      .get()
      .then(data => {
        setTimeout(() => {
          resolved(data.results);
        }, Math.random() * 500);
      })
      .catch((error: any) => rejected(error));
  });
}
