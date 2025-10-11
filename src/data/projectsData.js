import quiz1 from "../assets/quiz1.png";
import quiz2 from "../assets/quiz2.png";
import quiz3 from "../assets/quiz3.png";
import quiz4 from "../assets/quiz4.png";
import mobile1 from "../assets/mobile1.png"
import mobile2 from "../assets/mobile2.png"
import mobile3 from "../assets/mobile3.png"
import mobile4 from "../assets/mobile4.png"
import mobile5 from "../assets/mobile5.png"
import mobile6 from "../assets/mobile6.png"
import mobile7 from "../assets/mobile7.png"
import mobile8 from "../assets/mobile8.png"
import mobile9 from "../assets/mobile9.png"
import mobile10 from "../assets/mobile10.png"
import mobile11 from "../assets/mobile11.png"
import mobile12 from "../assets/mobile12.png"
import jsweb1 from "../assets/jsweb1.png"
import jsweb2 from "../assets/jsweb2.png"
import jsweb3 from "../assets/jsweb3.png"
import jsweb4 from "../assets/jsweb4.png"
import jsweb5 from "../assets/jsweb5.png"
import jsweb6 from "../assets/jsweb6.png"
import recette1 from "../assets/recette1.png"
import recette2 from "../assets/recette2.png"
import recette3 from "../assets/recette3.png"
export const projects = [
    {
        name: "Quiz App",
        description: 'Une application de quiz interactive créée avec React. L’utilisateur peut répondre à une série de questions et voir son score final accompagné d’une animation de confettis. L’application est structurée en trois pages — Accueil, Quiz et Résultats — grâce à React Router, et utilise des CSS Modules pour un style clair et modulable. Les données du quiz sont stockées séparément dans un fichier JavaScript pour une meilleure maintenabilité.',
        techs: ["HTML", "CSS", "JavaScript", "React"],
        screenshots: [quiz1, quiz2, quiz3, quiz4]
    },
    {
        name: "IGA App",
        description: "Cette application Android reproduit le fonctionnement d’un supermarché IGA. Elle comprend deux interfaces distinctes : une pour l’administrateur et une pour le client. L’administrateur peut ajouter, modifier ou supprimer des produits, tandis que le client peut créer un compte, se connecter, consulter les produits par catégorie (viande, légumes, boissons, pâtisserie) et les ajouter à son panier. Le panier affiche le nom, le prix et le total des produits, avec la possibilité de modifier les quantités. Toutes les données — produits, clients et achats — sont gérées via une base de données SQLite. Lors d’un achat, les informations du client, les produits sélectionnés et la date d’achat sont automatiquement enregistrés. L’application inclut également une barre de navigation commune aux deux profils pour une utilisation fluide.",
        techs: ["Java (Android Studio)"],
        screenshots: [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6, mobile7, mobile8, mobile9, mobile10, mobile11, mobile12]
    },
    {
        name: "Site Web d’électroménager",
        description: "Développement d’un site web d’électroménager intégrant un système d’authentification et une gestion différenciée des rôles. Après la connexion, l’utilisateur est redirigé vers l’espace correspondant à son profil : administrateur ou client. L’administrateur peut gérer les produits et les comptes clients (ajout, modification, suppression), tandis que le client peut consulter les produits disponibles, les ajouter à son panier et en ajuster la quantité ou les supprimer. Les informations concernant les administrateurs, les clients et les produits sont stockées dans une base de données MongoDB.",
        techs: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
        screenshots: [jsweb1, jsweb2, jsweb3, jsweb4, jsweb5, jsweb6]
    },
    {
        name: "Recettes Faciles",
        description: "« Recettes Faciles » est un site de gestion de recettes simple et pratique. Les utilisateurs peuvent ajouter de nouvelles recettes et utiliser la barre de recherche pour filtrer les recettes par titre ou par ingrédients. Les données sont stockées localement dans le navigateur grâce à LocalStorage.",
        techs: ["HTML", "CSS", "TypeScript", "Angular"],
        screenshots: [recette1, recette2, recette3]
    }
]