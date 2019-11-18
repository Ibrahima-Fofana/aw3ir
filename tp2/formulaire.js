
/* variable pour gerer le click*/

function validation(){

    document.getElementById("error").innerHTML ="";
    document.getElementById("error").style.display = "block";

    document.getElementById("resultat").style.display = "none";

    if (document.getElementById("nom").Value.length < 5) {
        document.getElementById("error").innerHTML = "Le champ du nom est obligatoire";
    }
    else if (document.getElementById("prenom").Value.length < 5) {
        document.getElementById("error").innerHTML = "Le champ prenom est obligatoire";
    }

    else if (document.getElementById("adresse").value.length < 5) {
        document.getElementById("error").innerHTML = "Le champ adresse est obligatoire";
    }

    else if (document.getElementById("mail").value.length < 5) {
        document.getElementById("error").innerHTML = "Le champ mail est obligatoire";
    }

    else {
        document.getElementById("error").style.display = "none";
        document.getElementById("resultat").style.display = "block";

        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;

    }

}