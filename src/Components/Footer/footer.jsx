import "./footer.css";

function Footer() {
  return (
    <main className="footer-principal-container">
      <div className="footer-top-container">
        <p className="footer-top-section">
          <i className="fa-solid fa-lock"></i>
          COMPRAS SEGURAS
        </p>
        <p className="footer-top-section">
          <i className="fa-solid fa-credit-card"></i>
          MÚLTIPLES MEDIOS DE PAGO
        </p>
        <p className="footer-top-section">
          <i class="fa-solid fa-truck-arrow-right"></i>ENVÍOS GRATIS A PARTIR DE
          $100.000
        </p>
      </div>
      <div className="footer-mid-container">
        <p> ¡RECIBE NUESTRAS OFERTAS PRIMERO!</p>
        <form action="">
          <input placeholder="Ingresa tu correo electrónico" type="text" />
          <button type="submit">SUBSCRIBIRME</button>
        </form>
        <span>
          *Al suscribirme acepto recibir emails e información de Oxford Jeans,
          bajo sus polÍticas de datos personales
        </span>
      </div>
      <div></div>
    </main>
  );
}

export default Footer;
