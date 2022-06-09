import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./showCase.css";
import { Link } from "react-router-dom";

function ShowCase() {
  const [products, setProducts] = useState();
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(function () {
    async function getProducts() {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&limit20`
      );
      const data = await response.json();
      console.log(data.results);

      setProducts(data.results);
    }

    getProducts();
  }, []);

  return (
    <section className="showcase-container">
      <Slider {...settings}>
        {products?.map(function (product) {
          return (
            <Link
              className="principal-card-container"
              to={`/product/${product.id}`}
            >
              <article key={product.id} className="product-card-container">
                <button className="like-card">
                  <i className="fa-solid fa-heart"></i>
                </button>
                <div className="product-card-image-container">
                  <img src={product.thumbnail} alt="/" />
                </div>
                <p className="product-card-title">{product.title}</p>
                <p className="product-card-price">
                  {formatter.format(product.price)}
                </p>
                <button className="product-card-add">AGREGAR</button>
              </article>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}

export default ShowCase;
