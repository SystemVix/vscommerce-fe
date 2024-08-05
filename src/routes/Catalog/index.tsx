import './styles.css';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

export default function Catalog()
{
   return(
      <>
         <HeaderClient/>
         <main>
            <section id="catalog-section" className="vsc-container">
               <SearchBar/>
               <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                  <CatalogCard/>
                  <CatalogCard/>
                  <CatalogCard/>
                  <CatalogCard/>
                  <CatalogCard/>
               </div>
               <ButtonNextPage/>         
            </section>
         </main>
      </>
   );
}