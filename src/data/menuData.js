import drinks from "../../public/images/drinks.jpg";
import cake from "../../public/images/cake.jpg";

export const menu = [
  {
    category: "Ichimliklar",
    image: drinks,
    items: [
      {
        id: 1,
        name: "Coca-Cola",
        size: '500ml' ,
        originalPrice: 10000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cola-05.PNG",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "Pepsi",
        size: '500ml' ,
        originalPrice: 10000,
        discount: 10,
        image: "../images/pepsi-05.PNG",
        isOnSale: true
      },
      {
        id: 3,
        name: "Fanta",
        size: '500ml' ,
        originalPrice: 10000,
        discount: 10,
        image: "../images/fanta-05.PNG",
        isOnSale: true
      },
      {
        id: 4,
        name: "Sprite",
        size: '500ml' ,
        originalPrice: 10000,
        discount: 10,
        image: "../images/sprite-05.PNG",
        isOnSale: true
      },
      {
        id: 5,
        name: "Red Bull",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false,
      }
      ,
      {
        id: 6,
        name: "Mojitto",
        size: '500ml' ,
        originalPrice: 10000,
        discount: 10,
        image: "../images/mojitto.PNG",
        isOnSale: true
      },
     
      
    ]
  },
  {
    category: "Ichimliklar",
    image: drinks,
    items: [
      {
        id: 1,
        name: "Coca-Cola",
        originalPrice: 15000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cola-450.png",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "Pepsi",
        originalPrice: 13000,
        discount: 10,
        image: "../images/pepsi.jpg",
        isOnSale: true
      },
      {
        id: 3,
        name: "Red Bull",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false,
      }
      ,
     
      
    ]
  }
  ,
  {
    category: "Ichimliklar",
    image: drinks,
    items: [
      {
        id: 1,
        name: "Coca-Cola",
        originalPrice: 15000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cola-450.png",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "Pepsi",
        originalPrice: 13000,
        discount: 10,
        image: "../images/pepsi.jpg",
        isOnSale: true
      },
      {
        id: 3,
        name: "Red Bull",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false,
      }
      ,
     
      
    ]
  }
  ,
  {
    category: "Sirinliklar",
    image: cake,
    items: [
      {
        id: 1,
        name: "Napalion",
        originalPrice: 25000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cocacola.jpg",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "Sansibastian",
        originalPrice: 30000,
        discount: 10,
        image: "../images/pepsi.jpg",
        isOnSale: true
      },
      {
        id: 3,
        name: "Midavik",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false,
      }
      ,
     
      
    ]
  }
];