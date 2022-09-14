/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */

import { IFilters } from '../interfaces/interfaces';
import render from './renderCards';
import products from '../data/products.json';

const itemSection = document.querySelector('.main__main-section__items');
const search: HTMLInputElement = document.querySelector('.search-text');
const priceFilter: HTMLInputElement | null = document.querySelector('.filter-price__slider');
const yearFilter: HTMLInputElement | null = document.querySelector('.filter-year-of-release__slider');
const genderFilters = document.querySelectorAll('.gender-checkbox');
const materialFilter = document.querySelectorAll('.material-checkbox');
const brandFilters = document.querySelectorAll('.brand-checkbox');
const colorFilters = document.querySelectorAll('.filter-color__checkbox');

const filters: IFilters = {
  price: 0,
  year: 2015,
  brand: [],
  color: [],
  gender: [],
  material: [],
};

const {
  price, year, brand, color, gender, material,
} = filters;

function setListenerToButtonFilter(listOfButtons: NodeListOf<Element>, filter: string []) {
  listOfButtons.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filter.includes(el.nextElementSibling.innerHTML.toLowerCase())) {
        filter.push(el.nextElementSibling.innerHTML.toLowerCase());
      } else {
        if (filter === gender) {
          filters.gender = filter.filter((elem: string) => {
            return elem !== el.nextElementSibling.innerHTML.toLowerCase();
          });
        } else if (filter === material) {
          filters.material = filter.filter((elem: string) => {
            return elem !== el.nextElementSibling.innerHTML.toLowerCase();
          });
        } else if (filter === brand) {
          filters.material = filter.filter((elem: string) => {
            return elem !== el.nextElementSibling.innerHTML.toLowerCase();
          });
        }
      }
      window.localStorage.setItem('filters', JSON.stringify(filters));
      itemSection.innerHTML = '';
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
    });
  });
}

function setFilters(): void {
  if (priceFilter) {
    priceFilter.addEventListener('input', (): void => {
      filters.price = +priceFilter.value;
      window.localStorage.setItem('filters', JSON.stringify(filters));
      itemSection.innerHTML = '';
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
    });
  }
  if (yearFilter) {
    yearFilter.addEventListener('input', (): void => {
      filters.year = +yearFilter.value;
      window.localStorage.setItem('filters', JSON.stringify(filters));
      itemSection.innerHTML = '';
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
    });
  }

  setListenerToButtonFilter(genderFilters, gender);
  setListenerToButtonFilter(materialFilter, material);
  setListenerToButtonFilter(brandFilters, brand);

  colorFilters.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filters.color.includes(el.previousElementSibling.innerHTML.toLowerCase())) {
        filters.color.push(el.previousElementSibling.innerHTML.toLowerCase());
      } else {
        filters.color = filters.color.filter((elem: string) => {
          return elem !== el.previousElementSibling.innerHTML.toLowerCase();
        });
      }
      window.localStorage.setItem('filters', JSON.stringify(filters));
      itemSection.innerHTML = '';
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(localStorage.getItem('filters')));
    });
  });
}

export default setFilters;
