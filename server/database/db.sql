CREATE DATABASE expenses;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS incomes;
DROP TABLE IF EXISTS expenses;
 
CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

CREATE TABLE categories(
    id_category SERIAL PRIMARY KEY,
    category_type TEXT NOT NULL
);

CREATE TABLE incomes (
    id_income SERIAL PRIMARY KEY,
    income_concept TEXT NOT NULL,
    income_mount TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id_user),
    income_date DATE NOT NULL DEFAULT CURRENT_DATE

);

CREATE TABLE expenses (
    id_expenses SERIAL PRIMARY KEY,
    expenses_concept TEXT NOT NULL,
    expenses_mount TEXT NOT NULL, 
    user_id INTEGER REFERENCES users(id_user),
    category_id INTEGER REFERENCES categories(id_category),
    expenses_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('Armando Guerrero', 'armando@correo.com', 'armando1234');
INSERT INTO users (user_name, user_email, user_password) VALUES ('Sebastian Guerrero', 'sebastian@correo.com', 'sebastian1234');
INSERT INTO users (user_name, user_email, user_password) VALUES ('Milagros Salazar', 'milagros@correo.com', 'milagros1234');
INSERT INTO users (user_name, user_email, user_password) VALUES ('Nathaly Guerrero', 'nathaly@correo.com', 'nathaly1234');

INSERT INTO categories (category_type) VALUES ('Home');
INSERT INTO categories (category_type) VALUES ('Transport');
INSERT INTO categories (category_type) VALUES ('Education');
INSERT INTO categories (category_type) VALUES ('Food');
INSERT INTO categories (category_type) VALUES ('Entertainment');
INSERT INTO categories (category_type) VALUES ('Taxes');
INSERT INTO categories (category_type) VALUES ('Savings');
INSERT INTO categories (category_type) VALUES ('Investments');

INSERT INTO incomes (income_concept, income_mount, user_id) VALUES ('Income', 2000, 1);
INSERT INTO incomes (income_concept, income_mount, user_id) VALUES ('Income', 3000, 2);
INSERT INTO incomes (income_concept, income_mount, user_id) VALUES ('Income', 4000, 3);
INSERT INTO incomes (income_concept, income_mount, user_id) VALUES ('Income', 5000, 4);

INSERT INTO expenses (expenses_concept, expenses_mount, user_id, category_id) VALUES ('Repairs', 3000, 1, 1);
INSERT INTO expenses (expenses_concept, expenses_mount, user_id, category_id) VALUES ('movie theater', 500, 2, 5);
INSERT INTO expenses (expenses_concept, expenses_mount, user_id, category_id) VALUES ('Investment', 3500, 1, 8);









