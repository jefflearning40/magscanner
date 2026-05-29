USE magscanner;

CREATE TABLE IF NOT EXISTS shops (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    department VARCHAR(10) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    latitude DECIMAL(10, 7) NOT NULL,
    longitude DECIMAL(10, 7) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO shops (name, address, city, department, phone, latitude, longitude)
VALUES
('MagScanner Lyon Centre', '12 rue de la République', 'Lyon', '69', '04 72 00 00 01', 45.764043, 4.835659),
('MagScanner Villeurbanne', '25 avenue Henri Barbusse', 'Villeurbanne', '69', '04 72 00 00 02', 45.771944, 4.890170),
('MagScanner Bron', '8 route de Genas', 'Bron', '69', '04 72 00 00 03', 45.733300, 4.916700);
