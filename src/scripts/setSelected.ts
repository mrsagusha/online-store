const genderFilters: HTMLInputElement[] = Array.from(document.querySelectorAll('.gender-checkbox'));
const materialFilters: HTMLInputElement[] = Array.from(document.querySelectorAll('.material-checkbox'));
const brandFilters: HTMLInputElement[] = Array.from(document.querySelectorAll('.brand-checkbox'));
const colorFilters: HTMLInputElement[] = Array.from(document.querySelectorAll('.filter-color__checkbox'));

function setSelected() {
  const filtersFromLocal = JSON.parse(window.localStorage.getItem('filters')!);
  if (filtersFromLocal.brand.length !== 0) {
    filtersFromLocal.brand.forEach((el: string) => {
      for (let i = 0; i < brandFilters.length; i += 1) {
        if (el.toLowerCase() === brandFilters[i].nextElementSibling?.innerHTML.toLowerCase()) {
          brandFilters[i].checked = true;
        }
      }
    });
  }
  if (filtersFromLocal.color.length !== 0) {
    filtersFromLocal.color.forEach((el: string) => {
      for (let i = 0; i < colorFilters.length; i += 1) {
        if (el.toLowerCase() === colorFilters[i].previousElementSibling?.innerHTML.toLowerCase()) {
          colorFilters[i].checked = true;
        }
      }
    });
  }
  if (filtersFromLocal.material.length !== 0) {
    filtersFromLocal.material.forEach((el: string) => {
      for (let i = 0; i < materialFilters.length; i += 1) {
        if (el.toLowerCase() === materialFilters[i].nextElementSibling?.innerHTML.toLowerCase()) {
          materialFilters[i].checked = true;
        }
      }
    });
  }
  if (filtersFromLocal.gender.length !== 0) {
    filtersFromLocal.gender.forEach((el: string) => {
      for (let i = 0; i < genderFilters.length; i += 1) {
        if (el.toLowerCase() === genderFilters[i].nextElementSibling?.innerHTML.toLowerCase()) {
          genderFilters[i].checked = true;
        }
      }
    });
  }
}

export default setSelected;
