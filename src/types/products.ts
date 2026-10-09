export interface IProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
}

export interface IProductType {
  products: IProduct[];
}