console.log("%c================ MINI MAGASIN ================", "color: #2563eb; font-size: 14px; font-weight: bold;");

console.group("1. Représentation d'un produit individuel");

const produit = {
    nom: "A",
    prix: 80.5,
    quantite: 5
};

const valeurStockProduit = produit.prix * produit.quantite;

console.log("Détails du produit :", produit);
console.log(`Valeur totale du stock pour "${produit.nom}" : ${valeurStockProduit.toFixed(2)} €`);

console.groupEnd();


console.group("2. Catalogue & Produits au-dessus du prix moyen");

const catalogue = [
    { nom: "B", prix: 35.00, quantite: 25 },
    { nom: "C", prix: 29.90, quantite: 8 },
    { nom: "D", prix: 14.50, quantite: 50 },
    { nom: "E", prix: 89.90, quantite: 12 },
    { nom: "F", prix: 45.00, quantite: 20 }
];

console.log("Catalogue complet des 5 produits :", catalogue);

const sommePrix = catalogue.reduce((somme, prod) => somme + prod.prix, 0);
const prixMoyen = sommePrix / catalogue.length;
console.log(`Prix moyen du catalogue : ${prixMoyen.toFixed(2)} €`);

console.log("Produits dont le prix dépasse le prix moyen :");
const produitsSuperieursMoyenne = catalogue.filter(prod => prod.prix > prixMoyen);
produitsSuperieursMoyenne.forEach(prod => {
    console.log(`- ${prod.nom} : ${prod.prix.toFixed(2)} € (> ${prixMoyen.toFixed(2)} €)`);
});

console.groupEnd();


console.group("3. Total des articles & Valeur globale du stock (reduce)");


const totalArticles = catalogue.reduce((total, prod) => total + prod.quantite, 0);

const valeurGlobaleStock = catalogue.reduce((total, prod) => {
    return total + (prod.prix * prod.quantite);
}, 0);

console.log(`Nombre total d'articles disponibles : ${totalArticles} unités`);
console.log(`Valeur globale du stock du magasin : ${valeurGlobaleStock.toFixed(2)} €`);

console.groupEnd();


console.group("4. Fonction de calcul de la valeur du stock d'un produit");

function calculerValeurStock(p) {
    return p.prix * p.quantite;
}

console.log(`Test 1 - "${catalogue[0].nom}" : ${calculerValeurStock(catalogue[0]).toFixed(2)} €`);
console.log(`Test 2 - "${catalogue[1].nom}" : ${calculerValeurStock(catalogue[1]).toFixed(2)} €`);
console.log(`Test 3 - "${catalogue[3].nom}" : ${calculerValeurStock(catalogue[3]).toFixed(2)} €`);

console.groupEnd();


console.group("5. Traitements génériques du catalogue avec Callbacks");


function traiterCatalogue(listeProduits, callback) {
    for (let i = 0; i < listeProduits.length; i++) {
        callback(listeProduits[i], i);
    }
}

console.log("--- Traitement A : Noms des produits ---");
traiterCatalogue(catalogue, (prod, index) => {
    console.log(`[Produit n°${index + 1}] Nom : ${prod.nom}`);
});

console.log("--- Traitement B : Prix des produits ---");
traiterCatalogue(catalogue, (prod) => {
    console.log(`Produit : ${prod.nom.padEnd(25)} | Prix : ${prod.prix.toFixed(2)} €`);
});

console.groupEnd();
