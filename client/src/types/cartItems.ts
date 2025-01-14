export type cartItem = {
  name: string;
  quantities: {
    cost: number;
    amount: number;
    sale: boolean;
  };
};
