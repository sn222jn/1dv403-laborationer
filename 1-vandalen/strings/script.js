"use strict";

window.onload = function () {

    // I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function (str) {
        var charArr;
        var charStr;

        charArr = str.split("");

        if (str.length === 0) {
            throw new Error("Du måste ange åtminstånde 1 bokstav!");
        }

        for (var i = 0; i < str.length; i += 1) {
            var c = charArr[i];
            if (c === "a" || c === "A") {
                c = "#";
            }
            if (c === c.toUpperCase()) {
                c = c.toLowerCase();
            }
            else if (c === c.toLowerCase()) {
                c = c.toUpperCase();
            }
            charArr[i] = c;
        }
        charStr = charArr.join("");

        return charStr;



    };
    // ------------------------------------------------------------------------------


    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#string");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        p.classList.remove("error");

        try {
            var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
            p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.
        } catch (error) {
            p.classList.add("error"); // Växla CSS-klass, IE10+
            p.innerHTML = error.message;
        }
        input.value = ""; // Clears the text input box after each guess.

    });



};