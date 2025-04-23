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

    public function create($data)
    {
        $query = "INSERT INTO " . $this->table . "
            (email, password, first_name, last_name, region, birthdate, phone)
            VALUES 
            (:email, :password, :first_name, :last_name, :region, :birthdate, :phone) 
        ";
        $stmt = $this->conn->prepare($query);

        // Clean data
        $data['email'] = htmlspecialchars(strip_tags($data['email']));
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        $data['first_name'] = htmlspecialchars(strip_tags($data['firstName']));
        $data['last_name'] = htmlspecialchars(strip_tags($data['lastName']));
        $data['region'] = htmlspecialchars(strip_tags($data['region']));
        $data['birthdate'] = htmlspecialchars(strip_tags($data['birthdate']));
        $data['phone'] = htmlspecialchars(strip_tags($data['phone']));

        // Bind value
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':password', $data['password']);
        $stmt->bindParam(':first_name', $data['first_name']);
        $stmt->bindParam(':last_name', $data['last_name']);
        $stmt->bindParam(':region', $data['region']);
        $stmt->bindParam(':birthdate', $data['birthdate']);
        $stmt->bindParam(':phone', $data['phone']);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // authentication
    public function login($email, $password)
    {
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
