"use strict"; // Mode strict obligatoire (slide 52 du cours)


// Données Students sous forme de Tableau d'Objets (slide 41 du cours)
const Students = [
    { id: 1000, prenom: "JOHN", nom: "DOE", note: 14.5 },
    { id: 2000, prenom: "BOB", nom: "CARLTON", note: 7.1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH", note: 13.3 }
];


// Fonction B : Prend un seul paramètre de type float et retourne un booléen
// (vu dans les slides 42 et 47 du cours)
function B(moyenne) {
    // Opérateur de comparaison relationnelle >= (vu dans le slide 42 du cours)
    // Retourne true si moyenne >= 10.0, sinon false
    return moyenne >= 10.0;
}


// Fonction A : Appelée au clic sur le bouton Délibération
// Parcourt les étudiants, appelle la fonction B et affiche le résultat
// (slides 43, 45 et 47 du cours)

function A() {
    // Boucle for pour parcourir le tableau un par un (slide 45 du cours)
    for (let i = 0; i < Students.length; i++) {
        const student = Students[i];
        
        // Récupération de l'identifiant et de la note (float)
        const id = student.id !== undefined ? student.id : student[0];
        const note = student.note !== undefined ? student.note : student[3];

        // La fonction A appelle la fonction B en lui passant la note (float)
        const estAdmis = B(note);

        // Condition if / else (slide 43 du cours)
        // Affichage un par un avec console.log() (slide 34 du cours)
        if (estAdmis) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}

// Alias de sécurité
const deliberation = A;
