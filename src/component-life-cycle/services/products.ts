import { rejects } from "assert";
import { resolve } from "path";
import Item from "../models/item";

const products = {
  1: [
    { id: 1, name: "Iphone 14" },
    { id: 2, name: "Iphone 13" },
    { id: 3, name: "Ipad Pro" },
  ],

  2: [
    { id: 4, name: "Samsung S22plus" },
    { id: 5, name: "Samsung Next" },
    { id: 6, name: "Samsung Tab" },
  ],
};

const fetchProductsOfPage = (page: number) => {
  if (page === 1 || page === 2) {
    return new Promise<Item[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(products[page]);
      }, 2000);
    });
  } else {
    return new Promise<Item[]>((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("No Products"));
      }, 2000);
    });
  }
};

export default fetchProductsOfPage;
