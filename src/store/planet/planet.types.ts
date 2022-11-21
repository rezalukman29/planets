export const SET_WISHLIST = 'SET_WISHLIST';

export interface SetWishlistI {
  type: typeof SET_WISHLIST;
  payload: any;
  isAdded: boolean;
}
