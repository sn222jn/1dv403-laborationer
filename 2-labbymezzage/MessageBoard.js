"use strict";
var MessageBoard = {

    messages: [],


    init: function (e) {
        var txtArea = document.getElementById("txtArea1");
        var sndBtn = document.querySelector("button");
        var txtOut = document.querySelector("txtOut");
        var msgCnt = document.getElementById("msgCnt");
        var msgBox = document.getElementById("msgBox");
        var txtIn;
        var messageId;
        var newDiv;
        var timeDis;
        var imgClock;
        var imgClose = document.getElementById("imgClose");

        txtArea.onkeypress = function (e) {
            //if (!e) var e = window.event;
            if (e.keyCode === 13 && e.shiftKey) {
                return "\r\n";
            }
            else if (e.keyCode === 13) {
                readMessage();

                countMessages();

                displayMessages();

                txtArea.value = "";
                
            }
            //else if (e.shiftKey) {
            //    return false;
            //}


        }

        sndBtn.addEventListener("click", function (e) {


            readMessage();

            countMessages();

            displayMessages();

            txtArea.value = "";
        }, false);





        // Function that reads message input and stores it in the messages array
        function readMessage() {
            // Create message and push to messages array
            txtIn = new Message(txtArea.value, new Date());
            MessageBoard.messages.push(txtIn);
            messageId = MessageBoard.messages.length;

        }

        // Function that counts messages and displays the count above the textarea
        function countMessages() {
            // Message counter
            msgCnt.innerHTML = "Antal meddelanden: ";
            msgCnt.appendChild(document.createTextNode(MessageBoard.messages.length));

        }

        // Function that calls displayMessage function in order to display all messages
        function displayMessages() {
            document.getElementById("msgBox").innerHTML = "";

            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                displayMessage(i);
            }

        }

        function removeMessage(messageId) {
            MessageBoard.messages.splice(imgClose.id, 1);
        }

        // Function that reads messages from the messages array and displays them above the textarea
        function displayMessage(messageId) {

            msgBox = document.getElementById("msgBox");
            newDiv = document.createElement("div");
            txtOut = document.createElement("p");
            timeDis = document.createElement("p");
            imgClock = new Image();
            imgClose = new Image();

            // Image attributes
            imgClock.src = "clock.png";
            imgClock.id = "imgClock";
            imgClock.alt = "Clock";
            imgClose.src = "close.png";
            imgClose.id = "imgClose";
            imgClose.alt = "Close";


            // Image style
            imgClose.style.cssFloat = "right";
            imgClock.style.cssFloat = "right";
            imgClose.style.margin = ".1em .1em .1em .1em";
            imgClock.style.margin = ".1em .1em .1em .1em";


            // Div
            newDiv.style.margin = ".5em 1.5em .5em 1.3em";
            newDiv.style.width = "auto";
            newDiv.style.minWidth = "46.5em";
            newDiv.style.minHeight = "2em";
            newDiv.style.border = "1px solid gray";
            newDiv.style.backgroundColor = "#b9e2ea";
            newDiv.style.cssFloat = "left";
            newDiv.style.padding = ".5em 0 0 .5em";
            newDiv.id = MessageBoard.messages.length;

            // Text style
            txtOut.style.width = "80%";
            txtOut.style.paddingBottom = ".3em";
            txtOut.style.margin = "0 20% 0 0";
            txtOut.style.fontFamily = "Verdana";
            txtOut.style.textAlign = "left";

            // Time style
            timeDis.style.width = "80%";
            timeDis.style.cssFloat = "left";
            timeDis.style.margin = "0 auto";
            timeDis.style.fontSize = ".8em";

            txtOut.appendChild(document.createTextNode(txtIn.getText())); // change to getHTMLText
            timeDis.appendChild(document.createTextNode(txtIn.getDateText()));
            msgBox.appendChild(newDiv);

            newDiv.appendChild(timeDis);
            newDiv.appendChild(imgClose);
            newDiv.appendChild(imgClock);
            newDiv.appendChild(txtOut);


            imgClose.onclick = function () {
                var x;
                var r = confirm("\u00C4" + "r du s" + "\u00E4" + "ker att du vill ta bort meddelandet?");
                if (r == true) {
                    removeMessage();
                    displayMessages();
                    countMessages();
                }
                else {
                    return false;
                }
            
            }

            imgClock.onclick = function () {
                alert("Inl" + "\u00E4" + "gget skapades " + txtIn.getDateText());
            }


        }
    }



};
window.onload = MessageBoard.init;

