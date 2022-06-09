import BannersCarousel from "../../Components/BannersCarousel/bannersCarousel";
import AuxiliarBanners from "../../Components/AuxiliarBanners/auxiliarBanners";
import ShowCase from "../../Components/ShowCase/showCase";
import "./home.css";

function Home() {
  return (
    <main>
      <BannersCarousel />
      <AuxiliarBanners />
      <ShowCase />
    </main>
  );
}

export default Home;
