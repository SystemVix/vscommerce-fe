import "./styles.css";
import ProductCategory from "../ProductCategory";
import { ProductDto } from "../../models/product";

type Props =
{
   product: ProductDto;
}

export default function ProductDetailsCard({product}: Props)
{
   return (
      <div className="vsc-card vsc-mb20">
         <div className="vsc-product-details-top vsc-line-bottom">
            <img src={product.imageUri} alt={product.name} />
         </div>
         <div className="vsc-product-details-bottom">
            <h3>R$ {product.priceTable.toFixed(2)}</h3>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="vsc-category-container">
               {
                  product.categories.map(item =>
                  (
                     <ProductCategory key={item.id_category} name={item.name}/>
                  ))
               }              
            </div>
         </div>
      </div>
  );
}
