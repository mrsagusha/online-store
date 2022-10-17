/* eslint-disable no-unused-vars */
import './css/style.css';
import products from './data/products.json';
import render from './scripts/renderCards';
import setSort from './scripts/setSort';
import changeSliderFiltersValues from './scripts/changeSliderFiltersValues';
import { addRemoveItemCart, selectedItems } from './scripts/addRemoveItemCart';
import {
  setFilters, filters,
} from './scripts/setFilters';

const itemSection = document.querySelector('.main__main-section__items');
const search: HTMLInputElement = document.querySelector('.search-text');
const emptyMessageHTML = '<p class="empty-message">Извините, товар не найден...</p>';
const priceFilterNum = document.querySelector('.filter-price__slider-min');
const priceFilter: HTMLInputElement = document.querySelector('.filter-price__slider');
const yearFilterNum = document.querySelector('.filter-year-of-release__slider-min');
const yearFilter: HTMLInputElement = document.querySelector('.filter-year-of-release__slider-min');
const deleteSearchString = document.querySelector('.search-button-delete');

window.addEventListener('beforeunload', (): void => {
  if (itemSection.innerHTML !== emptyMessageHTML) {
    window.localStorage.setItem('search', search.value);
  } else {
    window.localStorage.setItem('search', '');
  }
  window.localStorage.setItem('filters', JSON.stringify(filters));
  window.localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
});

window.addEventListener('load', (): void => {
  if (window.localStorage.getItem('search')) {
    search.value = window.localStorage.getItem('search');
  }
  priceFilterNum.innerHTML = `${JSON.parse(window.localStorage.getItem('filters')).price} ₽`;
  priceFilter.value = JSON.parse(window.localStorage.getItem('filters')).price;
  yearFilterNum.innerHTML = `${JSON.parse(window.localStorage.getItem('filters')).year}`;
  yearFilter.value = JSON.parse(window.localStorage.getItem('filters')).year;
  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
  addRemoveItemCart();
});

search.addEventListener('input', (): void => {
  itemSection.innerHTML = '';
  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
});

deleteSearchString.addEventListener('click', () => {
  search.value = '';
  itemSection.innerHTML = '';
  render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
});

setSort();
changeSliderFiltersValues();
setFilters();
