const BASE_URL = 'https://restcountries.com/v3.1'

function fetchCountries(name) {
  const get = `${BASE_URL}/name/${name.trim()}?fields=name,capital,population,flags,languages`;
  return fetch(get).then(returnJoin);
}

function returnJoin(response) {
  return response.json();
}

export default {fetchCountries}

// function fetchCountries(name) {
//   const get = `https://restcountries.com/v3.1/name/${name.trim()}?fields=name,capital,population,flags,languages`;
//   return fetch(get).then(returnJoin);
// }