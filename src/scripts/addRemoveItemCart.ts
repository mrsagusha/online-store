/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
const selectedItems: string[] = [];

function addRemoveItemCart() {
  const cart = document.querySelector('.cart-quantity');
  const addToCartButton = document.querySelectorAll('.item-card__button-add-to-cart__text');
  const deleteItemFromCart = document.querySelectorAll('.item-card__cart-section__delete-item');

  if (addToCartButton) {
    addToCartButton.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.parentElement) {
          if (el.parentElement.parentElement) {
            const itemCard = el.parentElement.parentElement;
            const itemNumberInCart = itemCard.firstElementChild.lastElementChild.firstElementChild;
            if (!itemCard.firstElementChild.classList.contains('in-cart')) {
              itemCard.firstElementChild.classList.add('in-cart');
              if (cart) {
                cart.textContent = `${+cart.textContent! + 1}`;
                itemNumberInCart.textContent = `${+itemNumberInCart.textContent! + 1}`;
              }
            } else {
              cart.textContent = `${+cart.textContent! + 1}`;
              itemNumberInCart.textContent = `${+itemNumberInCart.textContent! + 1}`;
            }
          }
        }
      });
    });
  }
  if (deleteItemFromCart) {
    deleteItemFromCart.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.nextElementSibling.firstElementChild.textContent !== '1') {
          el.nextElementSibling.firstElementChild.textContent = `${+el.nextElementSibling.firstElementChild.textContent - 1}`;
          cart.textContent = `${+cart.textContent! - 1}`;
        } else if (el.nextElementSibling.firstElementChild.textContent === '1') {
          el.nextElementSibling.firstElementChild.textContent = `${+el.nextElementSibling.firstElementChild.textContent - 1}`;
          cart.textContent = `${+cart.textContent! - 1}`;
          el.parentElement.classList.remove('in-cart');
        }
      });
    });
  }
}

export { addRemoveItemCart, selectedItems };
