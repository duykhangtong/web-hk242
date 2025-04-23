<?php
// middleware/AuthMiddleware.php
require_once __DIR__ . '/../libs/php-jwt-main/src/JWT.php';
require_once __DIR__ . '/../libs/php-jwt-main/src/Key.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthMiddleware
{
    public static function verifyToken()
    {
        $headers = apache_request_headers();
        if (!isset($headers['Authorization'])) {
            http_response_code(401);
            echo json_encode(['message' => 'No token provided']);
            return false;
        }

        $token = str_replace('Bearer ', '', $headers['Authorization']);

        try {
            $decoded = JWT::decode($token, new Key(JWT_SECRET, 'HS256'));
            return $decoded->user;
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['message' => 'Invalid token']);
            return false;
        }
    }

    public static function isAdmin()
    {
        $user = self::verifyToken();
        if (!$user || $user->role !== 'admin') {
            http_response_code(403);
            echo json_encode(['message' => 'Access denied']);
            return false;
        }
        return true;
    }
}
