import './styles.css';
import carrinhoIcon from "../../assets/carrinho.svg";

export default function HeaderClient()
{
   return(
      <header className="vsc-header-client">
        <nav className="vsc-container">
          <h1>VS-Commerce</h1>
          <div className="vsc-navbar-right">
            <div className="vsc-menu-items-container">               
              <div className="vsc-menu-item">
                <img src={carrinhoIcon} alt="Carrinho"/>
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
   );
}