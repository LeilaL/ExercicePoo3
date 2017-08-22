
// function forma() {
//     var x = document.getElementById("first_name").value;
//      document.getElementById("copy").innerHTML = x ;
// }
// forma();


// function produit(titre, phrase, description) {
//     this.titre = titre;
// this.phrase = phrase;
// this.description = description;
//
// }
var vider = " ";

function carte() {

    this.formu = function() {
  var titre = document.getElementById("first_name").value;
var phrase = document.getElementById("last_name").value;
var description = document.getElementById("textarea1").value;
$("#card").append("<div id='fiche'><p>" + titre + "</p>" + "<p>" + phrase + "</p>" + "<p>" + description + "</p></div>");

document.getElementById("first_name").value = vider;
document.getElementById("last_name").value = vider;
document.getElementById("textarea1").value = vider;
};

}
 var aclick = new carte ();
