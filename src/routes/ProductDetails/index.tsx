import './styles.css';
import ButtonColor from "../../components/ButtonColor";
import ButtonWhite from "../../components/ButtonWhite";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDto } from '../../models/product';

const product: ProductDto =
{
  id_product: 2,
  name: "Smart TV Monitor",
  description: "TV e Monitor 40'' Full HD",
  priceTable: 2500.99,
  imageUri: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories:
  [
    {
      id_category: 2,
      name: "Eletrônicos"
    },
    {
      id_category: 3,
      name: "Computadores"
    },
    {
      id_category: 4,
      name: "Importados"
    }    
  ]
}

export default function ProductDetails()
{
   return(
      <>
      <HeaderClient/>
      <main>
        <section id="product-details-section" className="vsc-container">
          <ProductDetailsCard product={product}/>
          <div className="vsc-btn-page-container">
            <ButtonColor/>
            <ButtonWhite/>
          </div>
        </section>
      </main>
    </>
   );
}

