const products = [
  {
    id: "1",
    name: "bota negra",
    price: 80000,
    category: "bota",
    img: "https://www.pollini.cl/101804-home_default/bota-casual-pollini.jpg",
    stock: 10,
    description: "calzado de cuero",
  },
  {
    id: "2",
    name: "zapato crema",
    price: 51000,
    category: "calzado",
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_123493986_3709385_1?wid=800&hei=800&qlt=70",
    stock: 15,
    description: "zapato crema tacón",
  },
  {
    id: "3",
    name: "zapato plataforma",
    price: 45000,
    category: "calzado",
    img: "https://falabella.scene7.com/is/image/Falabella/882431339_1?wid=1500&hei=1500&qlt=70",
    stock: 25,
    description: "zapato plataforma negro",
  },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}
