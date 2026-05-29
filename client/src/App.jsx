import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./assets/Styles/variables.css";
import "./App.css";

import storeBanner from "./assets/images/photoIA1.png";

import Boutiques from "./pages/Boutiques";
import Products from "./pages/Products";

function Home() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="py-4 text-center">
        <div className="logo-container">
          <h1 className="display-3 fw-bold m-0">
            <span className="logo-dark">Mag</span>
            <span className="logo-yellow">Scanner</span>
          </h1>
        </div>

        <p className="subtitle mt-3 fs-5">Gestion de magasin</p>
      </header>

      {/* CONTENU */}
      <main className="container flex-grow-1">
        <div className="row g-4">
          {/* BOUTIQUES */}
          <div className="col-md-4">
            <div className="card dashboard-card card-image card-boutiques h-100">
              <div className="card-body text-center py-4">
                <i className="fa-solid fa-store fs-1 text-warning mb-4"></i>

                <h3>Boutiques</h3>

                <p>Gestion des magasins</p>

                <Link to="/boutiques" className="btn btn-outline-warning">
                  Ouvrir
                </Link>
              </div>
            </div>
          </div>

          {/* PRODUITS */}
          <div className="col-md-4">
            <div className="card dashboard-card card-image card-produits h-100">
              <div className="card-body text-center py-4">
                <i className="fa-solid fa-box-open fs-1 text-warning mb-4"></i>

                <h3>Produits</h3>

                <p>Catalogue produit</p>

                <Link to="/products" className="btn btn-outline-light">
                  Ouvrir
                </Link>
              </div>
            </div>
          </div>

          {/* SCANNER */}
          <div className="col-md-4">
            <div className="card dashboard-card card-image card-scanner h-100">
              <div className="card-body text-center py-4">
                <i className="fa-solid fa-qrcode fs-1 text-warning mb-4"></i>

                <h3>Scanner</h3>

                <p>Lecture code-barres</p>

                <button className="btn btn-warning">Scanner</button>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE PRINCIPALE */}
        <div className="banner-card mt-5 overflow-hidden">
          <img
            src={storeBanner}
            alt="MagScanner"
            className="banner w-100"
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer text-center py-3">© 2026 MagScanner</footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/boutiques" element={<Boutiques />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;