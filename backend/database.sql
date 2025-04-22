-- Database: mk_web
CREATE DATABASE IF NOT EXISTS mk_web CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mk_web;

-- Users table
CREATE TABLE
    IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100),
        region VARCHAR(50) NOT NULL,
        birthdate DATE NOT NULL,
        phone VARCHAR(20),
        role ENUM ('user', 'admin') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- Users sessions table for managing login sessions
CREATE TABLE
    IF NOT EXISTS user_sessions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        token VARCHAR(255) NOT NULL,
        exprires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );