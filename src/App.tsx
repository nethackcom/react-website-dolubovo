import React from 'react';
import "./assets/styles/css/reset-css.css";
import "./assets/styles/css/fonts.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home";
import {Contacts} from "./pages/Contacts";
import {Header} from "./components/common/header/Header";
import {Footer} from "./components/common/footer/Footer";
import {About} from "./pages/About";
import {Products} from "./pages/Products";

function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="us_products" element={<Products />} />
                <Route path="" element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<About />} />
            </Routes>

            <Footer />

        </BrowserRouter>
    </div>
  );
}

export default App;
