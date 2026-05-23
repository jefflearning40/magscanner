const express = require('express');
const db = require('./src/database/db');

const app = express();

app.use(express.json());

// TEST API
app.get('/api/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'MagScanner API fonctionne'
    });
});

// READ ALL
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erreur SQL' });
        }

        res.status(200).json(results);
    });
});

// READ ONE
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        'SELECT * FROM products WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Erreur SQL' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'Produit introuvable' });
            }

            res.status(200).json(results[0]);
        }
    );
});

// CREATE
app.post('/api/products', (req, res) => {
    const { name, barcode, quantity } = req.body;

    if (!name || !barcode) {
        return res.status(400).json({
            error: 'Le nom et le code-barres sont obligatoires'
        });
    }

    db.query(
        'INSERT INTO products (name, barcode, quantity) VALUES (?, ?, ?)',
        [name, barcode, quantity || 0],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'Erreur SQL' });
            }

            res.status(201).json({
                message: 'Produit créé avec succès',
                id: result.insertId
            });
        }
    );
});

// UPDATE
app.put('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const { name, barcode, quantity } = req.body;

    if (!name || !barcode) {
        return res.status(400).json({
            error: 'Le nom et le code-barres sont obligatoires'
        });
    }

    db.query(
        'UPDATE products SET name = ?, barcode = ?, quantity = ? WHERE id = ?',
        [name, barcode, quantity || 0, id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'Erreur SQL' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Produit introuvable' });
            }

            res.status(200).json({
                message: 'Produit modifié avec succès'
            });
        }
    );
});

// DELETE
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        'DELETE FROM products WHERE id = ?',
        [id],
        (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'Erreur SQL' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Produit introuvable' });
            }

            res.status(200).json({
                message: 'Produit supprimé avec succès'
            });
        }
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});