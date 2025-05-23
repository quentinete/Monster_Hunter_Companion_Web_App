# Monster_Hunter_Companion_Web_App
## 🎯 Projet : Monster Hunter Companion Web App
### 🧩 Objectif :
Créer une application web qui permet aux joueurs de rechercher des monstres, équipements et quêtes, et de planifier leur stuff idéal via les données des API Monster Hunter.

## 🔧 Fonctionnalités proposées :
### 1. 🔍 Recherche de monstres
- **Liste des monstres avec filtres (élément, faiblesse, zone).**

- **Affichage des informations détaillées : faiblesses, habitats, objets à looter.**

### 2. 🛡️ Générateur de build
- **L'utilisateur peut choisir une arme (ex: GS, Bow, etc.) et le système suggère une armure adaptée selon les compétences.**

- **Utilise les données d’équipement et compétences de l’API.**

### 3. 🎯 Planificateur de chasse
- **Sélectionner un monstre → voir les quêtes disponibles pour le chasser → enregistrer une « To-Do list ».**

- **Ajouter des rappels : "Il me manque encore 2 cornes de Rathalos pour mon arme !"**

### 4. 📊 Statistiques
- **Nombre de monstres, d’armes, d’armures dans le jeu.**

- **Répartition par type, rareté, élément, etc.**

## 🧱 Stack technique recommandée :
| Élément             | Tech suggérée                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------- |
| Frontend            | React.js ou Vue.js                                                                          |
| Backend (si besoin) | Express.js ou Django (API proxy/cache)                                                      |
| API                 | [mhw-db.com](https://mhw-db.com/) ou [MHAPI GitHub](https://github.com/StepfenShawn/mh-api) |
| Base de données     | (optionnelle) MongoDB ou SQLite pour favoris/sauvegardes                                    |
| Auth (optionnel)    | Auth0, Firebase ou simple JWT/localStorage                                                  |


## 🖼️ Exemples d’écrans :
- **Page d’accueil avec les derniers monstres ajoutés.**

- **Page "Monstres" avec tableau et filtres.**

- **Page "Créer mon build".**

- **Page "Mes quêtes planifiées".**

## 🚀 Bonus :
- **Intégrer une carte interactive des zones (si disponible dans l’API).**

- **Ajout de notifications (ex: "Une quête événementielle est dispo !").**

&nbsp;


# Solution

 
## 1. technologie utiliser
- **visual-studio**  
    - **Frontend** 
        - **html** 
        - **css** 
        - **js**  
    - **Backend** 
        - **node js**  
        - **API de MH (En ligne)** 
---

## 1.1 Installation via git clone 

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/quentinete/Monster_Hunter_Companion_Web_App.git
   ```
2. se rendre de le fichier monster-hunter-companion (adapter le chemin a votre configuration) :
   ```bash
   cd monster-hunter-companion
   ```
3. Installer les dépendances :
   ```bash
    npm install
   ```
4. Lancer le projet avec la commande :
   ```bash
    npm start
   ```
5. Projet en Cours !!!


