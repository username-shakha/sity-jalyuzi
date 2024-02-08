export type TCategories = {
  id: string;
  href: string;
  img_url: string;
  category_names: string;
};
export interface IProducts {
  product_id: string;
  product_name: string;
  category: string;
  price: string;
  discount: string;
  sale_price: string;
  description: string;
  image_url: string;
  quantity: number;
  id: string;
  in_stock: number;
}
