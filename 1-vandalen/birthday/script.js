"use strict";

window.onload = function () {
    var birthday = function (date) {
        var day, month, year; // Variables for input
        var currentTime, birthTime; // Variables for calculations
        var today, bD;
        var oneDay = 24 * 60 * 60 * 1000;
        var validDate = true;
        var errorMsg;
        var dateFormat = /^\d{4}-\d{2}-\d{2}$/gi;

        if (String(date).match(dateFormat) == null) {
            throw new Error("Datumet är inte i det giltiga formatet (ÅÅÅÅ-MM-DD)!");
        }
        day = date.substr(8, 2);
        month = date.substr(5, 2);
        year = date.substr(0, 4);

        // Check the range of month
        if (month == 0 || month > 12) {
            throw new Error("Månaden stämmer inte!");
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Adjust for leap years
        //if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        //    monthLength[1] = 29;
        //}
        CalcLeapYear();
        // Check the range of the day
        if (day > 0 && day <= monthLength[month - 1]) {
            validDate = false;
        }
        else {
            throw new Error("Datumet stämmer inte!");
        }

        today = new Date();
        currentTime = today.getTime();
        bD = new Date(today.getFullYear(), month - 1, day);
        birthTime = bD.getTime();

        if (today.getDate() + today.getDate() === +month + +day) {
            alert("HAPPY BIRTHDAY TO YOU!\nHAPPY BIRTHDAY TO YOU!...");
            return Math.ceil((birthTime - currentTime) / oneDay);
        }
        else {
            if (birthTime > currentTime) {
                return Math.ceil((birthTime - currentTime) / oneDay);
            }
            else if (birthTime < currentTime) {
                bD = new Date(today.getFullYear() + 1, month - 1, day);
                birthTime = bD.getTime();
                return Math.ceil(Math.abs((currentTime - birthTime) / oneDay));
            }
        }

        function CalcLeapYear() {
            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                monthLength[1] = 29;
            }
        }
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
            var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
            var message;
            switch (answer) {
                case 0: message = "Grattis på födelsedagen!";
                    break;
                case 1: message = "Du fyller år imorgon!";
                    break;
                default: message = "Du fyller år om " + answer + " dagar";
                    break;
            }

            p.innerHTML = message;
        } catch (error) {
            p.classList.add("error"); // Växla CSS-klass, IE10+
            p.innerHTML = error.message;
        }
    });
};