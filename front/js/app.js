//On créé ici une constante "list" qui va regrouper l'ID "items" de ma page HTML.J'ajoute à cette "items" la classe "menu1CSS" afin de travailler mon DOM
const list = document.getElementById("items");
//list.className = "article";

//Je vais maintenant créer les enfants de mes elements "listekanap" afin d'avoir les informations du produits

//Ici je crée donc la liste kanap avec une classe pour travailler mon CSS
const creerElement = function(data) {
    const kanap = document.createElement("DIV");
    //kanap.classList.add("kanap");
    kanap.className = "menu2CSS";

    //Ici je crée un lien Href personnalisé avec un l'ID du produit
    const link = document.createElement("A");
    link.href = "product.html?id=" + data._id;

    kanap.appendChild(link);

    //Ici, je crée une div avec la class "ImgContainer" sur lequelle je rajoute une ALT et source
    const kanapEnfant = document.createElement("DIV");
    kanapEnfant.classList.add("imgContainer");

    link.appendChild(kanapEnfant);

    const imgKanap = document.createElement("IMG");
    imgKanap.className = "menu3CSS";
    imgKanap.alt = data.name;
    imgKanap.src = data.imageUrl;

    kanapEnfant.appendChild(imgKanap);

    const nomKanap = document.createElement("p");
    nomKanap.innerText = data.name;
    nomKanap.className = "menu5CSS";

    link.appendChild(nomKanap);

    const prixKanap = document.createElement("p");
    prixKanap.innerText = numStr(data.price) + " €";

    nomKanap.appendChild(prixKanap);

    return kanap;
};

// Requete au serveur XMLHttpRequest grâce aux promesses Resolve et Reject

let kanapRequest = function (url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        };
      };
    };
    xhr.open("GET",url, true);
    xhr.send();
  });
};

// Si la promesse Resolve s'effectue correctement alors elle renvoie une response :

kanapRequest("http://localhost:3000/api/products").then(function (response) {
  const data = JSON.parse(response);
            data.forEach(function (d) {
            const element = creerElement(d);
            list.appendChild(element);
            console.log("Retour serveur: ", d);
            });

// Sinon la promesse Reject renvoi une error :             
}).catch(function (error) {
    alert("Désolé, nous avons un problème avec le serveur...")
    console.log("Problème serveur détecté !")
});


/*
function searchData() {
    fetch("http://localhost:3000/api/products")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(resultatAPI) {
            JSON.parse(resultatAPI);
            data.forEach(function(d) {
                    const element = createElement(d);
                    list.appendChild(element);
                })
                .catch(function(err) {
                    alert("Attention problème serveur...")
                });
        }; 

*/
/*
async function loadKanap() {
  const response = await fetch('http://localhost:3000/api/products');
  let resultatAPI = await response.json();
  let adrien = resultatAPI.forEach(function(d) {
      const element = creerElement(d);
      list.appendChild(element);
      return adrien;
  });
}
loadKanap();




        /*let data1 = "ca marche pas";

        function searchData() {
          fetch("http://localhost:3000/api/products")
          .then(function(res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(function(data) {
            return data;
          })
          .catch(function(err) {
            alert("Attention problème serveur...")
          });
        };

        searchData();
        console.log(data1);
        */
        /*
        const affichagenom = document.querySelector('#test1');
        const testcolor = document.querySelector("#test2");
        const testprix = document.querySelector("#test3");
        const testA = document.querySelector("#testB");

        const promise01 = fetch("http://localhost:3000/api/products");
        promise01
          .then((response)=> {
            const userData = response.json();
            userData.then((produit)=>{
              const name = produit[1].name;
              const photo=produit[1].imageUrl;
              const color = produit[1].colors;
              const descrip = produit[1].description;
              const prix =produit[1].price;
            
              affichagenom.innerHTML = name;
              testcolor.innerHTML = color;
              testprix.innerHTML = prix;
              

              const testC = produit.forEach(function(item, index, array) {
                console.log(item, index);
              });

              testA.innerHTML = testC;
              
            



            });
          })
          .catch((erreur)=>{
            console.log(erreur);
          })



          
        */