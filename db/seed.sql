DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS plants


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    hash VARCHAR(200)
);

CREATE TABLE plant_type(
plant_type_id SERIAL PRIMARY KEY,
type VARCHAR(30)
);

CREATE TABLE plants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    img TEXT,
    price DECIMAL,
    quantity INT,
    content VARCHAR (300),
    plant_type_id INT REFERENCES plant_type(plant_type_id)
    
);