// Récupération de l'id produit dans l'URL dynamique ou query

let params = new URLSearchParams(document.location.search);
let idarticle = params.get("id");
console.log("Id de l'URL dynamique: ", idarticle);

let nomId = idarticle;
let kanap;


// Requete pour obtenir les informations du serveur

let article = () => {
    let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              kanap = JSON.parse(this.responseText);
              console.log("Retour serveur pour un produit: ", kanap);
              affichageProduit();
          }
      };
      request.open("GET", "http://localhost:3000/api/products/" + nomId);
      request.send();
  };

// Chargement dynamique du kanap dans la page produit
window.addEventListener("load", article);

// Création de la variable panier qui prendra les informations de la catégorie "panier" du localstorage
let panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
localStorage.setItem("panier", JSON.stringify(panier));
console.log("Ajout au Panier de l'article: ", panier);

 // Affichage du produit sur la page
function affichageProduit() {
    
    //let article = document.getElementById("article");
    //article.className = "menuproduit";
        
        let image = document.getElementsByClassName('item__img');
        image.src = kanap.imageUrl;
        console.log("la source de l'image est " + image.src);
        //image.className = "menu3CSS";
        //id =  kanap.nomId;

    //let div = document.createElement("div");
        //div.className = "pos";
        let nom = document.getElementById("title");
        nom.textContent = kanap.name;
        //nom.id = "Nom du canapé";
    
        //let prix = document.createElement("h4");
        //prix.textContent = "Prix :";
        let price = document.getElementById("price");
        price.textContent = numStr(kanap.price);
    
        //let desc = document.createElement("h4");
        //desc.textContent = "Description :";
        let description = document.getElementById("description");
        description.textContent = kanap.description;

    // Choix de la couleur
    //let label = document.createElement("label");
    //label.textContent = "couleurs : ";
    let color = document.getElementById("colors");
    color.textContent = kanap.colors;
    color.id = "colors";
    let colors = kanap.color;
    //choix.id = "couleurs";

    // Création d'une boucle For pour afficher la liste déroulante des couleurs en options sur les canapés
    for (let i = 0; i < colors.length; i++) {

    let option = document.createElement("option");
    option.textContent = kanap.color[i];
    option.id = "couleurs";
    //colors.appendChild(option);
    };

    // Création du bouton "Ajouter au panier"
    ajoutPanier = document.getElementById ("addToCart");
    ajoutPanier.id = "stockage";
    ajoutPanier.textContent = "Ajouter au panier";
    //ajoutPanier.className = "pan1";

    ajoutPanier.addEventListener("click", function() {
            alert("Vous avez ajouté " + kanap.name + " à votre panier");
            console.log("L'article "+ kanap.name + "a été ajouté au panier");
            ajoutLocalStorage();
            nombreProduit();
            prixTotal();

        // Mise a jour du nombre de produit 
        function nombreProduit(){  
            let nombreProduit = localStorage.getItem("qté");  
            nombreProduit = parseInt(nombreProduit);
            
            if (nombreProduit){
                localStorage.setItem("qté", nombreProduit + 1);
                document.querySelector (".totalQté").textContent = nombreProduit + 1;
            } else{
                localStorage.setItem("qté", 1);
            document.querySelector (".totalQté").textContent = 1;
            };
        };
        // Mise a jour du nombre de produit dans l'objet "qté:" dans le localstorage 
        function ajoutLocalStorage(){
            let panier = localStorage.getItem("panier");
            panier = JSON.parse(panier);
            kanap.qté = 0;
            
            if(panier != null){

                if(panier[kanap.name] === undefined) {
                    panier = {...panier, [kanap.name] : kanap}
                }
                panier[kanap.name].qté += 1;
            } else {
                panier = {[kanap.name] : kanap}
                panier[kanap.name].qté += 1;
            }
            localStorage.setItem("panier", JSON.stringify(panier));
        };

    // Fonction pour calculer la somme des prix dans la division "prixTotal" du localstorage
        function prixTotal(){
            let price = parseInt(kanap.price);
            let prixDuPanier = JSON.parse(localStorage.getItem("prixTotal"));
            
            if(prixDuPanier != null){
                localStorage.setItem("prixTotal", prixDuPanier + price);
            } else {
                localStorage.setItem("prixTotal", price);
            };
        };

    })
    // Chargement dynamqiue du DOM
    produit.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(desc);
    div.appendChild(description);
    div.appendChild(label);
    div.appendChild(colors);
    div.appendChild(ajoutPanier)
};