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
        //Add code
    }
    this.setDate = function (_date) {
        date = _date; //check
        // add code
    }

    Message.prototype.toString = function () {
        return this.getText() + " (" + this.getDate() + ")";
    }

    Message.prototype.getHTMLText = function () {
        //Fix!!!
    }
    Message.prototype.getDateText = function () {
        // Fix!!!
    }



};

