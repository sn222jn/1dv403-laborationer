"use strict";

window.onload = function () {
    var secret;

    secret = Math.floor((Math.random() * 100) + 1);
    //Math.floor(Math.random() * (max - min) + 1) + min;
    //Math.floor(Math.random() * (100 - 1) + 1) + 1;

    // I denna funktion ska du skriva koden för att hantera "spelet"
    var guess = function (number) {
        console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
        console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.

        var count = 0;
        var answer = [];
        var replyArr = [];

        replyArr[0] = [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."];
        replyArr[1] = [false, "Det hemliga talet är högre!"];
        replyArr[2] = [false, "Det hemliga talet är lägre!"];
        replyArr[3] = [false, "Talet är utanför intervallet 0 - 100"];

        //arr[0] = [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."];
        //arr[1] = [false, "Det hemliga talet är högre!", "Det hemliga talet är lägre!", "Talet är utanför intervallet 0 - 100"];


        //do {
            count += 1;
            if (isNaN(number)) {
                return "Du måste ange ett tal!";
            }

            else if (number < 1 || number > 100) {
                answer[1] = replyArr[3];
                return answer[1];
            }
            else {
                if (number === secret) {
                    answer[0] = replyArr[0];
                    return answer[0];
                }
                else if (number < secret) {
                    answer[1] = replyArr[1];
                    return answer[1];
                }
                else if (number > secret) {
                    answer[1] = replyArr[2];
                    return answer[1];
                }
              
            }

            number.reset();

        //} while (number != secret);

        guess();

        



    };

    // ------------------------------------------------------------------------------



    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#number");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
        p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

        if (answer[0] === true) {				// Om spelet är slut, avaktivera knappen.
            submit.disabled = true;
        }

    });
};