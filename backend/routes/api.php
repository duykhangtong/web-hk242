<?php
// routes/api.php: Define routes
// Auth routes
$router->addRoute('POST', '/auth/register', 'AuthController', 'register');
$router->addRoute('POST', '/auth/login', 'AuthController', 'login');

// User routes
$router->addRoute('GET', '/users', 'UserController', 'index', 'AuthMiddleware');
$router->addRoute('GET', '/users/:id', 'UserController', 'show', 'AuthMiddleware');

// Intro routes
$router->addRoute('GET', '/intro', 'IntroContentController', 'getAllIntroContent');
$router->addRoute('GET', '/intro/:key', 'IntroContentController', 'show');

// Intro routes for admin
$router->addRoute('PUT', '/admin/intro', 'IntroContentController', 'update', 'AdminMiddleware');
$router->addRoute('POST', '/admin/intro/image', 'IntroContentController', 'uploadImage', 'AdminMiddleware');
