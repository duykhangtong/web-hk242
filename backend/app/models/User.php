<?php
// models/User.php

class User
{
    private $conn;
    private $table = 'users';

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getById($id)
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE id = :id';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        return $stmt;
    }

    public function getByEmail($email)
    {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE email = :email';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        return $stmt;
    }

    public function create($data, $role = 'user')
    {
        $query = "INSERT INTO " . $this->table . "
            (email, password, first_name, last_name, region, birthdate, phone, role)
            VALUES 
            (:email, :password, :first_name, :last_name, :region, :birthdate, :phone, :role) 
        ";
        $stmt = $this->conn->prepare($query);

        // Clean data
        $data['email'] = htmlspecialchars(strip_tags($data['email']));
        $data['password'] = htmlspecialchars(strip_tags($data['password']));
        $data['first_name'] = htmlspecialchars(strip_tags($data['firstName']));
        $data['last_name'] = htmlspecialchars(strip_tags($data['lastName']));
        $data['region'] = htmlspecialchars(strip_tags($data['region']));
        $data['birthdate'] = htmlspecialchars(strip_tags($data['birthdate']));
        $data['phone'] = htmlspecialchars(strip_tags($data['phone']));
        $data['role'] = htmlspecialchars(strip_tags($role));

        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);

        // Bind value
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':password', $data['password']);
        $stmt->bindParam(':first_name', $data['first_name']);
        $stmt->bindParam(':last_name', $data['last_name']);
        $stmt->bindParam(':region', $data['region']);
        $stmt->bindParam(':birthdate', $data['birthdate']);
        $stmt->bindParam(':phone', $data['phone']);
        $stmt->bindParam(':role', $data['role']);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // authentication
    public function login($email, $password)
    {
        // Clean data
        $email = htmlspecialchars(strip_tags($email));
        $password = htmlspecialchars(strip_tags($password));

        $query = "SELECT * FROM " . $this->table . " WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user && password_verify($password, $user["password"])) {
            return $user;
        }
        return false;
    }
}
