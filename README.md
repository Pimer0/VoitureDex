# VoitureDex
Humble projet applicatif mêlant pokédexe et voitures. Tu vas voire c'est cool 👍

- - -

Projet applicatif en React Natif, afin d’appliquer les concepts vu en cours, tel que l’appel API, l’UI/UX, orienté composant, le système de routage etc..

#### But de l’application:

Le but d’un pokedex, c’est de pouvoir ajouter à notre liste de pokémon rencontré les pokémons que l’on croise et qui n’y sont pas encore. Mais, malheureusement, dans notre monde les pokémon n’existe pas. 

Par contre, les voitures elles, sont bien réels ! Alors voila le but de notre app: permettre à l’utilisateur d’effectuer une recherche dans une searchBar, qui va taper dans une API de voitures (ou avec la plaque d’immatriculation) et va retourner le modèle exact aperçu. Ce modèle de voiture sera ensuite envoyé dans une nouvelle page, qui contiendra tout les véhicules rencontrés.

Il est intéressant de pouvoir rajouter une feature de prise de photo du véhicule rencontré, à voir la faisabilité.

#### Point technique:

Nous allons utiliser l’api : 

utiliser l'API "SIV Mirror" fournie par NHTSA (National Highway Traffic Safety Administration) des États-Unis, qui fournit des informations similaires pour les véhicules immatriculés aux États-Unis. Cependant, cela ne couvrirait pas les véhicules immatriculés en France.

ou https://vehicledatabases.com/license-plate-api

qui fonctionne comme ceci: 

On vient renseigner la licence plate, elle nous ressort toutes les infos du véhicule. On en prendra que 3 : Marque, model et logo.

#### Nécessaire:

Une représentation visuel du format de plaque à rentrer (format US/UK).
Une regle pour le format accepté.
Un avertissement sur le fait que pour le moment seule les plaque US UK sont acceptées.
Gestion de la liste avec du cache géré par React Native.


#### Structure de l’app:

App qui contient deux pages :
- Home qui contient une searchBar, une vue qui affiche les infos du véhicule recherché avec la plaque d’immatriculation, un bouton “ajout du véhicule à ma liste” qui au clique envoie les infos obtenues via l’api à une liste de véhicules “vus”, et ouvre la page contenant cette même liste.
- List qui aura un bouton “retour”, pour revenir sur la Home, et une liste déroulante contenant comme dit précédemment la liste des véhicules vus.
Tout élément contenu dans la page sera un composant. 


#### Les maquettes:

![[Capture d’écran 2024-05-16 à 16.27.27.png]]




