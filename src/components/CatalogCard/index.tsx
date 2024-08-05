import './styles.css';
import computadorImg from '../../assets/computer.png';

export default function CatalogCard()
{
   return(
      <div className="vsc-card">
         <div className="vsc-catalog-card-top vsc-line-bottom">
            <img src={computadorImg} alt="Computador"/>
         </div>
         <div className="vsc-catalog-card-bottom">
            <h3>R$ 5.000,00</h3>
            <h4>Computador gamer XT / processador I7 / 16GB ram</h4>
         </div>
      </div>
   );
}