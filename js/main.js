
// function forma() {
//     var x = document.getElementById("first_name").value;
//      document.getElementById("copy").innerHTML = x ;
// }
// forma();


function produit(titre, phrase, description) {
    this.titre = titre;
this.phrase = phrase;
this.description = description;

}

function carte() {

    this.formu = function() {
  var titre = document.getElementById("first_name").value;
$("#card").append("<p>" + titre + "</p>");
var phrase = document.getElementById("last_name").value;
$("#card").append("<p>" + phrase + "</p>");
var description = document.getElementById("textarea1").value;
$("#card").append("<p>" + description + "</p>");
};

}
 var aclick = new carte ();
