import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import API from './api-service';
import getRefs from './get-refs';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  if (refs.inputRef.value.length > 0) {
    API.fetchCountries(e.target.value).then(checkingCountrysLenght).catch(showError);
  }
  clearList();
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
    refs.listCountrys.insertAdjacentHTML('afterbegin', countryCard);
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
    refs.countryInfo.insertAdjacentHTML('afterbegin', countryCard);
  }
}

function clearList() {
  refs.listCountrys.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function showError(error) {
  console.log(error);
  clearList();
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
