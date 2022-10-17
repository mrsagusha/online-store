/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
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
const materialFilters = document.querySelectorAll('.material-checkbox');
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

function setInputFilter(filter: HTMLInputElement) {
  if (filter) {
    filter.addEventListener('input', (): void => {
      if (filter === priceFilter) {
        filters.price = +filter.value;
      } else {
        filters.year = +filter.value;
      }
      itemSection.innerHTML = '';
      window.localStorage.setItem('filters', JSON.stringify(filters));
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
    });
  }
}

function setFilters(): void {
  brandFilters.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filters.brand.includes(el.nextElementSibling.innerHTML.toLowerCase())) {
        filters.brand.push(el.nextElementSibling.innerHTML.toLowerCase());
      } else {
        filters.brand = filters.brand.filter((elem: string) => {
          return elem !== el.nextElementSibling.innerHTML.toLowerCase();
        });
      }
      itemSection.innerHTML = '';
      window.localStorage.setItem('filters', JSON.stringify(filters));
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
    });
  });
  colorFilters.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filters.color.includes(el.previousElementSibling.innerHTML.toLowerCase())) {
        filters.color.push(el.previousElementSibling.innerHTML.toLowerCase());
      } else {
        filters.color = filters.color.filter((elem: string) => {
          return elem !== el.previousElementSibling.innerHTML.toLowerCase();
        });
      }
      itemSection.innerHTML = '';
      window.localStorage.setItem('filters', JSON.stringify(filters));
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
    });
  });
  genderFilters.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filters.gender.includes(el.nextElementSibling.innerHTML.toLowerCase())) {
        filters.gender.push(el.nextElementSibling.innerHTML.toLowerCase());
      } else {
        filters.gender = filters.gender.filter((elem: string) => {
          return elem !== el.nextElementSibling.innerHTML.toLowerCase();
        });
      }
      itemSection.innerHTML = '';
      window.localStorage.setItem('filters', JSON.stringify(filters));
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
    });
  });
  materialFilters.forEach((el): void => {
    el.addEventListener('click', (): void => {
      if (!filters.material.includes(el.nextElementSibling.innerHTML.toLowerCase())) {
        filters.material.push(el.nextElementSibling.innerHTML.toLowerCase());
      } else {
        filters.material = filters.material.filter((elem: string) => {
          return elem !== el.nextElementSibling.innerHTML.toLowerCase();
        });
      }
      itemSection.innerHTML = '';
      window.localStorage.setItem('filters', JSON.stringify(filters));
      render(products.products, search.value, window.localStorage.getItem('sort'), JSON.parse(window.localStorage.getItem('filters')));
    });
  });

  setInputFilter(priceFilter);
  setInputFilter(yearFilter);
}

export {
  setFilters, filters,
};
