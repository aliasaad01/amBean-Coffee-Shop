export type FeaturedProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const featuredProduct: FeaturedProduct = {
  id: "001",
  name: "Premium Espresso",
  description:
    "Experience the rich aroma and bold taste of our carefully selected espresso beans.",
  price: "$6.50",
  image: "/images/esspresso.png",
};
