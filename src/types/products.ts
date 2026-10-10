export interface IProps {
  params: Promise<{
    slug: string;
  }>;
}

export interface IProduct {
  length: number
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
}

export interface IProductType {
  products: IProduct[];
}