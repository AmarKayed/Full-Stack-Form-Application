
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
where id = 15;

update employees
set id = id + 1
where id >= 1
ORDER BY id desc;

ALTER TABLE employees AUTO_INCREMENT = 14;



insert into employees (name, age, country, position, wage)
values ('Daniel', 30, 'UK', 'Head Pediatrician', 144000);

commit;


alter table employees auto_increment = (select max(id) from employees);





SELECT * FROM fullstackformwebapplication.employees;

use fullstackformwebapplication;
update employees set name = 'Tom', age = 21 where id = 1;
rollback;


