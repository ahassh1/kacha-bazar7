export interface IProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  change: { 
    dir: "up" | "down" | "same"; 
    pct: number;
   };
}

export interface IProductType {
  products: IProduct[];
}