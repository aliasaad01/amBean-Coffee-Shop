export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: "coffee" | "tea" | "muffin" | "milk";
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
    image: "/images/esspresso.png",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "2",
    name: "Cappuccino",
    price: "$5.00",
    image: "/images/cappuccino.png",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "3",
    name: "Latte",
    price: "$5.50",
    image: "/images/latte.png",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "4",
    name: "Americano",
    price: "$6.00",
    image: "/images/americano.png",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
];

export const products: Product[] = [
  {
    id: "5",
    name: "Matcha Latte",
    price: "$5.50",
    image: "/images/matcha-latte.png",
    category: "tea",
    featured: true,
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "9",
    name: "Hot Chocolate",
    price: "$5.75",
    image: "/images/hot-chocolate.png",
    category: "milk",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "2",
    name: "Cappuccino",
    price: "$5.00",
    image: "/images/cappuccino.png",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "1",
    name: "Espresso Shot",
    price: "$4.50",
    image: "/images/esspresso.png",
    category: "coffee",
    featured: true,
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "3",
    name: "Latte",
    price: "$5.50",
    image: "/images/latte.png",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "4",
    name: "Americano",
    price: "$6.00",
    image: "/images/americano.png",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "6",
    name: "Chai Latte",
    price: "$6.00",
    image: "/images/chai-latte.png",
    category: "tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "7",
    name: "Loose Leaf Tea",
    price: "$4.50",
    image: "/images/tea.png",
    category: "tea",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "8",
    name: "Drip Coffee",
    price: "$3.75",
    image: "/images/drip-coffee.png",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "10",
    name: "Cortado",
    price: "$5.25",
    image: "/images/cortado.png",
    category: "coffee",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "11",
    name: "Blueberry Muffin",
    price: "$5.49",
    image: "/images/blueberry-muffin.png",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "12",
    name: "Chocolate Muffin",
    price: "$5.49",
    image: "/images/chocolate-muffin.png",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "13",
    name: "Seasonal Muffin",
    price: "$5.49",
    image: "/images/seasonal-muffin.png",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "14",
    name: "Crumb Cake",
    price: "$6.49",
    image: "/images/crumb-cake.png",
    category: "muffin",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
  {
    id: "15",
    name: "Dubai Chocolate",
    price: "$2.50",
    image: "/images/dubai-chocolate-bar.png",
    category: "milk",
    description:
      "This is one of the most delicious drinks ever, Try your favorite drink now, Welcome in your second home.",
  },
];
