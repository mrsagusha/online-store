import './css/style.css';
import products from './data/products.json';

// const foo = (): void => {
//   const sectionForItems: HTMLDivElement | null = document.querySelector(
//     '.main__main-section__items',
//   );
//   products.products.forEach((el) => {
//     const itemCardHTML = `<div class="item-card" data-price="${el.price} ₽" data-year="${el.year}" data-brand="${el.brand}" data-color="${el.color}" data-gender="${el.gender}" data-material="${el.material}">
//         <div class="item-card__cart-section">
//                                     <p class="item-card__cart-section__text">Товар добавлен в корзину</p>
//                                     <p class="item-card__cart-section__delete-item">-</p>
//                                     <p class="item-card__cart-section__quantity"><b class="item-card__cart-section__number">0</b> шт.</p>
//                                 </div>
//         <img class="item-card__image" src="${el.image}" alt="">
//         <div class="item-card__button-add-to-cart">
//             <p class="item-card__button-add-to-cart__text">Добавить в корзину</p>
//         </div>
//         <p class="item-card__brend">${el.model}</p>
//         <p class="item-card__price">${el.price} ₽</p>
//         <div class="item-card__additional-info">
//             <div class="item-card__additional-info__wrapper">
//                 <p class="item-card__additional-info__text year"><b>Год выпуска:</b> ${el.year}</p>
//                 <p class="item-card__additional-info__text color"><b>Цвет:</b> ${el.color}</p>
//             </div>
//             <div class="item-card__additional-info__wrapper">
//                 <p class="item-card__additional-info__text gender"><b>Пол:</b> ${el.gender}</p>
//                 <p class="item-card__additional-info__text material"><b>Материал:</b> ${el.material}</p>
//             </div>
//         </div>
//       </div>`;

//     sectionForItems?.insertAdjacentHTML('beforeend', itemCardHTML);
//   });
// };

// foo();
