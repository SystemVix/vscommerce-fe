import './styles.css';
import ButtonColor from "../../../components/ButtonColor";
import ButtonWhite from "../../../components/ButtonWhite";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDto } from '../../../models/product';
import * as productService from '../../../services/product-service.ts';

export default function ProductDetails()
{
  const params = useParams();

  const [product, setProduct] = useState<ProductDto>();

  useEffect (() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })    
  }, []);
    
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

