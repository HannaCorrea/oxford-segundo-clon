import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import Home from "./Pages/Home/home";
import "./App.css";
import ProductPage from "./Components/ProductPage/productPage";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
