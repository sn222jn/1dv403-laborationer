"use strict";

window.onload = function () {
    var secret;
    var count = 0;

    secret = Math.floor((Math.random() * 100) + 1);

    // I denna funktion ska du skriva koden för att hantera "spelet"
    var guess = function (number) {
        console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
        console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.

        var replyArr = ["won", "tooHigh", "tooLow", "outOfRange", "notANumber"];

        number = +number; // convert number(string) to number(int).         
        count += 1;; // Keeps track of number of guesses.        

        replyArr["won"] = [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
        replyArr["tooLow"] = [false, "Det hemliga talet är högre!"];
        replyArr["tooHigh"] = [false, "Det hemliga talet är lägre!"];
        replyArr["outOfRange"] = [false, "Talet är utanför intervallet 1 - 100"];
        replyArr["notANumber"] = [false, "Du måste ange ett tal!"];

        if (isNaN(number)) {
            count -= 1; // A guess that isn't a number doesn't count as a guess.
            return replyArr["notANumber"];
        }
        else if (number < 1 || number > 100) {
            count -= 1; // A guess outside the accepted range doesn't count as a guess.
            return replyArr["outOfRange"];
        }
        else {
            if (number === secret) {
                return replyArr["won"];
            }
            else if (number < secret) {
                return replyArr["tooLow"];
            }
            else if (number > secret) {
                return replyArr["tooHigh"];
            }
        }

    };

    // ------------------------------------------------------------------------------



    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#number");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"

        p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.

        input.value = ""; // Clears the text input box after each guess.

        if (answer[0] === true) {				// Om spelet är slut, avaktivera knappen.
            submit.disabled = true;
        }

    });
};