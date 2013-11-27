"use strict";

window.onload = function(){

	
	var birthday = function(date){
	    var validDate = /^\d{4}-\d{2}-\d{2}$/;
	    console.log(validDate);


	    var dateArr = date.split("-");

	    console.log(dateArr[2]);
	    // Din kod här.









    var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
    //var returnval=false
    //if (!validformat.test(input.value))
    //    alert("Invalid Date Format. Please correct and submit again.")
    //else{ //Detailed check for valid date ranges
    //    var monthfield=input.value.split("/")[0]
    //    var dayfield=input.value.split("/")[1]
    //    var yearfield=input.value.split("/")[2]
    //    var dayobj = new Date(yearfield, monthfield-1, dayfield)
    //    if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
    //        alert("Invalid Day, Month, or Year range detected. Please correct and submit again.")
    //    else
    //        returnval=true
    //}
    //if (returnval==false) input.select()
    //return returnval








	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};