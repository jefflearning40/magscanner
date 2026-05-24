function App() {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-light">

      {/* HEADER */}

      <header className="py-5 text-center">

        <h1 className="display-2 fw-bold">
          MagScanner
        </h1>

        <p className="text-secondary fs-5">
          Gestion des boutiques, produits et scanner
        </p>

      </header>

      {/* CONTENU */}

      <main className="container">

        <div className="row g-4">

          {/* BOUTIQUES */}

          <div className="col-lg-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-store fs-1 text-primary mb-4"></i>

                <h3>
                  Boutiques
                </h3>

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

          <div className="col-lg-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-box-open fs-1 text-success mb-4"></i>

                <h3>
                  Produits
                </h3>

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

          <div className="col-lg-4">

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="fa-solid fa-qrcode fs-1 text-warning mb-4"></i>
                <h3>
                  Scanner
                </h3>

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

      </main>

    </div>
  );
}

export default App;