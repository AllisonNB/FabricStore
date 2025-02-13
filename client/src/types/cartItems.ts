export type cartItem = {
  productId: number;
  name: string;
  image: string;
  quantities: {
    cost: number;
    amount: number;
    sale: boolean;
  };
};
