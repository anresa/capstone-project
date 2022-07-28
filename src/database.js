import {nanoid} from 'nanoid';

const productsDatabase = [
  {
    productSetId: nanoid(),
    productCategory: 'Groceries',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Kaiser Natron',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Arm & Hammer Pure Baking Soda',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Bicarbonato de Sodio Arm & Hammer',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Groceries',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Milsani Creme Fraiche',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Daisy Pure & Natural Sour Cream',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Crema Lala entera',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Pharmacy',
    productSet: [
      {
        productId: nanoid(),
        productName: 'IbuHEXAL akut 400 mg',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Advil Ibuprofen Tablets 200 mg',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Motrin Ibuprofeno 600 mg',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Pharmacy',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Perenterol 50 mg Kapseln',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Pepto Bismol',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Pepto Bismol',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Pharmacy',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Bepanthen Wund- und Heilsalbe',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Neosporin',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Ungüento Vitacilina',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Groceries',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Yes Torty',
        productCountry: 'Germany',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Marinela Gansito',
        productCountry: 'USA',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Marinela Gansito',
        productCountry: 'Mexico',
        productImage: 'https://i.medizinfuchs.de/p/500/11/01420649.jpg',
      },
    ],
  },
];

export default productsDatabase;
