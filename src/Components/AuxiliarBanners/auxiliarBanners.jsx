import Post1 from "../../Assets/post1.jpg";
import Post1Second from "../../Assets/post1-1.jpg";
import Post2 from "../../Assets/post2.jpg";
import Post2Second from "../../Assets/post2-2.jpg";
import Post3 from "../../Assets/post3.jpg";
import Post3Second from "../../Assets/post3-3.jpg";
import "./auxiliarBanners.css";

function AuxiliarBanners() {
  return (
    <>
      <p className="sub-banner-title">INSPIRACIÓN PARA TU LOOK</p>
      <section className="sub-banner-container">
        <div className="images-container">
          <img className="top-image" src={Post1} alt="" />
          <img src={Post1Second} alt="" />
        </div>
        <div className="images-container">
          <img className="top-image" src={Post2} alt="" />
          <img src={Post2Second} alt="" />
        </div>
        <div className="images-container">
          <img className="top-image" src={Post3} alt="" />
          <img src={Post3Second} alt="" />
        </div>
      </section>
    </>
  );
}

export default AuxiliarBanners;
