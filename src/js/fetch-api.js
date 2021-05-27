import '../sass/main.scss';
import renderCountriesList from './add-list';
import renderCountriesCards from './add-cards';
import getRefs from '../js/get-refs';
import fetchCountries from './fetchCountries';
import error from '../js/notification';

var debounce = require('lodash.debounce');

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  const form = e.target.value;

  if (form.length === 0) {
    refs.cardContainer.innerHTML = '';
  }

  fetchCountries(form)
    .then(data => {
      console.log(data.length);
      if (data.length > 1 && data.length < 10) {
        renderCountriesList(data);
      } else if (data.length === 1) {
        renderCountriesCards(data);
      }

      if (data.length > 10) {
        error({ title: 'Too many matches found. Please enter a more specific query!' });
      } else if (data.status === 404) {
        error({ title: 'There is no such country!' });
      }
    })
    .catch(onFetchError);
}

function onFetchError() {
  error({ title: 'There is no such country!' });
}
