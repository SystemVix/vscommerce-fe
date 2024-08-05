import "./App.css";
import ButtonColor from "./components/ButtonColor";
import ButtonWhite from "./components/ButtonWhite";
import HeaderClient from "./components/HeaderClient";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="vsc-container">
          <ProductDetailsCard/>
          <div className="vsc-btn-page-container">
            <ButtonColor />
            <ButtonWhite />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
