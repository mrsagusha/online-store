/* eslint-disable max-len */
/* eslint-disable arrow-body-style */

import { IProduct, IFilters } from '../interfaces/interfaces';

const itemSection = document.querySelector('.main__main-section__items');

function render(productsList: IProduct[], searchString: string, sortString: string, filters: IFilters): void {
  let productsToRender = [...productsList];

  productsToRender = productsToRender.filter((el:IProduct) => {
    return el.model.toLowerCase().includes(searchString.toLowerCase().trim());
  });

  if (sortString === 'Цена по убыванию') productsToRender.sort((a, b) => b.price - a.price);
  else if (sortString === 'Цена по возрастанию') productsToRender.sort((a, b) => a.price - b.price);
  else if (sortString === 'Год по возрастанию') productsToRender.sort((a, b) => a.year - b.year);
  else if (sortString === 'Год по убыванию') productsToRender.sort((a, b) => b.year - a.year);
  else if (sortString === 'Название по убыванию') {
    productsToRender.sort((a, b) => {
      const nameA = a.model.toLowerCase();
      const nameB = b.model.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 0;
      return 0;
    });
  } else if (sortString === 'Название по возрастанию') {
    productsToRender.sort((a, b) => {
      const nameA = a.model.toLowerCase();
      const nameB = b.model.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 0;
      return 0;
    });
  }

  productsToRender = productsToRender.filter((el: IProduct) => el.price >= filters.price);
  productsToRender = productsToRender.filter((el: IProduct) => el.year >= filters.year);

  if (filters.brand.length !== 0) productsToRender = productsToRender.filter((el: IProduct) => filters.brand.includes(el.brand));
  if (filters.color.length !== 0) productsToRender = productsToRender.filter((el: IProduct) => filters.color.includes(el.color));
  if (filters.gender.length !== 0) productsToRender = productsToRender.filter((el: IProduct) => filters.gender.includes(el.gender));
  if (filters.material.length !== 0) productsToRender = productsToRender.filter((el: IProduct) => filters.material.includes(el.material));

  if (productsToRender.length === 0) {
    itemSection.innerHTML = '<p class="empty-message">Извините, товар не найден...</p>';
  }
  productsToRender.forEach((el) => {
    const itemCardHTML = `<div class="item-card">
      <div class="item-card__cart-section">
                                  <p class="item-card__cart-section__text">Товар добавлен в корзину</p>
                                  <p class="item-card__cart-section__delete-item">-</p>
                                  <p class="item-card__cart-section__quantity"><b class="item-card__cart-section__number">0</b> шт.</p>
                              </div>
      <img class="item-card__image" src="${el.image}" alt="">
      <div class="item-card__button-add-to-cart">
          <p class="item-card__button-add-to-cart__text">Добавить в корзину</p>
      </div>
      <p class="item-card__brend">${el.model}</p>
      <p class="item-card__price">${el.price} ₽</p>
      <div class="item-card__additional-info">
          <div class="item-card__additional-info__wrapper">
              <p class="item-card__additional-info__text year"><b>Год выпуска:</b> ${el.year}</p>
              <p class="item-card__additional-info__text color"><b>Цвет:</b> ${el.color}</p>
          </div>
          <div class="item-card__additional-info__wrapper">
              <p class="item-card__additional-info__text gender"><b>Пол:</b> ${el.gender}</p>
              <p class="item-card__additional-info__text material"><b>Материал:</b> ${el.material}</p>
          </div>
      </div>
    </div>`;
    if (itemSection) itemSection.insertAdjacentHTML('beforeend', itemCardHTML);
  });
}

export default render;
