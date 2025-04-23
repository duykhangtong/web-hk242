<?php
// routes/api.php: Define routes
$router->addRoute('POST', '/auth/register', 'AuthController', 'register');
$router->addRoute('POST', '/auth/login', 'AuthController', 'login');
$router->addRoute('GET', '/users', 'UserController', 'index', 'AuthMiddleware');
$router->addRoute('GET', '/users/:id', 'UserController', 'show', 'AuthMiddleware');
