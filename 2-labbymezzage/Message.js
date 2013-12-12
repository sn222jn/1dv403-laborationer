"use strict";

function Message(message, date) {

    this.getText = function () {
        return message;
    }

    this.setText = function (_text) {
        message = _text;
    }

    this.getDate = function () {
        return date;

    }
    this.setDate = function (_date) {
        date = _date;

    }

    Message.prototype.toString = function () {
        return this.getText() + " (" + this.getDate() + ")";
    }

    Message.prototype.getHTMLText = function () {
        return this.message.replace(/[\n\r]/g, "<br />");

    }
    Message.prototype.getDateText = function () {
        var options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

      
        return date.toLocaleTimeString("sv", options);

    }


};

