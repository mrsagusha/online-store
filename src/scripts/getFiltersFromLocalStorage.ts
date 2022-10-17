import { filters } from './setFilters';

function getFiltersFromLocalStorage() {
  const filtersFromLocal = JSON.parse(window.localStorage.getItem('filters')!);

  if (filtersFromLocal.brand.length !== 0) filters.brand = filtersFromLocal.brand;
  if (filtersFromLocal.color.length !== 0) filters.color = filtersFromLocal.color;
  if (filtersFromLocal.gender.length !== 0) filters.gender = filtersFromLocal.gender;
  if (filtersFromLocal.material.length !== 0) filters.material = filtersFromLocal.material;
}

export default getFiltersFromLocalStorage;
