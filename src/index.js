import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listCountrys = document.querySelector('ul');
const countryInfo = document.querySelector('div');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  if (inputRef.value.length > 0) {
    fetchCountries(e.target.value).then(checkingCountrysLenght).catch(showError);
  }
  clearList();
}

function fetchCountries(name) {
  const get = `https://restcountries.com/v3.1/name/${name.trim()}?fields=name,capital,population,flags,languages`;
  return fetch(get).then(returnJoin);
}

function returnJoin(response) {
  return response.json();
}

function checkingCountrysLenght(countrys) {
  if (countrys.length > 10) {
    reportInfo();
  } else if (countrys.length > 2 && countrys.length <= 10) {
    createCountryList(countrys);
  } else if ((countrys.length = 1)) {
    createCountryInfo(countrys);
  }
}

function reportInfo() {
  clearList();
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function createCountryList(countrys) {
  clearList();
  for (const country of countrys) {
    const countryCard = `<li><img src="${country.flags.svg}" 
    alt="flag of${country.name.official}"width="40px" >
    <p>${country.name.official}</p></li>`;
    listCountrys.insertAdjacentHTML('afterbegin', countryCard);
  }
}

function createCountryInfo(countrys) {
  clearList();
  for (const country of countrys) {
    const countryCard = `<div><img src="${country.flags.svg}" alt="flag of${
      country.name.official
    }" width="40px"><p>${country.name.official}</p></div>
    <ul>
    <li>capital: <span>${country.capital.join(', ')}</span> </li>
    <li>population: <span>${country.population}</span> </li>
    <li>languages: <span>${Object.values(country.languages).join(
      ', '
    )}</span> </li>
    </ul>`;
    countryInfo.insertAdjacentHTML('afterbegin', countryCard);
  }
}

function clearList() {
  listCountrys.innerHTML = '';
  countryInfo.innerHTML = '';
}

function showError(error) {
  console.log(error);
  clearList();
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
