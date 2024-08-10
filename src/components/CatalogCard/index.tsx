import './styles.css';
import { ProductDto } from '../../models/product';

type Props =
{
   product: ProductDto;
}

export default function CatalogCard({product}: Props)
{
   return(
      <div className="vsc-card">
         <div className="vsc-catalog-card-top vsc-line-bottom">
            <img src={product.imageUri} alt={product.name}/>
         </div>
         <div className="vsc-catalog-card-bottom">
            <h3>R$ {product.priceTable.toFixed(2)}</h3>
            <h4>{product.name}</h4>
         </div>
      </div>
   );
}