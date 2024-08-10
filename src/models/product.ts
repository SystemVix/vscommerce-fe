import { CategoryDto } from "./category";

export type ProductDto =
{
   id_product: number;
   name: string;
   description: string;
   priceTable: number;
   imageUri: string;
   categories: CategoryDto[];
}