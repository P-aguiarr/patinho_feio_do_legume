CREATE DATABASE IF NOT EXISTS PatinhoFeioLegume;
USE PatinhoFeioLegume;

CREATE TABLE Agricultores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    celular VARCHAR(15),
    senha VARCHAR(255) NOT NULL,  -- Armazena o hash da senha para maior segurança
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
