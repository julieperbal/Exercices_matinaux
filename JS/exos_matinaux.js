// EXERCICE 1

// Création de mon tableau tabImg
var tabImg=['bleu.png','jaune.png','vert.png','rouge.png'];
DIV=document.getElementById('div');
button=document.getElementById('button');
var tab=[];

// Parcours du tableau
// for (var i = 0; i < tabImg.length; i++) {
  // Afficher dans la div le tableau
  // div.innerHTML += "<img src=" + tabImg[i] +">";
// }

// Supprimer la dernière case du tableau
// function supprimer(){
//   tabImg.pop(); // Supprimer le dernier élément du tableau

    // div.innerHTML = "";// effacer toutes les données précédentes
    // Ré-afficher le tableau mis à jour
//     for (var i = 0; i < tabImg.length; i++) {
//       div.innerHTML += "<img src=" + tabImg[i] +">";
//     }
// }
// button.onclick=supprimer;

// EXERCICE 2
// Fonction qui s'active lorsqu'on clique sur le bouton
function ajouter(){
  var texte=document.getElementById("texte").value;
  // Création de la variable texte en valeur

  if (texte <= -2 ) {// Si texte ets inférieur ou égal à -2
    DIV.innerHTML += "<img src=" + tabImg[0] +">";
    // Alors affiche la premiere image du tableau
  }
  else if (texte>= -1 && texte <=2) {
    DIV.innerHTML += "<img src=" + tabImg[1] +">";
  }
  else if (texte > 3) {
    DIV.innerHTML += "<img src=" + tabImg[2] +">";
  }
  else {
    DIV.innerHTML += "<img src=" + tabImg[3] +">";
  }
}

// Nouvelle fonction pour ajouter les données dans un tableau
function adArray(){
  // Variable qui prend la valeur de la donnée utilisateur
  var texte=document.getElementById("texte").value;

    if (texte != null){ // si l'entrée n'est pas vide
      tab.push(texte);// Alors ajoute la au tableau Tab
      // et affiche la dans l'id "Afficher" de la page HTML
      document.getElementById("afficher").innerHTML +=" "+texte+",";
    }
// Afficher la taille du tableau, le nombre d'entrée dans le tableau
document.getElementById("taille").innerHTML = tab.length;
}
