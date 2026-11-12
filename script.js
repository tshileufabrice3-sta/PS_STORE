
// Initialisation du panier
let panier = [];

// Fonction pour ajouter un produit
function ajouterAuPanier(nom, prix) {

    panier.push({
        nom: nom,
        prix: prix
    });

    afficherPanier();
}

// Fonction pour afficher le panier
function afficherPanier() {

    const liste = document.getElementById("liste-panier");
    const nombre = document.getElementById("nombre-articles");
    const total = document.getElementById("total-panier");

    // Vider la liste avant de la reconstruire
    liste.innerHTML = "";

    let montantTotal = 0;

    panier.forEach(function(produit) {

        const article = document.createElement("li");

        article.textContent =
            produit.nom + " - " + produit.prix + " $";

        liste.appendChild(article);

        montantTotal += produit.prix;
    });

    nombre.textContent = panier.length;
    total.textContent = montantTotal;
}
