CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);







mongodb+srv://anerdene:<Erdembileg20011012>@cluster0.kivucvo.mongodb.net/Products?retryWrites=true&w=majority