import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppConText, { ConText } from "./context/AppConText";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/footer/newsletter/Newsletter";
import Products from "./pages/products/Products";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <AppConText>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </AppConText>
  );
}

export default App;
