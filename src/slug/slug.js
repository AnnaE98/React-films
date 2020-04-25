import slug from 'slug';

const getSlug = (film, name, films) => {
  let filmSlug;
  if (film && film.name === name) {
    filmSlug = film.slug;
  } else {
    filmSlug = slug(name).toLowerCase();
    const slugRexEx = new RegExp(`^(${filmSlug})((-[0-9]*$)?)$`, 'i');
    const filmsWithSlug = films.filter(el => el.slug.match(slugRexEx));
    if (filmsWithSlug.length) {
      filmSlug = `${filmSlug}-${filmsWithSlug.length + 1}`;
    }
  }
  return filmSlug;
};

export default getSlug;
