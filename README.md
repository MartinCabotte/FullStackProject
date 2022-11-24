# But du projet

Le but de ce projet est de développer une webapp qui aura pour but de detecter un avion sur une image que l'utilisateur va upload sur le site. Le modèle qui detecte les avions dans une image est déjà existant et sera utilisé en boite noire.

# Les besoins

Ce projet a deux volets qui sont les suivants : un volet BackEnd et un volet FrontEnd. 

## Le FrontEnd

Dans cette partie du projet, le but est de réaliser une application simple, avec un graphisme si possible minimaliste où les informations sont aisement repérables dans le but d'avoir une application simple à utiliser et facile à appréhender. Le design sera donc sobre et les imformations les plus importantes devront être bien visibles.

## Le BackEnd

Dans la partie BackEnd du projet, il va falloir connecter plusieurs containeurs Docker pour qu'ils puissent interagir entre-eux (que ce soit un serveur web, une base de données, la boite noire de detection d'avions...). Le BackEnd devra ensuite retourner le résultat de la detection à la partie FrontEnd pour notifier à l'utilisateur l'information voulue.

# Déroulé du projet et méthodologie

Le projet va se dérouler comme suit :

* Une première interface simpliste et minimaliste sera développée dans le but d'implémenter le necessaire au déroulé du code, à savoir un bouton qui va permettre à l'utilisateur de selectionner un fichier sur son ordinateur.
* Ensuite, la partie BackEnd sera réalisée avec le traitement de l'image.
* Enfin, nous reviendrons sur la partie FrontEnd pour que celle-ci soit ergonomique et esthétique.

# Problèmes rencontrés

Les problèmes rencontrés ne proviennent pas de la technique en elle-même. La majeure partie des problèmes proviennent de npm ainsi que des packages python utilisés qui ne fonctionnent pas correctement.

* Première problème, l'image Docker du modèle python "boite noire" qui detecte les avions ne se lance pas correctement avec une erreur au niveau des logs de l'image Docker sur le package *gitpython* qui s'installe mais demande un redemarrage du container (installation perdue lorsque le container s'eteint et donc le problème réapparait).
* Deuxième problème, le chargement du module requests qui ne fonctionne pas, bien qu'installé sur l'ordinateur et installé dans le Dockerfile, celui-ci ne se lance pas correctement empêchant l'utilisation du module requests de l'API. Je ne me suis pas attardé très longtemps sur ce problème car il intervient après l'initialisation du container "boite noire" (sans ce container, il est impossible de faire une requête donc je me suis plutôt attardé sur le premier problème).
