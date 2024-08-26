import './styles.css';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { useEffect, useState } from 'react';
import { ProductDto } from '../../../models/product';
import * as productService from '../../../services/product-service.ts';


export default function Catalog()
{
   const [products, setProducts] = useState<ProductDto[]>([]);

   useEffect(() => {
      productService.findAll()
      .then(response => {
         setProducts(response.data.content);
      });
   }, []);

   return (
      <>
         <main>
            <section id="catalog-section" className="vsc-container">
               <SearchBar/>
               <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                  {
                     products.map(
                        product => <CatalogCard key={product.id_product} product={product}/>
                     )
                  }                  
               </div>
               <ButtonNextPage/>         
            </section>
         </main>
      </>
   );
}