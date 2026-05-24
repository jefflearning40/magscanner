function App() {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-light">

      <header className="py-5 text-center">

        <h1 className="display-2 fw-bold">
          MagScanner
        </h1>

        <p className="text-secondary">
          Gestion des boutiques, produits et scanner
        </p>

      </header>

      <div className="container">

        <div className="row g-4">

          {/* BOUTIQUES */}

          <div className="col-md-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-shop fs-1 text-primary mb-4"></i>

                <h3>Boutiques</h3>

                <p>
                  Gestion des magasins
                </p>

                <button className="btn btn-primary">
                  Ouvrir
                </button>

              </div>

            </div>

          </div>

          {/* PRODUITS */}

          <div className="col-md-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-box fs-1 text-success mb-4"></i>

                <h3>Produits</h3>

                <p>
                  Catalogue produit
                </p>

                <button className="btn btn-success">
                  Ouvrir
                </button>

              </div>

            </div>

          </div>

          {/* SCANNER */}

          <div className="col-md-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-barcode fs-1 text-warning mb-4"></i>

                <h3>Scanner</h3>

                <p>
                  Lecture code-barres
                </p>

                <button className="btn btn-warning">
                  Scanner
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;