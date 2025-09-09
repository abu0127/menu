import drinks from "../../public/images/drinks.jpg";
import cake from "../../public/images/cake.jpg";

export const menu = [
  {
    category: "Ichimliklar",
    image: drinks,
    items: [
      {
        id: "drink-1",
        name: "Coca-Cola",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cola-05.PNG",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: "drink-2",
        name: "Pepsi",
         sizes: [
      { label: "0.5 L", price: 10000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000,
        discount: 10,
        image: "../images/pepsi-05.PNG",
        isOnSale: true
      },
      {
        id: "drink-3",
        name: "Fanta",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000,
        discount: 10,
        image: "../images/fanta-05.PNG",
        isOnSale: true
      },
      {
        id: "drink-4",
        name: "Sprite",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000,
        discount: 10,
        image: "../images/sprite-05.PNG",
        isOnSale: true
      },
      {
        id: "drink-6",
        name: "Red Bull",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false,
      }
      ,
      {
        id: "drink-7",
        name: "Moxitto",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000,
        discount: 10,
        image: "../images/moxitto.PNG",
        isOnSale: true
      },
      {
        id: "drink-8",
        name: "Koktel",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 20000,
        discount: 0,
        image: "../images/coctel-banan.PNG",
        isOnSale: true,
      }
      ,
      {
        id: "drink-9",
        name: "Mojitto",
         sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        originalPrice: 10000,
        discount: 10,
        image: "../images/mojitto.PNG",
        isOnSale: true
      },


    ]
  },

  {
    category: "Sirinliklar",
    image: cake,
    items: [
      {
        id: 1,
        name: "Cheesecake",
        originalPrice: 25000, // Original price before discount
        discount: 0, //  discount
          sizes: [
      { label: "0.5 L", price: 7000 },
      { label: "1 L", price: 11000 },
      { label: "1.5 L", price: 15000 },
      { label: "2 L", price: 18000 },
    ],
        image: "../images/cheesecake-strawberry.PNG",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "San Sebastian",
        originalPrice: 30000,
        discount: 10,
        image: "../images/SanSebastian.PNG",
        isOnSale: true
      },
      {
        id: 3,
        name: "Vafli",
        originalPrice: 20000,
        discount: 0,
        image: "../images/vafli.PNG",
        isOnSale: true,
      }
      ,
      {
        id: 3,
        name: "Vafli",
        originalPrice: 20000,
        discount: 0,
        image: "../images/vafli.PNG",
        isOnSale: false,
      }
      ,
      {
        id: 4,
        name: "Vafli",
        originalPrice: 20000,
        discount: 0,
        image: "../images/vafli.PNG",
        isOnSale: false,
      }
      ,
      {
        id: 5,
        name: "Vafli",
        originalPrice: 20000,
        discount: 0,
        image: "../images/vafli.PNG",
        isOnSale: false,
      }
      ,

    ]
  }
];