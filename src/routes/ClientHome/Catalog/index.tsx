import './styles.css';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import * as productService from '../../../services/product-service';


export default function Catalog()
{
   return (
      <>
         <main>
            <section id="catalog-section" className="vsc-container">
               <SearchBar/>
               <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                  {
                     productService.findAll().map(
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