import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./productPage.css";

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [activeAcordion,setActiveAccordion]= useState(false)
  const [amount, setAmount] = useState(1);
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  function handleAcordion(){
    setActiveAccordion(!activeAcordion)
  }

  useEffect(function () {
    async function getProduct() {
      const response = await fetch(
        `https://api.mercadolibre.com/items/${params.productId}`
      );
      const data = await response.json();

      console.log(data);

      setProduct(data);
    }

    getProduct();
  }, []);


  return product ? (
    <main className="product-container">
      <div className="product-image-container">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="product-description-container">
        <i className="fas fa-heart"></i>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">{formatter.format(product.price)}</p>
      </div>
      <div className="product-sale-container">
        <div className="product-sale-amount">
          <button
            onClick={function lessOne() {
              if (amount > 0) {
                setAmount(amount - 1);
              }
            }}
            disabled={amount < 1}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              setAmount(parseInt(e.target.value));
            }}
          />
          <button
            onClick={function moreOne() {
              setAmount(amount + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="product-sale-add">AGREGAR</button>
      </div>
       <h2 className="change-title">COMPARTIR</h2>
        <div className="change-icon-container">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.whatsapp.com/?lang=es">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://twitter.com/?lang=es">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href=""><i class="far fa-copy"></i></a>
        </div>
        <div className="feactures-product-container">
          <button  onClick={handleAcordion} className="feactures-button">
            <h3 className="feactures-title">CARÁCTERISTICAS DEL PRODUCTO</h3> 
            <i className={activeAcordion === true ? "fa-solid fa-minus" : "fa-solid fa-plus" }></i>
          </button>
          <section className={ `feactures${activeAcordion === true ? "feactures---active" : " "}`}>
            <div className="fact-container">
              <h3 className="fact">Color</h3>                 
              <h3 className="fill-fact">Azul</h3>
            </div>
            <div className="fact-container">
              <h3 className="fact">Diseño</h3>
              <h3 className="fill-fact">Normal</h3>
            </div>
            <div className="fact-container">
              <h3 className="fact">Tipo de tela</h3>
              <h3 className="fill-fact">Algodón</h3>
            </div>
            <div className="fact-container">
             <h3 className="fact">Silueta</h3>
            <h3 className="fill-fact">Regular</h3>
            </div >
          </section>
        </div>
            
            
      
    </main>
  ) : null;
}

export default ProductPage;
