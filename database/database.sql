CREATE DATABASE ng_crud_db;

USE ng_crud_db;

CREATE TABLE Cliente (
    idCliente INT NOT NULL,
    PRIMARY KEY (idCliente)
);

CREATE TABLE IF NOT EXISTS Comic (
    idComic INT NOT NULL,
    precio DOUBLE NULL,
    PRIMARY KEY (idComic)
);

CREATE TABLE IF NOT EXISTS Compra (
    idCompra INT NOT NULL,
    idCliente INT NOT NULL,
    idComic INT NOT NULL,
    PRIMARY KEY (idCompra),
    CONSTRAINT fk_Cliente_Compra
    FOREIGN KEY (idCliente)
    REFERENCES Cliente (idCliente)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_Comic_Compra
    FOREIGN KEY (idComic)
    REFERENCES Comic (idComic)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

ALTER USER 'root'@'localhost' identified with mysql_native_password by 'PASSWORD';

INSERT INTO Cliente(idCliente) VALUES (11);
INSERT INTO Cliente(idCliente) VALUES (22);
INSERT INTO Cliente(idCliente) VALUES (33);
