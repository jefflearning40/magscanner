const express = require('express');
const db = require('./src/database/db');

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'MagScanner API fonctionne'
    });
});

app.get('/api/products', (req, res) => {

    db.query(
        'SELECT * FROM products',
        (error, results) => {

            if (error) {
                return res.status(500).json({
                    error: 'Erreur SQL'
                });
            }

            res.status(200).json(results);
        }
    );

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});