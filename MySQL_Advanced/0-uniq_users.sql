-- Creating table if not exists
CREATE TABLE [IF NOT EXISTS] users (
    id int AUTO_INCREMENT NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    name varchar(255),
    Primary kep (id)
)