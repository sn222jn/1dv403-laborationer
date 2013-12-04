"use strict";
var MessageBoard = {
    
    messages: [],

    init: function (e) {
        var txt = document.getElementsByTagName("textarea").value;
        var sndBtn = document.querySelector("button");       
        sndBtn.addEventListener("click", function () {
            
            var msg = new Message(txt, new Date());
            MessageBoard.messages.push(msg)
            console.log(MessageBoard.messages[0].value);

        }, false);
        //alert("Welcome to a new world!")
        
        //var mess = new Message("This is a new beginning", new Date());
        //var mess2 = mess;
        //alert(mess);
        ////alert(mess.getText());
        ////mess.setText("But we have a lot to do!");
        ////alert("before the change " + mess);

        //MessageBoard.messages.push(mess);

        //MessageBoard.messages.push(mess2);

        //MessageBoard.messages.pop();

  
    }
};
window.onload = MessageBoard.init();

