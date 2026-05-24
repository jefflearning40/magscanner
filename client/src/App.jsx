import "./styles/variables.css";
import "./App.css";
import storeBanner from "./assets/images/photoIA1.png";

function App() {
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

      {/* CONTENU PRINCIPAL */}
      <main className="container flex-grow-1">
        <div className="row g-4">
          {/* CARD BOUTIQUES */}
          <div className="col-md-4">
            <div className="card dashboard-card card-image card-boutiques h-100">
              <div className="card-body text-center py-4">
                <i className="fa-solid fa-store fs-1 text-warning mb-4"></i>
                <h3>Boutiques</h3>
                <p>Gestion des magasins</p>
                <button className="btn btn-outline-warning">Ouvrir</button>
              </div>
            </div>
          </div>

          {/* CARD PRODUITS */}
          <div className="col-md-4">
            <div className="card dashboard-card card-image card-produits h-100">
              <div className="card-body text-center py-4">
                <i className="fa-solid fa-box-open fs-1 text-warning mb-4"></i>
                <h3>Produits</h3>
                <p>Catalogue produit</p>
                <button className="btn btn-outline-light">Ouvrir</button>
              </div>
            </div>
          </div>

          {/* CARD SCANNER */}
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
          <img src={storeBanner} alt="MagScanner" className="banner w-100" />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer text-center py-3">© 2026 MagScanner</footer>
    </div>
  );
}

export default App;