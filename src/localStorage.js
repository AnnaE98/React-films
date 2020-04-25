import sampleFilms from './films';

export const loadState = () => {
  try {
    const state = localStorage.getItem('films');
    if (state === null) {
      return sampleFilms;
      
    }
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem('films', JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};
