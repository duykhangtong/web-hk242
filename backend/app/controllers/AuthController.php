<?php
// controllers/AuthController.php

use Firebase\JWT\JWT;

class AuthController
{
    private $db;
    private $user;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->connect();
        $this->user = new User($this->db);
    }

    public function register()
    {
        // Get posted data
        $data = json_decode(file_get_contents("php://input"));

        // Validate data
        if (!$this->validateRegistrationData($data)) {
            http_response_code(400);
            echo json_encode(['message' => 'Invalid input data']);
            return;
        }

        // Create user
        if ($this->user->create((array)$data)) {
            http_response_code(201);
            echo json_encode(['message' => 'User created successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'User creation failed']);
        }
    }

    public function login()
    {
        // Get posted data
        $data = json_decode(file_get_contents("php://input"));

        // Validate data
        if (!isset($data->email) || !isset($data->password)) {
            http_response_code(400);
            echo json_encode(['message' => 'Missing required fields']);
            return;
        }

        // Attempt login
        $user = $this->user->login($data->email, $data->password);
        if ($user) {
            // Generate JWT token
            $token = $this->generateJWT($user);

            http_response_code(200);
            echo json_encode([
                'message' => 'Login successful',
                'token' => $token,
                'user' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'role' => $user['role'],
                    'firstName' => $user['first_name']
                ]
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['message' => 'Invalid credentials']);
        }
    }

    private function validateRegistrationData($data)
    {
        if (!isset($data->email) || !filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }
        if (!isset($data->password) || strlen($data->password) < 6) {
            return false;
        }
        if (!isset($data->firstName) || empty($data->firstName)) {
            return false;
        }
        if (!isset($data->region) || empty($data->region)) {
            return false;
        }
        if (!isset($data->birthdate) || !strtotime($data->birthdate)) {
            return false;
        }
        return true;
    }

    private function generateJWT($user)
    {
        $issued_at = time();
        $expiration = $issued_at + (60 * 60); // Valid for 1 hour

        $payload = [
            'iat' => $issued_at,
            'exp' => $expiration,
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'role' => $user['role']
            ]
        ];

        return JWT::encode($payload, JWT_SECRET, 'HS256');
    }
}
