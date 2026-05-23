import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import Terra from "./Terra";
import Dasher from "./Dasher";
import Fern from "./Fern";
import DasherCards from "./DasherCards";
import SubForm from "./SubForm";
import Approach from "./Approach";
import NewSlide from "./NewSlide";
import ShopCollection from "./ShopCollection";
import ScrollToTop from "./ScrollToTop";
import Login from "./Login";
import CreateAccount from "./Register";
import ProductPage from "./ProductPage";
import CheckoutPage from "./CheckoutPage";
import OrderSuccess from "./OrderSuccess";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Checkout — completely standalone, no navbar/footer */}
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} />}
        />

        {/* All other pages — with navbar and footer */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar
                onCartClick={() => setCartOpen(true)}
                cartCount={cartItems.reduce((s, i) => s + i.qty, 0)}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
              <main className="grow">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Banner />
                        <Cards />
                        <NewSlide />
                        <Terra />
                        <ShopCollection />
                        <Dasher />
                        <Fern />
                        <DasherCards />
                        <SubForm />
                      </>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<CreateAccount />} />
                  <Route
                    path="/product"
                    element={<ProductPage setCartItems={setCartItems} />}
                  />
                  <Route path="/order-success" element={<OrderSuccess />} />
                </Routes>
              </main>
              <Approach />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;