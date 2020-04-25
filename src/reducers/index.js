import {
  ADD_NEW_FILM,
  EDIT_FILM,
  DELETE_FILM,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_FILM: {
      const newFilm = action.payload;
      return [...state, newFilm];
    }
    case EDIT_FILM: {
      const film = action.payload;
      const { id } = action;
      return state.map(el => (el.id === id ? film : el));
    }
    case DELETE_FILM: {
      const { id } = action;
      return state.filter(film => film.id !== id);
    }
    default:
      return state;
  }
};
