-- Creating table
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL UNIQUE,
    naame varchar(255));