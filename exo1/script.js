"use strict"; // (slide 52)


// Déclaration des variables et constantes (slides 36 et 38)

const nom = "John";   // Type String (slide 38)
const prenom = "Doe";     // Type String (slide 38)
const age = 30;           // Type Number entier (slide 38)
const note = 15;          // Type Number entier (slide 38)
const pi = 3.14;          // Type Number décimal / constante (slides 36 et 38)


// Définition des fonctions f1 à f6 (slide 47)
// Sortie autorisée uniquement via console.log() (slide 34)


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
