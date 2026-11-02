"use strict"; // (slide 52)

// 1. Déclaration d'un Tableau simple (slide 39)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];


// 2. Déclaration d'un Objet JavaScript (slide 40)
const objetEtudiant = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
};


// 3. Déclaration d'un Tableau d'Objets (slide 41)
const tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];


// Fonctions f1, f2, f3 (slide 47)
// Affichage console.log (slide 34)


// f1 : Parcourt le tableau simple avec une boucle (slide 45)
function f1() {
    for (let i = 0; i < tableauEtudiants.length; i++) {
        console.log(tableauEtudiants[i]);
    }
}

// f2 : Affiche directement l'objet étudiant (slide 40)
function f2() {
    console.log(objetEtudiant);
}

// f3 : Parcourt le tableau d'objets et concatène nom-prenom-age (slides 41 et 45)
function f3() {
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) {
        const etudiant = tableauObjetsEtudiants[i];
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}

// Alias de sécurité F1, F2, F3 (majuscule / minuscule)
const F1 = f1;
const F2 = f2;
const F3 = f3;
