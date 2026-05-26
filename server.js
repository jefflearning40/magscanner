const express = require("express");
const db = require("./src/database/db");

const app = express();

app.use(express.json());

/* TEST API */

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MagScanner API fonctionne",
  });
});

/* =========================
   PRODUCTS
========================= */

/* READ ALL PRODUCTS */

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products ORDER BY id DESC", (error, results) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL products",
      });
    }

    res.status(200).json(results);
  });
});

/* READ ONE PRODUCT */

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL product",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Produit introuvable",
      });
    }

    res.status(200).json(results[0]);
  });
});

/* CREATE PRODUCT */

app.post("/api/products", (req, res) => {
  const { name, barcode, price, stock } = req.body;

  if (!name || !barcode || price === undefined) {
    return res.status(400).json({
      error: "Nom, code-barres et prix obligatoires",
    });
  }

  db.query(
    `
    INSERT INTO products
    (name, barcode, price, stock)
    VALUES (?, ?, ?, ?)
    `,
    [name, barcode, price, stock || 0],
    (error, result) => {
      if (error) {
        return res.status(500).json({
          error: "Erreur SQL création produit",
        });
      }

      res.status(201).json({
        message: "Produit créé avec succès",
        id: result.insertId,
      });
    }
  );
});

/* UPDATE PRODUCT */

app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const { name, barcode, price, stock } = req.body;

  if (!name || !barcode || price === undefined) {
    return res.status(400).json({
      error: "Nom, code-barres et prix obligatoires",
    });
  }

  db.query(
    `
    UPDATE products
    SET name = ?, barcode = ?, price = ?, stock = ?
    WHERE id = ?
    `,
    [name, barcode, price, stock || 0, id],
    (error, result) => {
      if (error) {
        return res.status(500).json({
          error: "Erreur SQL modification produit",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Produit introuvable",
        });
      }

      res.status(200).json({
        message: "Produit modifié avec succès",
      });
    }
  );
});

/* DELETE PRODUCT */

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM products WHERE id = ?", [id], (error, result) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL suppression produit",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Produit introuvable",
      });
    }

    res.status(200).json({
      message: "Produit supprimé avec succès",
    });
  });
});

/* =========================
   SHOPS / BOUTIQUES
========================= */

/* READ ALL SHOPS */

app.get("/api/shops", (req, res) => {
  db.query("SELECT * FROM shops ORDER BY id DESC", (error, results) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL shops",
      });
    }

    res.status(200).json(results);
  });
});

/* READ ONE SHOP */

app.get("/api/shops/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM shops WHERE id = ?", [id], (error, results) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL shop",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Boutique introuvable",
      });
    }

    res.status(200).json(results[0]);
  });
});

/* CREATE SHOP */

app.post("/api/shops", (req, res) => {
  const {
    name,
    address,
    city,
    department,
    phone,
    latitude,
    longitude,
  } = req.body;

  if (!name || !address || !city || !department || !phone) {
    return res.status(400).json({
      error: "Nom, adresse, ville, département et téléphone obligatoires",
    });
  }

  db.query(
    `
    INSERT INTO shops
    (name, address, city, department, phone, latitude, longitude)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      address,
      city,
      department,
      phone,
      latitude || 0,
      longitude || 0,
    ],
    (error, result) => {
      if (error) {
        return res.status(500).json({
          error: "Erreur SQL création boutique",
        });
      }

      res.status(201).json({
        message: "Boutique créée avec succès",
        id: result.insertId,
      });
    }
  );
});

/* UPDATE SHOP */

app.put("/api/shops/:id", (req, res) => {
  const id = req.params.id;

  const {
    name,
    address,
    city,
    department,
    phone,
    latitude,
    longitude,
  } = req.body;

  if (!name || !address || !city || !department || !phone) {
    return res.status(400).json({
      error: "Nom, adresse, ville, département et téléphone obligatoires",
    });
  }

  db.query(
    `
    UPDATE shops
    SET name = ?, address = ?, city = ?, department = ?, phone = ?, latitude = ?, longitude = ?
    WHERE id = ?
    `,
    [
      name,
      address,
      city,
      department,
      phone,
      latitude || 0,
      longitude || 0,
      id,
    ],
    (error, result) => {
      if (error) {
        return res.status(500).json({
          error: "Erreur SQL modification boutique",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Boutique introuvable",
        });
      }

      res.status(200).json({
        message: "Boutique modifiée avec succès",
      });
    }
  );
});

/* DELETE SHOP */

app.delete("/api/shops/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM shops WHERE id = ?", [id], (error, result) => {
    if (error) {
      return res.status(500).json({
        error: "Erreur SQL suppression boutique",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Boutique introuvable",
      });
    }

    res.status(200).json({
      message: "Boutique supprimée avec succès",
    });
  });
});

/* SERVER */

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});