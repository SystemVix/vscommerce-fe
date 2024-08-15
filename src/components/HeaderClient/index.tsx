import './styles.css';
import carrinhoIcon from "../../assets/carrinho.svg";
import { Link } from 'react-router-dom';

export default function HeaderClient()
{
   return(
      <header className="vsc-header-client">
        <nav className="vsc-container">
          <Link to="/">
            <h1>VS-Commerce</h1>
          </Link>          
          <div className="vsc-navbar-right">
            <div className="vsc-menu-items-container">               
              <div className="vsc-menu-item">
                <Link to="/cart">
                  <img src={carrinhoIcon} alt="Carrinho"/>
                </Link>                
              </div>
            </div>
            <Link to="/login">
              Entrar
            </Link>            
          </div>
        </nav>
      </header>
   );
}