export type Fabric = {
  productId: number;
  name: string;
  description: string;
  image: string;
  composition: {
    construction: string;
    fiber: string[];
    similarFabrics: string[];
  };
  characteristics: {
    weight: string;
    stretch: string;
    transparency: string;
    breathability: string;
    wrinkle: string;
    durability: string;
  };
  garments: {
    cleaning: string;
    uses: string[];
  };
  quantities: {
    cost: number;
    amount: number;
    sale: boolean;
  };
};

export type FabricData = Fabric[];
