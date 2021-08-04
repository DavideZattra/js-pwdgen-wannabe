// User Name
var nameUser = prompt("Inserici il tuo nome");
// User Surname
var surnameUser = prompt("Inserisci il tuo cognome");
// User favourite color
var colourUser = prompt("Inserisci il tuo colore preferito");

// Random number
var randomNumber = parseInt(Math.random() * 1000);

// Random password formula
var randomPassword = nameUser + surnameUser + colourUser + randomNumber;

// random password
document.getElementById("Generated-Password").innerHTML = randomPassword;