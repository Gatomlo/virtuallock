# virtualock

créer votre base de données vierge

Modifier les infos de DB dans .env

ligne 34 => DATABASE_URL="mysql://login:mdp@ipserveur/nomdelabase"

$ composer install

$php bin/console doctrine:schema:update --force

$ php bin/console doctrine:fixtures:load

Un compte admin a été créé.

*Login admin@admin.be
*MDP Administrator
