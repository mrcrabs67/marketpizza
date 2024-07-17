// import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Home} from "./pages/Home.tsx";
import {NotFound} from "./pages/NotFound.tsx";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./pages/Cart.tsx";


function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
              {/*Попробуем внедрить роутер*/}
              <Routes>
                <Route path="/marketpizza" element={<Home />} />
                <Route path="/marketpizza/notfound" element={<NotFound />} />
                <Route path="/marketpizza/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
)
  ;
}

export default App;
