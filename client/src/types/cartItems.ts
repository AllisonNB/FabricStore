export type cartItem = {
  productId: string;
  name: string;
  image: string;
  quantities: {
    cost: number;
    amount: number;
    sale: boolean;
  };
};
