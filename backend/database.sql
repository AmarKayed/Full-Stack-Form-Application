
-- @block
CREATE DATABASE FullStackFormWebApplication
    DEFAULT CHARACTER SET = 'utf8mb4';


-- @block
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT,
    country VARCHAR(255),
    position VARCHAR(255),
    wage INT
);


ALTER TABLE employees
ADD CHECK(name <> '');

-- ALTER TABLE employees
-- ADD CONSTRAINT CHECK(name <> '');

ALTER TABLE employees
MODIFY name VARCHAR(255) NOT NULL;

-- @block
drop table employees;


describe employees;



-- Change Password


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;



-- SELECT, UPDATE, DELETE

select * from employees;


delete from employees
where id = 14;

update employees
set id = 2
where id = 3;

ALTER TABLE employees AUTO_INCREMENT = 13;



insert into employees (name, age, country, position, wage)
values ('Daniel', 30, 'UK', 'Head Pediatrician', 144000);

commit;


alter table employees auto_increment = (select max(id) from employees);