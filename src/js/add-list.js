import countryListTpl from '../templates/markup-li.hbs';
import getRefs from '../js/get-refs';
const refs = getRefs();

function renderCountriesList(country) {
  const markup = countryListTpl(country);
  refs.cardContainer.innerHTML = markup;
}

export default renderCountriesList;
