const BASE_URL = 'https://restcountries.com/v3.1/name/';


function fetchCountries(searchQuery) {
  const url = `${BASE_URL}${searchQuery}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

export default fetchCountries;
