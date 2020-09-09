import {Product} from "./Product";

export const findProductsAsync = async(): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(resolve, 1000, _getMockedProducts()));
};

function _getMockedProducts(): Array<Product> {
  return [
    {
      id: '1',
      name: 'Lexoffice Rechnungen',
      inventory: 10,
      price: 5
    },
    {
      id: '2',
      name: 'Lexoffice Buchhaltung',
      inventory: 3,
      price: 15
    },
    {
      id: '3',
      name: 'Lexoffice Buchhaltung + Lohn',
      inventory: 3,
      price: 25
    }
  ];
}