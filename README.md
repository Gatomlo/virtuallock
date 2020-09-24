# virtualock

créer votre base de données vierge

Modifier les infos de DB dans .env

ligne 34 => DATABASE_URL="mysql://login:mdp@ipserveur/nomdelabase"
```php
$ composer install

$php bin/console doctrine:schema:update --force

$ php bin/console doctrine:fixtures:load```php

Un compte admin a été créé.

*Login admin@admin.be
*MDP Administrator

En cas d'erreur, il est peut-être nécessaire de configurer .htaccess

Un dans la racine du projet

$SetEnv SHORT_OPEN_TAGS 0

$SetEnv REGISTER_GLOBALS 0

$SetEnv MAGIC_QUOTES 0

$SetEnv SESSION_AUTOSTART 0

$SetEnv ZEND_OPTIMIZER 1

$SetEnv PHP_VER 7_3

$RewriteEngine on

$RewriteBase /

$RewriteCond %{REQUEST_URI} !^/public/

$RewriteRule ^(.*)$ /public/$1 [L]

Et un autre dans public/

$RewriteEngine On

$RewriteCond %{REQUEST_FILENAME} !-f

$RewriteRule ^(.*)$ index.php [QSA,L]

Et il faut bien faire pointer l'url sur la racine du projet et pas sur public/
