import "./styles.css";
import computadorImg from "../../assets/computer.png";
import ProductCategory from "../ProductCategory";

export default function ProductDetailsCard()
{
   return (
      <div className="vsc-card vsc-mb20">
         <div className="vsc-product-details-top vsc-line-bottom">
            <img src={computadorImg} alt="Computador" />
         </div>
         <div className="vsc-product-details-bottom">
            <h3>R$ 5.000,00</h3>
            <h4>Computador Gamer XT</h4>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
               labore eum vitae, corrupti ad id similique! Illo dolores ullam numquam
               laudantium modi aut, veniam exercitationem architecto veritatis
               voluptates, quos beatae.
            </p>
            <div className="vsc-category-container">
               <ProductCategory/>
               <ProductCategory/>
            </div>
         </div>
      </div>
  );
}
