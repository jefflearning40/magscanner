const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magscanner'
});

connection.connect((error) => {

    if (error) {
        console.log('Erreur connexion BDD');
        console.log(error);
        return;
    }

    console.log('Connexion MySQL réussie');
});

module.exports = connection;