let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("Id de l'URL dynamique: ", id);

const createElement = function (data) {
   // const articleKanap = document.createElement("DIV");
    //articleKanap.classList.add("kanapProduit");
   // articleKanap.className = "kanapCSS1";
   
    //const link = document.createElement("A");
    //link.href = "product.html?id=" + data._id;
    //articleKanap.appendChild(link);
  
    //const sousArticleKanap = document.createElement("Article");
    //elChild.classList.add("imgContainer");
    //link.appendChild(sousArticleKanap);
    //el.appendChild(elChild);
  
    
    const classImg = document.getElementsByClassName('item__img');
    const imgKanap = document.createElement("IMG");
    //imgKanap.className = "kanapCSS2";
    imgKanap.alt = data.name;
    imgKanap.src = data.imageUrl;
  
    classImg.appendChild(imgKanap);
  
    /*const nomKanap = document.createElement("h3");
    nomKanap.innerText = data.name;
    nomKanap.className = "productName";
  
    sousArticleKanap.appendChild(nomKanap);
  
    const descriptionKanap = document.createElement("p");
    descriptionKanap.innerText = data.description;
    descriptionKanap.className = "productDescription";
  
    sousArticleKanap.appendChild(descriptionKanap);*/
  
    return articleKanap;
  };


const getKanap = async function () {
    try {
      let response = await fetch('http://localhost:3000/api/products/' + id)
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