# virtualock
## *Requis*
Php 7.3 ou supérieur

MYSQL 5.6

Composer

## *Installation*
Créer votre base une base de données vierge

Modifier les infos d'accès à la DB dans .env

 ligne 34 => DATABASE_URL="mysql://login:mdp@ipserveur/nomdelabase"

Lancer l'installation via console (ssh)
```
$ composer install

$ php bin/console doctrine:schema:update --force

$ php bin/console doctrine:fixtures:load

$ php bin/console cache:clear --env=prod
```

Un compte admin a été créé.

*Login admin@admin.be
*MDP administrator
