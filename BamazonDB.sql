CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INTEGER,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Health and Wellness", 2.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4", "Video Games", 299.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 9.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Textbook", "Books", 79.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blanket", "Bedding & Bath", 39.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bookshelf", "Furniture", 59.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sneakers", "Clothing", 99.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Television", "Electronics", 499.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Table", "Furniture", 99.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peanut Butter", "Groceries", 3.99, 25);