import './styles.css';
import ButtonColor from "../../../components/ButtonColor";
import ButtonWhite from "../../../components/ButtonWhite";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetails()
{
  const params = useParams();
  
  const product = productService.findById(Number(params.productId));

  return (
    <>      
      <main>
        <section id="product-details-section" className="vsc-container">
          {
            product && /* Testa se o objeto não é undefined */
            <ProductDetailsCard product={product}/>
          }          
          <div className="vsc-btn-page-container">
            <ButtonColor text='Comprar'/>
            <Link to="/">
              <ButtonWhite text='Início'/>
            </Link>            
          </div>
        </section>
      </main>
    </>
  );
}

