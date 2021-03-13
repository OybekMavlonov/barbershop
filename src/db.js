export const categories = [
  {
    id: 0,
    title: "Бритвенные принадлежности",
  },
  {
    id: 1,
    title: "Средства для ухода",
  },
  {
    id: 2,
    title: "Аксессуары",
  },
];

export const manufacturers = [
  {
    id: 0,
    title: "Baxter of California",
  },
  {
    id: 1,
    title: "Mr Natty",
  },
  {
    id: 2,
    title: "Suavecito",
  },
  {
    id: 3,
    title: "Malin+Goetz",
  },
  {
    id: 4,
    title: "Murray’s",
  },
  {
    id: 5,
    title: "American Crew",
  },
];

export const products = [
  {
    id: 0,
    name: "Набор для путешествий",
    price: 2900,
    productId: [1, 2],
    manufacturerId: 0
  },
  {
    id: 1,
    name: "Увлажняющий кондиционер",
    price: 750,
    productId: [0, 1],
    manufacturerId: 1
  },
  {
    id: 2,
    name: "Гель для волос",
    price: 290,
    productId: [1, 2],
    manufacturerId: 2
  },
  {
    id: 3,
    name: "Гель для волос",
    price: 300,
    productId: [2],
    manufacturerId: 5
  },
  {
    id: 4,
    name: "Глина для укладки волос",
    price: 500,
    productId: [0, 2],
    manufacturerId: 5
  },
  {
    id: 5,
    name: "Smth",
    price: 100,
    productId: [0, 1],
    manufacturerId: 5,
  },
  {
    id: 6,
    name: "Набор для бритья",
    price: 3900,
    productId: [1],
    manufacturerId: 0
  },
];
