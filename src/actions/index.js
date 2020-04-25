import {
  ADD_NEW_FILM,
  EDIT_FILM,
  DELETE_FILM,
} from './types';

export const addNewFilm = (film) => {
  const action = {
    type: ADD_NEW_FILM,
    payload: film,
  };
  return action;
};

export const editFilm = (id, film) => {
  const action = {
    type: EDIT_FILM,
    payload: film,
    id,
  };
  return action;
};

export const deleteFilm = (id) => {
  const action = {
    type: DELETE_FILM,
    id,
  };
  return action;
};
