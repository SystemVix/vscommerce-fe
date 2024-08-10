import './styles.css';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';
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

export default function Catalog()
{
   return(
      <>
         <HeaderClient/>
         <main>
            <section id="catalog-section" className="vsc-container">
               <SearchBar/>
               <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                  <CatalogCard product={product}/>
                  <CatalogCard product={product}/>
                  <CatalogCard product={product}/>
                  <CatalogCard product={product}/>
                  <CatalogCard product={product}/>
               </div>
               <ButtonNextPage/>         
            </section>
         </main>
      </>
   );
}