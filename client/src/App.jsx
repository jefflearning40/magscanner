import storeBanner from "./assets/images/photoIA1.png";

function App() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(180deg,#111827,#1f2937)",
      }}
    >
      {/* HEADER */}

      <header className="py-4 text-center">
        <div
          className="
          d-inline-block
          border
          border-warning
          rounded-3
          px-5
          py-2
          "
        >
          <h1 className="display-3 fw-bold m-0">
            <span
              className="
              bg-dark
              text-warning
              px-2
              "
            >
              Mag
            </span>

            <span
              className="
              bg-warning
              text-dark
              px-2
              "
            >
              Scanner
            </span>
          </h1>
        </div>

        <p className="mt-3 text-white fs-5 fw-bold">
          Gestion de magasin complete
        </p>
      </header>

      {/* CONTENU */}

      <main className="container flex-grow-1">
        <div className="row g-3 mb-3">
          {/* BOUTIQUES */}

          <div className="col-md-4">
            <div
              className="
              card
              border-warning
              shadow-lg
              h-100
              "
              style={{
                background: "linear-gradient(145deg,#232526,#414345)",
                color: "white",
              }}
            >
              <div className="card-body text-center py-4">
                <i
                  className="
                  fa-solid
                  fa-store
                  fs-1
                  text-warning
                  mb-4
                  "
                ></i>

                <h3>Boutiques</h3>

                <p>Gestion des magasins</p>

                <button
                  className="
                  btn
                  btn-outline-warning
                  "
                >
                  Ouvrir
                </button>
              </div>
            </div>
          </div>

          {/* PRODUITS */}

          <div className="col-md-4">
            <div
              className="
              card
              border-warning
              shadow-lg
              h-100
              "
              style={{
                background: "linear-gradient(145deg,#232526,#414345)",
                color: "white",
              }}
            >
              <div className="card-body text-center py-4">
                <i
                  className="
                  fa-solid
                  fa-box-open
                  fs-1
                  text-success
                  mb-4
                  "
                ></i>

                <h3>Produits</h3>

                <p>Catalogue produit</p>

                <button
                  className="
                  btn
                  btn-outline-light
                  "
                >
                  Ouvrir
                </button>
              </div>
            </div>
          </div>

          {/* SCANNER */}

          <div className="col-md-4">
            <div
              className="
              card
              border-warning
              shadow-lg
              h-100
              "
              style={{
                background: "linear-gradient(145deg,#232526,#414345)",
                color: "white",
              }}
            >
              <div className="card-body text-center py-4">
                <i
                  className="
                  fa-solid
                  fa-qrcode
                  fs-1
                  text-warning
                  mb-4
                  "
                ></i>

                <h3>Scanner</h3>

                <p>Lecture code-barres</p>

                <button
                  className="
                  btn
                  btn-warning
                  "
                >
                  Scanner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}

        <div
          className="
card
border-warning
shadow-lg
overflow-hidden
mt-5
mb-3
"
        >
          <img
            src={storeBanner}
            alt="MagScanner"
            className="w-100"
            style={{
              height: "280px",
              objectFit: "cover",
            }}
          />
        </div>
      </main>

      {/* FOOTER */}

      <footer
        className="
        text-center
        text-secondary
        small
        py-2
        "
      >
        © 2026 MagScanner
      </footer>
    </div>
  );
}

export default App;
