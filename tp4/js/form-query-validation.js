$(document).ready(function () {

    $("#gps").on("click", function (event) {
         getLocation();
    });

    // interception du "submit" du formulaire
    $("form").on("submit", function (event) {
        event.preventDefault();
        // votre code de vérification du formulaire

        console.log('validation marche bien');
        $('#myModal').modal("show");


        var error = "";
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var datedenaissance = $("#date").val();
        var adresse = $("#adresse").val();
        var mail = $("#mail").val();


        if (nom.length < 5) {
            error += "nom, ";
        }
        if (prenom.length < 5) {
            error += "prenom, ";
        }
        if (datedenaissance.length < 5) {
            error += "date, ";
        }
        if (adresse.length < 5) {
            error += "adresse, ";
        }
        if (mail.length < 5) {
            error += "mail, ";
        }

        if (error == "") {
            $(".modal-title").text('Bienvenue ' + nom);
          //  $(".modal-body").html('vous êtes nés le ' + datedenaissance + ' et vous habitez : ' + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse + '&zoom=14&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> </img> </br>' + adresse);
        }
        else {
            $(".modal-title").text('Message Modal');
            $(".modal-body").html('les champs ' + error + ' doivent être remplis');
        }

        $('#myModal').modal("show");
    });

});

