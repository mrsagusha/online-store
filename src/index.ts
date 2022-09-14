import './css/style.css';
import products from './data/products.json';
import render from './scripts/renderCards';
import setSort from './scripts/sorting';
import changeSliderFiltersValues from './scripts/changeSliderFiltersValues';
import setFilters from './scripts/filtering';

const itemSection = document.querySelector('.main__main-section__items');
const search: HTMLInputElement = document.querySelector('.search-text');
const emptyMessageHTML = '<p class="empty-message">Извините, товар не найден...</p>';

window.addEventListener('beforeunload', (): void => {
  if (itemSection.innerHTML !== emptyMessageHTML) {
    window.localStorage.setItem('search', search.value);
  } else {
    window.localStorage.setItem('search', '');
  }
});

window.addEventListener('load', (): void => {
  if (window.localStorage.getItem('search')) {
    search.value = window.localStorage.getItem('search');
  }

  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
});

search.addEventListener('input', (): void => {
  itemSection.innerHTML = '';
  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
  if (itemSection.innerHTML === '') itemSection.innerHTML = emptyMessageHTML;
});

setSort();
changeSliderFiltersValues();
setFilters();
