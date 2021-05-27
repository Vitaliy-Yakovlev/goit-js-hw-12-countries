import countrieCardTpl from '../templates/markup-pages.hbs';
import getRefs from '../js/get-refs';
const refs = getRefs();

function renderCountriesCards(country) {
  const markup = countrieCardTpl(country);
  refs.cardContainer.innerHTML = markup;
}

export default renderCountriesCards;
