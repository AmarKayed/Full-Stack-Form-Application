
-- @block
CREATE DATABASE FullStackFormWebApplication
    DEFAULT CHARACTER SET = 'utf8mb4';


-- @block
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT,
    country VARCHAR(255),
    position VARCHAR(255),
    wage INT
);


-- @block
drop table employees;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;

select * from employees;



