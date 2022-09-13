import './css/style.css';
import products from './data/products.json';
import render from './scripts/renderCards';

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

  render(products.products, search.value);
});

search.addEventListener('input', (): void => {
  itemSection.innerHTML = '';
  render(products.products, search.value);
  if (itemSection.innerHTML === '') itemSection.innerHTML = emptyMessageHTML;
});
