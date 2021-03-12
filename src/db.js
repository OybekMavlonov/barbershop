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
    // manufacturer: 'Baxter of California',
    productId: [1, 2],
    manufacturerId: 0
  },
  {
    id: 1,
    name: "Hamsa (A.Navoiy)",
    price: 10,
    // manufacturer: 'Mr Natty',
    productId: [0, 1],
    manufacturerId: 1
  },
  {
    id: 2,
    name: "Haqiqiy tibbiyot",
    price: 5,
    // manufacturer: 'Suavecito',
    productId: [1, 2],
    manufacturerId: 2
  },
  {
    id: 3,
    name: "Matematika (to'plam)",
    price: 20,
    // manufacturer: 'Malin+Goetz',
    productId: [2],
    manufacturerId: 3
  },
  {
    id: 4,
    name: "Tarixi Muhammadiy",
    price: 10,
    // manufacturer: 'Murray’s',
    productId: [0, 2],
    manufacturerId: 4,
  },
  {
    id: 5,
    name: "To'rt ulus tarixi",
    price: 10,
    // manufacturer: 'American Crew',
    productId: [0, 1],
    manufacturerId: 5,
  },
  {
    id: 6,
    name: "Smth",
    price: 10,
    // manufacturer: 'American Crew',
    productId: [1],
    manufacturerId: 5
  },
];
