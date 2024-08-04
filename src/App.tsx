import carrinhoImg from "./assets/carrinho.svg";
import computadorImg from "./assets/computer.png";
import './App.css'

function App()
{
  return (
    <>
      <header className="vsc-header-client">
        <nav className="vsc-container">
          <h1>VS-Commerce</h1>
          <div className="vsc-navbar-right">
            <div className="vsc-menu-items-container">               
              <div className="vsc-menu-item">
                <img src={carrinhoImg} alt="Carrinho"/>
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="vsc-container">
          <div className="vsc-card vsc-mb20">
            <div className="vsc-product-details-top vsc-line-bottom">
              <img src={computadorImg} alt="Computador"/>
            </div>
            <div className="vsc-product-details-bottom">
              <h3>R$ 5.000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore eum vitae, corrupti ad id
                similique! Illo dolores ullam numquam laudantium modi aut, veniam exercitationem architecto veritatis
                voluptates, quos beatae.
              </p>
              <div className="vsc-category-container">
                <div className="vsc-category">
                  Eletrônicos
                </div>
                <div className="vsc-category">
                  Computadores
                </div>
              </div>               
            </div>            
            </div>
              <div className="vsc-btn-page-container">
                <div className="vsc-btn vsc-btn-color">
                  Comprar
                </div>
              <div className="vsc-btn vsc-btn-white">
                Início
              </div>
          </div>
        </section>
      </main>
    </>    
  );
}

export default App
