 
 import drinks from "../../public/images/drinks.jpg"
 import cake from "../../public/images/cake.jpg"
 
 export const menu = [
  {
    category: "Ichimliklar",
    image: drinks, // Kategoriya uchun rasm
    items: [
      {
        id: 1,
        name: "Coca-Cola",
        price: 12000,
        image: "../images/cocacola.jpg"
      },
      {
        id: 2,
        name: "Pepsi",
        price: 11000,
        image: "../images/pepsi.jpg"
      },
      {
        id: 3,
        name: "Red Bull",
        price: 20000,
        image: "../images/redbul.jpg"
      }
    ]
  },
  {
    category: "Shirinliklar",
    image: cake, // Kategoriya uchun rasm
    items: [
      {
        id: 3,
        name: "Medovik",
        price: 25000,
        image: "/images/medovik.png"
      },
      {
        id: 4,
        name: "Chizkeyk",
        price: 30000,
        image: "/images/cheesecake.png"
      }
    ]
  }
];