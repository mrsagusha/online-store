/* eslint-disable no-unused-vars */
import './css/style.css';
import products from './data/products.json';
import render from './scripts/renderCards';
import setSort from './scripts/setSort';
import changeSliderFiltersValues from './scripts/changeSliderFiltersValues';
import { setFilters, filters } from './scripts/setFilters';

const itemSection = document.querySelector('.main__main-section__items');
const search: HTMLInputElement = document.querySelector('.search-text');
const emptyMessageHTML = '<p class="empty-message">Извините, товар не найден...</p>';
const priceFilter: HTMLInputElement | null = document.querySelector('.filter-price__slider');
const priceFilterValue = document.querySelector('.filter-price__slider-min');
const yearFilter: HTMLInputElement | null = document.querySelector('.filter-year-of-release__slider');
const yearFilterValue = document.querySelector('.filter-year-of-release__slider-min');

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
});

search.addEventListener('input', (): void => {
  itemSection.innerHTML = '';
  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
  if (itemSection.innerHTML === '') itemSection.innerHTML = emptyMessageHTML;
});

setSort();
changeSliderFiltersValues();
setFilters();
