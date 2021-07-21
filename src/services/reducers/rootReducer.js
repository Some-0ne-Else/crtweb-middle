/* eslint-disable no-param-reassign */
import {
  GET_FLATS_SUCCESS,
  GET_FLATS_REQUEST,
  GET_FLATS_FAILED,
  LIKE_FLAT,
  DISLIKE_FLAT,
} from '../actions';

const initialState = {
  flats: [],
  flatsRequest: false,
  flatsFailed: false,
  flatsSuccess: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLATS_REQUEST: {
      return { ...state, flatsRequest: true };
    }
    case GET_FLATS_SUCCESS: {
      // adding field likes. in real project it should be an array of user id who liked an entitle
      const flatsWithLikes = action.payload.map((el) => { el.liked = false; return el; });
      return {
        ...state,
        flats: flatsWithLikes,
        flatsRequest: false,
        flatsSuccess: true,
      };
    }
    case GET_FLATS_FAILED: {
      return {
        ...state,
        flatsRequest: false,
        flatsFailed: true,
      };
    }
    case LIKE_FLAT: {
      return {
        ...state,
        flats:
        state.flats.map((el) => {
          if (el.id === action.payload.id) { el.liked = true; }
          return el;
        }),
      };
    }
    case DISLIKE_FLAT: {
      return {
        ...state,
        flats:
        state.flats.map((el) => {
          if (el.id === action.payload.id) { el.liked = false; }
          return el;
        }),
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
