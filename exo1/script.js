"use strict"; // (slide 52 du cours)


// Déclaration des variables et constantes (vu dans les slides 36 et 38 du cours)

const nom = "John";   // Type String (vu dans le slide 38)
const prenom = "Doe";     // Type String (vu dans le slide 38)
const age = 30;           // Type Number entier (vu dans le slide 38)
const note = 15;          // Type Number entier (vu dans le slide 38)
const pi = 3.14;          // Type Number décimal / constante (vu dans les slides 36 et 38)


// Définition des fonctions f1 à f6 (vu dans le slide 47 du cours)
// Sortie autorisée uniquement via console.log() (vu dans le slide 34 du cours)


// Fonction f1 : Affiche le Nom dans la console
function f1() {
    console.log(nom);
}

// Fonction f2 : Affiche le Prénom dans la console
function f2() {
    console.log(prenom);
}

// Fonction f3 : Affiche Nom & Prénom concaténés avec un tiret
function f3() {
    console.log(nom + "-" + prenom); // Concaténation de chaînes de caractères
}

// Fonction f4 : Affiche l'Age dans la console
function f4() {
    console.log(age);
}

// Fonction f5 : Affiche la Note dans la console
function f5() {
    console.log(note);
}

// Fonction f6 : Affiche la valeur de Pi dans la console
function f6() {
    console.log(pi);
}

// Alias pour compatibilité avec l'énoncé (F1, F2... majuscules ou minuscules)
const F1 = f1;
const F2 = f2;
const F3 = f3;
const F4 = f4;
const F5 = f5;
const F6 = f6;
