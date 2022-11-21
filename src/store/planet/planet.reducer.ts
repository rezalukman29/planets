import {SetWishlistI, SET_WISHLIST} from './planet.types';

export interface PlanetStateI {
  wishlist: any;
}
const PlanetState: PlanetStateI = {
  wishlist: [],
};

type PlanetAction = SetWishlistI;

const planetReducer = (state = PlanetState, action: PlanetAction) => {
  switch (action.type) {
    case SET_WISHLIST:
        if (action.isAdded) {
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
              };
        
        } else {
            return {
                ...state,
                wishlist: state.wishlist.filter((item: any) => item.name !== action.payload.name),
              };
        }

    default:
      return state;
  }
};

export default planetReducer;
