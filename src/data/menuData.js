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
        originalPrice: 15000, // Original price before discount
        discount: 0, //  discount
        image: "../images/cocacola.jpg",
        isOnSale: true // Flag to indicate item is on sale
      },
      {
        id: 2,
        name: "Pepsi",
        originalPrice: 13000,
        discount: 28,
        image: "../images/pepsi.jpg",
        isOnSale: true
      },
      {
        id: 3,
        name: "Red Bull",
        originalPrice: 20000,
        discount: 0,
        image: "../images/redbul.jpg",
        isOnSale: false
      }
    ]
  },
  {
    category: "Shirinliklar",
    image: cake,
    items: [
      {
        id: 4,
        name: "Medovik",
        originalPrice: 30000,
        discount: 17,
        image: "/images/medovik.png",
        isOnSale: true
      },
      {
        id: 5,
        name: "Chizkeyk",
        originalPrice: 35000,
        discount: 14,
        image: "/images/cheesecake.png",
        isOnSale: true
      }
    ]
  }
];