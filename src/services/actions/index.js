import { getFlats } from '../../utils/api';

export const GET_FLATS_SUCCESS = 'GET_FLATS_SUCCESS';
export const GET_FLATS_REQUEST = 'GET_FLATS_REQUEST';
export const GET_FLATS_FAILED = 'GET_FLATS_FAILED';
export const LIKE_FLAT = 'LIKE_FLAT';
export const DISLIKE_FLAT = 'DISLIKE_FLAT';

export const fetchFlats = () => (dispatch) => {
  dispatch({ type: GET_FLATS_REQUEST });
  getFlats()
    .then((res) => {
      if (res.response) {
        dispatch({
          type: GET_FLATS_SUCCESS,
          payload: res.response,
        });
      } else {
        dispatch({
          type: GET_FLATS_FAILED,
        });
        throw new Error('Error in response');
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_FLATS_FAILED,
      // eslint-disable-next-line no-console
      }); console.log(err);
    });
};

export const likeFlat = (id) => ({
  type: LIKE_FLAT,
  payload: { id },
});

export const dislikeFlat = (id) => ({
  type: DISLIKE_FLAT,
  payload: { id },
});
