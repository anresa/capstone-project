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
        productImage: 'https://kopp-medien.websale.net/bilder/normal/124979.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Arm & Hammer Pure Baking Soda',
        productCountry: 'USA',
        productImage:
          'https://i5.walmartimages.com/asr/39f3df37-da57-4337-8f32-b3207fe9a3e2.cdd2287926ae9985b2f580bcd2e100f1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      },
      {
        productId: nanoid(),
        productName: 'Bicarbonato de Sodio Arm & Hammer',
        productCountry: 'Mexico',
        productImage:
          'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00003320001130L2.jpg',
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
        productImage:
          'https://www.aldi-nord.de/content/dam/aldi/germany/produkte/milchprodukte/5069_creme_fraiche_11-2017_com.png/jcr:content/renditions/opt.1250w.png.res/1510326390812/opt.1250w.png',
      },
      {
        productId: nanoid(),
        productName: 'Daisy Pure & Natural Sour Cream',
        productCountry: 'USA',
        productImage: 'https://world.openfoodfacts.org/images/products/007/342/000/0240/front_en.10.400.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Crema Lala entera',
        productCountry: 'Mexico',
        productImage:
          'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/gr/images/product-images/img_large/00750102051313L.jpg',
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
        productImage: 'https://www.parcelmed.de/images/product_images/popup_images/00068972.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Advil Ibuprofen Tablets 200 mg',
        productCountry: 'USA',
        productImage: 'https://i.ebayimg.com/images/g/66MAAOSwmu9e9nix/s-l500.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Motrin Ibuprofeno 600 mg',
        productCountry: 'Mexico',
        productImage:
          'https://www.motrin.ca/sites/motrin_ca/files/styles/product_image/public/product-images/product_lg_motrintablets_resized.png',
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
        productImage: 'https://www.medikamente-per-klick.de/images/products/medikamenteperklick/gross/01320586_g.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Pepto Bismol',
        productCountry: 'USA',
        productImage:
          'https://cdn11.bigcommerce.com/s-1ckji0j190/images/stencil/1280x1280/products/503/1475/PEPTO-BISMOL_4_OZ_FRASCO__81881.1602006819.jpg?c=1&imbypass=on',
      },
      {
        productId: nanoid(),
        productName: 'Pepto Bismol',
        productCountry: 'Mexico',
        productImage:
          'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb965991f/images/product/0020800753067_A.jpg?sw=1000&sh=1000&sm=fit',
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
        productImage: 'https://cdn.shop-apotheke.com/images/D01/578/818/D01578818-p1.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Neosporin',
        productCountry: 'USA',
        productImage: 'https://img.fruugo.com/product/2/14/202668142_max.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Ungüento Vitacilina',
        productCountry: 'Mexico',
        productImage:
          'https://cdn.shopify.com/s/files/1/0517/2160/1222/products/VITACILINA-UNGUENTO28g_2048x2048.jpg?v=1626449010',
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
        productImage:
          'https://img.rewe-static.de/0206117/16112870_digital-image.png?output-quality=60&fit=inside|840:840&output-format=image/webp&background-color=ffffff',
      },
      {
        productId: nanoid(),
        productName: 'Marinela Gansito',
        productCountry: 'USA',
        productImage:
          'https://i5.walmartimages.com/asr/41cf2091-edbc-4f89-9563-fcf01cbf6266.a0e33261fa11309e5c4f719c86bb41a0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      },
      {
        productId: nanoid(),
        productName: 'Marinela Gansito',
        productCountry: 'Mexico',
        productImage:
          'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/gr/images/product-images/img_large/00750100015310L.jpg',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Groceries',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Snack Day Tortilla',
        productCountry: 'Germany',
        productImage: 'https://offers.kd2.org/pics/d1/a0/d1a0c234e7c15665e84bf0b048df47b2f76e04b9.jpg',
      },
      {
        productId: nanoid(),
        productName: 'Sun Chips',
        productCountry: 'USA',
        productImage: 'https://i.ebayimg.com/images/g/PdoAAOSwP69al1hE/s-l500.jpg',
      },
      {
        productId: nanoid(),
        productName: '오리온 태양의 맛',
        productCountry: 'Korea',
        productImage: 'https://www.nikankitchen.com/Images/Products/orion-sun-chip-spicy-135g.png',
      },
    ],
  },
  {
    productSetId: nanoid(),
    productCategory: 'Groceries',
    productSet: [
      {
        productId: nanoid(),
        productName: 'Gewürz Spekulatius',
        productCountry: 'Germany',
        productImage: 'https://s7g10.scene7.com/is/image/aldi/202108240150',
      },
      {
        productId: nanoid(),
        productName: 'Marinela Canelitas',
        productCountry: 'Mexico',
        productImage: 'https://www.holamexico.de/media/image/9b/27/23/canelitas-marinela.png',
      },
    ],
  },
];

export default productsDatabase;
