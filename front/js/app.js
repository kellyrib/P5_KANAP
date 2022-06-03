//On va chercher l'ID Items pour créer un liste avec pour class KanapCSS
const list = document.getElementById("items");
list.className = "items";

const createElement = function (data) {
  const articleKanap = document.createElement("DIV");
  //articleKanap.classList.add("kanapProduit");
 // articleKanap.className = "kanapCSS1";

  const link = document.createElement("A");
  link.href = "product.html?id=" + data._id;

  articleKanap.appendChild(link);

  const sousArticleKanap = document.createElement("Article");
  //elChild.classList.add("imgContainer");
  articleKanap.appendChild(sousArticleKanap);
  //el.appendChild(elChild);

  const imgKanap = document.createElement("IMG");
  //imgKanap.className = "kanapCSS2";
  imgKanap.alt = data.name;
  imgKanap.src = data.imageUrl;

  sousArticleKanap.appendChild(imgKanap);

  const nomKanap = document.createElement("h3");
  nomKanap.innerText = data.name;
  nomKanap.className = "productName";

  sousArticleKanap.appendChild(nomKanap);

  const descriptionKanap = document.createElement("p");
  descriptionKanap.innerText = data.description;
  descriptionKanap.className = "productDescription";

  sousArticleKanap.appendChild(descriptionKanap);

  return articleKanap;
};

const getKanap = async function () {
  try {
    let response = await fetch('http://localhost:3000/api/products')
    if (response.ok) {
        let data = await response.json()
        console.log(data)
        data.forEach(function (d) {
        const element = createElement(d);
        list.appendChild(element);
        console.log("Retour serveur: ", d);
        });
    }
    else {
      console.error('Retour du serveur : ', response.status)
    }
  }
    catch (e) {
      console.log(e)
    }
}

getKanap()