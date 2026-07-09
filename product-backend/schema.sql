-- schema.sql — Product & Market database schema
CREATE DATABASE IF NOT EXISTS unideal;
USE unideal;

CREATE TABLE IF NOT EXISTS products (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  title           VARCHAR(150) NOT NULL,
  category        VARCHAR(50)  NOT NULL,
  condition_grade ENUM('Like New', 'Good', 'Fair', 'Needs Repair') DEFAULT 'Good',
  price           DECIMAL(10,2) NOT NULL,
  description     TEXT,
  seller_name     VARCHAR(100),
  image_url       VARCHAR(500),
  status          ENUM('Active', 'Sold', 'Deleted') DEFAULT 'Active',
  view_count      INT DEFAULT 0,
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data so the API returns something immediately
INSERT INTO products (title, category, condition_grade, price, description, seller_name, image_url) VALUES
('Calculus Textbook 3rd Ed.', 'Textbooks', 'Good', 45.00, 'Gently used calculus textbook, no missing pages.', 'Ahmad F.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'),
('Scientific Calculator', 'Electronics', 'Like New', 30.00, 'Casio fx-570, barely used.', 'Siti N.', 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=400'),
('Desk Lamp (LED)', 'Room', 'Good', 18.00, 'Adjustable LED desk lamp.', 'Wei L.', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400');
