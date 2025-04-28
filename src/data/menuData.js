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
        name: "Moxitto",
        size: '450ml' ,
        originalPrice: 10000,
        discount: 10,
        image: "../images/moxitto.PNG",
        isOnSale: true
      },
      {
        id: 5,
        name: "Koktel",
        size: '450ml' ,
        originalPrice: 20000,
        discount: 0,
        image: "../images/coctel-banan.PNG",
        isOnSale: true,
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
    category: "Sirinliklar",
    image: cake,
    items: [
      {
        id: 1,
        name: "Cheesecake",
        originalPrice: 25000, // Original price before discount
        discount: 0, //  discount
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
     
      
    ]
  }
];