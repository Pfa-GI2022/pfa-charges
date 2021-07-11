# ChargeHoraire v1.0

![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg) ![forthebadge](http://forthebadge.com/images/badges/powered-by-coffee.svg)

ChargeHoraire est une application web qui facilite la tache d'affectation et de visualisation des activités pedagogiques au sein de l'ENSAO. Et qui offre aux chefs de départements, chefs de filières et aux professeurs la possibilité de consulter facilement leur charge horaire.

### Pré-requis

Pour commencer avec ChargeHoraire vous aurez besoin de:

- [NodeJS](https://nodejs.org/)
- [MySQL](https://www.mysql.com/fr/downloads/)
- [Git Bash](https://git-scm.com/downloads) (_ou un terminal supportant les commandes Git_)
- Navigateur Web

### Installation

1. Lancer la commande `git clone ` au sein du répertoire où vous voulez cloner l'application ChargeHoraire

   **OU** Vous Pouvez directement télécharger l'application sous format ZIP

2. Naviguez vers le répertoire `/app` avec la commande `cd` à l'intérieur d'un terminal supportant la commande npm et faites `npm i`. De meme pour le répertoire `server`.

3. Lancez la commande `npm install -g @angular/cli`

4. A l'aide du MySQL Workbench ou avec MySQL Command Line Client. Créez une base de données avec le nom "gestiondecharges".

### Configuration

Toute configuration concernant le serveur est faite dans le fichier `server/config/config.json`

## Démarrage

Pour démarrer l'application il faut lancer votre serveur en naviguant vers /server avec la commande `cd` et lancer la commande `node server`. Et dans un autre terminal naviguer vers le répertoire app et lancer la commande `ng serve`. Cela lancera l'application sur le port 4200 par défaut (`localhost:4200`)

## Fabriqué avec

- [Angular](http://angular.io) - Framework JS (front-end)
- [Express.js](https://expressjs.com/fr/) - Framework JS pour Node.js (back-end)
- [Sequelize](https://sequelize.org/) - ORM pour Node.js (back-end)
- [SemanticUI](https://semantic-ui.com/) - Framework CSS (front-end)
- [VSCode](https://code.visualstudio.com/) - Editeur de textes

## Auteurs

- **HAFID Mouaad** [@Mouaad-HAFID](https://github.com/Mouaad-HAFID)
- **RABHI Mohammed Amine** [@RABHI-Amine](https://github.com/RABHI-Amine)
- **EL HELFA Meryem** [@MeryemElh](https://github.com/MeryemElh)
- **BILAL Lina** [@LinaBilal](https://github.com/LinaBilal)
