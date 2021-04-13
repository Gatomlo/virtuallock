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

## *Génération de lien dans Moodle*
# *Configuration*

Insérer le script suivant dans votrre thème en adaptant l'url.
```
<script>
  //VirtualLock
  var urlInstance = "url de votre instance de VirtualLock"
  window.addEventListener('message', function(e) {
    if(e.origin == urlInstance){
      var receivedMessage = e.data.split('=')
      var theLink = $('.autolink')
      theLink.each(function(index,oneLink){
        if($(oneLink).attr('title') === receivedMessage[1]){
          if(receivedMessage[0] == "moodle"){
            $('iframe').parent().html("<a href="+$(oneLink).attr('href')+"><div class='continuer linkFromVirtualLock'>"+receivedMessage[1]+"</div></a>")
          }
          if(receivedMessage[0] == "moodle-redirection"){
            window.location.href = $(oneLink).attr('href');
          }  
        }
      })    
    }
  }, false);
</script>
```
Ensuite, dans les paramètres de la plateforme,insérer les urls des plateformes Moodle avec lesquelles vous voulez utiliser VirtualLock.

# *Usage côté VirtualLock*
Insérer dans le text final du cadenas

Pour générer un lien cliquable => moodle=nomdelactivitemoodlealier

Pour rediriger => moodle-redirection=nomdelactivitemoodlealier

# *Usage côté Moodle*

Insérer dans un livre ou une étiquette l'iframe de votre cadenas.
Insérer le bout de code suivant:

```
<div hidden>nomdelactivitemoodlealier</div>
```
