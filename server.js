const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'MagScanner API fonctionne'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});