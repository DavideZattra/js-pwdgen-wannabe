// User Name
var nameUser = prompt("Inserici il tuo nome");
// User Surname
var surnameUser = prompt("Inserisci il tuo cognome");
// User favourite color
var colourUser = prompt("Inserisci il tuo colore preferito");

// Random password formula
var randomPassword = nameUser + surnameUser + colourUser + '21';

// random password
document.getElementById("generatedPassword").innerHTML = randomPassword;