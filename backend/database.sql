
-- @block
CREATE DATABASE FullStackFormWebApplication
    DEFAULT CHARACTER SET = 'utf8mb4';


-- @block
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    age INT,
    country VARCHAR(255),
    position VARCHAR(255),
    wage INT
);


