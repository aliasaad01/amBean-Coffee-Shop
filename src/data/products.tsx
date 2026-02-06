export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: "coffee" | "tea" | "muffin" | "milk" | "ice tea";
  featured?: boolean;
  description?: string;
};

export type CartItem = Product & {
  quantity: number;
};

export const homeProducts: Product[] = [
  {
    id: "1",
    name: "Espresso",
    price: "$4.50",
    image: "/images/espresso-shot.jpg",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "2",
    name: "Hot Chocolate",
    price: "$5.75",
    image: "/images/hot-chocolate.jpg",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "3",
    name: "Latte",
    price: "$5.50",
    image: "/images/latte.jpg",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "4",
    name: "Americano",
    price: "$6.00",
    image: "/images/Americano.jpg",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
];

export const products: Product[] = [
  {
    id: "5",
    name: "Matcha Latte",
    price: "$5.50",
    image: "/images/matcha.jpg",
    category: "tea",
    featured: true,
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "9",
    name: "Hot Chocolate",
    price: "$5.75",
    image: "/images/hot-chocolate.jpg",
    category: "milk",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "7",
    name: "Loose Leaf Tea",
    price: "$4.50",
    image: "/images/loose-leaf-tea.jpg",
    category: "tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "3",
    name: "Latte",
    price: "$5.50",
    image: "/images/latte.jpg",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "1",
    name: "Espresso Shot",
    price: "$4.50",
    image: "/images/espresso-shot.jpg",
    category: "coffee",
    featured: true,
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "4",
    name: "Americano",
    price: "$6.00",
    image: "/images/Americano.jpg",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "6",
    name: "Chai Latte",
    price: "$6.00",
    image: "/images/chai-latte.jpg",
    category: "tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "8",
    name: "Ice Latte Hazelnut",
    price: "$3.75",
    image: "/images/ice-latte-hazelnut.JPG",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "10",
    name: "Ice Latte Caramel",
    price: "$5.25",
    image: "/images/ice-latte-caramel.JPG",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "16",
    name: "Frappuccino Chocolate",
    price: "$5.50",
    image: "/images/frappuccino-chocolate.JPG",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "17",
    name: "frappuccino-strawberry-vanilla",
    price: "$5.49",
    image: "/images/frappuccino-strawberry-vanilla.JPG",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "18",
    name: "Ice Tea Lemonade Passion",
    price: "$5.49",
    image: "/images/ice-tea-lemonade-passion.JPG",
    category: "ice tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "19",
    name: "Ice Tea Lemonade",
    price: "$5.49",
    image: "/images/ice-tea-lemonade.JPG",
    category: "ice tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "11",
    name: "Blueberry Muffin",
    price: "$5.49",
    image: "/images/blueberry-muffin.jpg",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "12",
    name: "Chocolate Muffin",
    price: "$5.49",
    image: "/images/chocolate-muffin.jpg",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "13",
    name: "Vanilla Muffin",
    price: "$5.49",
    image: "/images/vanilla-muffin.jpg",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "14",
    name: "Mudcake",
    price: "$6.49",
    image: "/images/mudcake.jpg",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "15",
    name: "Blueberry Pie",
    price: "$2.50",
    image: "/images/blueberry-pie.jpg",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
];
