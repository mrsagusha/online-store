/* eslint-disable arrow-body-style */

import IProduct from '../interfaces/interfaces';

const itemSection = document.querySelector('.main__main-section__items');

function render(productsList: IProduct[], searchString: string): void {
  const productsListToRender: IProduct[] = productsList.filter((el:IProduct) => {
    return el.model.toLowerCase().includes(searchString.toLowerCase().trim());
  });

  productsListToRender.forEach((el) => {
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
