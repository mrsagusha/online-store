const priceFilter: HTMLInputElement | null = document.querySelector('.filter-price__slider');
const priceFilterValue = document.querySelector('.filter-price__slider-min');
const yearFilter: HTMLInputElement | null = document.querySelector('.filter-year-of-release__slider');
const yearFilterValue = document.querySelector('.filter-year-of-release__slider-min');

function changeSliderFiltersValues(): void {
  if (priceFilter) {
    priceFilter.addEventListener('input', (): void => {
      if (priceFilterValue) {
        priceFilterValue.textContent = `${priceFilter.value} ₽`;
      }
    });
  }

  if (yearFilter) {
    yearFilter.addEventListener('input', (): void => {
      if (yearFilterValue) {
        yearFilterValue.textContent = yearFilter.value;
      }
    });
  }
}

export default changeSliderFiltersValues;
