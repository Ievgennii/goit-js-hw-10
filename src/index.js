import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listCountrys = document.querySelector('ul');
const countryInfo = document.querySelector('div');

inputRef.addEventListener('input', debounce(onInputChange, 1300));

function onInputChange(e) {
  // console.log(e.target.value);
  if (inputRef.value.length > 0) {fetchCountries(e.target.value);
    console.log(inputRef.value)
    console.log(inputRef.value.length)}
    listCountrys.innerHTML = '';
}

function fetchCountries(name) {
  const get = `https://restcountries.com/v3.1/name/${name.trim()}?fields=name,capital,population,flags,languages`;
  fetch(get)
    .then(response => {
      // console.log(response.json());
      return response.json();
    })
    .then(countrys => {
      console.log(countrys);
      console.log(countrys.length);
      if (countrys.length > 10) {
        listCountrys.innerHTML = '';
        alert('Too many matches found. Please enter a more specific name.')
      } 
      else if (countrys.length > 2 && countrys.length <= 10) {
        listCountrys.innerHTML = '';
        for (const country of countrys) {        
          const countryCard = `<li><image src="${country.flags.svg}" alt="flag of${country.name.official}" width="40px">${country.name.official}</li>
          `
          listCountrys.insertAdjacentHTML('afterbegin', countryCard);
        } 
      }
      else if (countrys.length = 1){
        listCountrys.innerHTML = '';
        console.log('one country')
        for (const country of countrys) {        
          const countryCard = `<li><image src="${country.flags.svg}" alt="flag of${country.name.official}" width="40px">${country.name.official}</li>
          <li>capital: ${country.capital.join(', ')}</li>
          <li>population: ${country.population}</li>
          <li>languages: ${Object.values(country.languages).join(', ')}</li>`;
          listCountrys.insertAdjacentHTML('afterbegin', countryCard);
        }
      }
      

      
    })
    .catch(error => {
      console.log(error);
      listCountrys.innerHTML = ''
      alert('Oops, there is no country with that name')
    });
}

// const galleryEL = document.querySelector('.gallery');
// console.log(galleryEL);

// const GalleryItemEl = images
//   .map(
//     ({ url, alt }) => `<li><image src="${url} alt="${alt}" width="640px"></li>`
//   )
//   .join('');

// galleryEL.insertAdjacentHTML('afterbegin', GalleryItemEl);

// console.log(country.capital.join(', '));
//         console.log(country.name.official);
//         console.log(country.population);
//         console.log(Object.values(country.languages).join(', '));
//         console.log(country.flags.svg);

// let countryInfoEl = [
//   country.capital.join(', '),
//   country.name.official,
//   country.population,
//   Object.values(country.languages).join(', '),
//   country.flags.svg,
// ];