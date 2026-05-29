import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const productImages = import.meta.glob(
  "/src/assets/images/imagesProducts/*",
  { eager: true }
);

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

        const categories = [...new Set(data.map((product) => product.category))];

        if (categories.length > 0) {
          setSelectedCategory(categories[0]);
        }
      })
      .catch((error) => {
        console.error("Erreur chargement produits :", error);
      });
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const value = search.toLowerCase();

    return (
      product.category === selectedCategory &&
      (product.name.toLowerCase().includes(value) ||
        product.barcode.toLowerCase().includes(value))
    );
  });

  function getProductImage(product) {
    if (!product.image) {
      return null;
    }

    return productImages[`/src/assets/images/imagesProducts/${product.image}`]?.default;
  }

  return (
    <div className="app">
      <main className="container py-5">
        <Link to="/" className="btn btn-outline-warning mb-4">
          Retour accueil
        </Link>

        <h1 className="text-warning mb-4">Catalogue Produits</h1>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Recherche produit ou code-barres..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="mb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn me-2 mb-2 ${
                selectedCategory === category
                  ? "btn-warning"
                  : "btn-outline-warning"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <h3 className="text-warning mb-4">Rayon : {selectedCategory}</h3>

        <div className="row g-4">
          {filteredProducts.map((product) => {
            const image = getProductImage(product);

            return (
              <div className="col-md-3" key={product.id}>
                <div className="card dashboard-card h-100">
                  <div className="card-body text-center">
                    {image ? (
                      <img
                        src={image}
                        alt={product.name}
                        className="img-fluid mb-3"
                        style={{
                          height: "130px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <div className="text-muted mb-4">Pas d'image</div>
                    )}

                    <h5 className="text-warning">{product.name}</h5>

                    <p className="text-dark mb-1">Stock : {product.stock}</p>

                    <p className="text-dark mb-1">Prix : {product.price} €</p>

                    <p className="small text-muted">{product.barcode}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="footer text-center py-3">© 2026 MagScanner</footer>
    </div>
  );
}

export default Products;