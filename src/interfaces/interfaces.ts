/* eslint-disable semi */
/* eslint-disable no-extra-semi */
interface IProduct {
    id: number;
    image: string;
    price: number;
    year: number;
    model: string;
    brand: string;
    color: string;
    gender: string;
    material: string;
};

interface IFilters {
    price: number;
    year: number;
    brand: string [];
    color: string [];
    gender: string [];
    material: string [];
};

export { IProduct, IFilters };
