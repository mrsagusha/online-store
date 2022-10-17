import render from './renderCards';
import products from '../data/products.json';

const sortingButtonPriceUp = document.querySelector('.button-price-up');
const sortingButtonPriceDown = document.querySelector('.button-price-down');
const sortingButtonNameUp = document.querySelector('.button-name-up');
const sortingButtonNameDown = document.querySelector('.button-name-down');
const sortingButtonYearUp = document.querySelector('.button-year-up');
const sortingButtonYearDown = document.querySelector('.button-year-down');
const search: HTMLInputElement = document.querySelector('.search-text');
const itemSection = document.querySelector('.main__main-section__items');
let sort = '';

function setListenerToButton(btn: Element): void {
  btn.addEventListener('click', (): void => {
    if (btn === sortingButtonPriceUp) sort = 'Цена по возрастанию';
    else if (btn === sortingButtonPriceDown) sort = 'Цена по убыванию';
    else if (btn === sortingButtonYearUp) sort = 'Год по возрастанию';
    else if (btn === sortingButtonYearDown) sort = 'Год по убыванию';
    else if (btn === sortingButtonNameDown) sort = 'Название по возрастанию';
    else if (btn === sortingButtonNameUp) sort = 'Название по убыванию';

    itemSection.innerHTML = '';
    window.localStorage.setItem('sort', sort);
    render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
  });
}

function setSort(): void {
  setListenerToButton(sortingButtonPriceUp);
  setListenerToButton(sortingButtonPriceDown);
  setListenerToButton(sortingButtonYearUp);
  setListenerToButton(sortingButtonYearDown);
  setListenerToButton(sortingButtonNameDown);
  setListenerToButton(sortingButtonNameUp);
}

export default setSort;
