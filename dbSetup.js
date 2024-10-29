import mysql from 'mysql2/promise';

// Conexão com o banco de dados
const connection = await mysql.createConnection({
    host: 'localhost',     // endereço do servidor de banco
    user: 'seu_usuario',   // usuário do banco
    password: 'sua_senha', // senha do banco
    database: 'PatinhoFeioLegume'
});

// Script SQL para criar a tabela Agricultores
const createTableQuery = `
CREATE TABLE IF NOT EXISTS Agricultores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    celular VARCHAR(15),
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

// Executa o comando de criação
await connection.query(createTableQuery);
console.log("Tabela Agricultores criada com sucesso!");

// Fecha a conexão
await connection.end();
