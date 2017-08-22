
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
      var x = document.getElementById("first_name").value;
       document.getElementById("copy").innerHTML = x ;
    };

}
formu();
