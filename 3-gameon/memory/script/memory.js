"use strict";

var MemoryGame = {

    tiles: [],

    init: function () {
        var maxCols = 4;
        var maxRows = 4;
        var randomTiles = [];
        var td;
        var image0;
        var aTag;
        var clkCount = 0;
        randomTiles = RandomGenerator.getPictureArray(maxCols, maxRows);

        tableCreate();
        //}
        function tableCreate() {
            var body = document.body;
            var table = document.createElement("table");

            body.appendChild(table);

            for (var i = 0; i < maxRows; i++) {
                var tr = table.insertRow();

                for (var j = 0; j < maxCols; j++) {
                    td = tr.insertCell();
                    image0 = new Image();
                    aTag = document.createElement("a");

                    td.appendChild(aTag);
                    aTag.appendChild(image0);

                    image0.src = "pics/0.png";
                    image0.alt = "Question mark";

                    //
                    image0.id = randomTiles[i * 4 + j];
                }
            }
        }
        document.addEventListener('click', function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            
            clkCount += 1;
            console.log(clkCount);
            if (clkCount < 3) {
                if (e.target.alt === "Question mark") {

                    if (e.target.id === "1") {
                        e.target.src = "pics/1.png";
                        e.target.alt = "1";
                    }
                    else if (e.target.id === "2") {
                        e.target.src = "pics/2.png";
                        e.target.alt = "2";
                    }
                    else if (e.target.id === "3") {
                        e.target.src = "pics/3.png";
                        e.target.alt = "3";
                    }
                    else if (e.target.id === "4") {
                        e.target.src = "pics/4.png";
                        e.target.alt = "4";
                    }
                    else if (e.target.id === "5") {
                        e.target.src = "pics/5.png";
                        e.target.alt = "5";
                    }
                    else if (e.target.id === "6") {
                        e.target.src = "pics/6.png";
                        e.target.alt = "6";
                    }
                    else if (e.target.id === "7") {
                        e.target.src = "pics/7.png";
                        e.target.alt = "7";
                    }
                    else {
                        e.target.src = "pics/8.png";
                        e.target.alt = "8";
                    }
                }
            }
            else {
                console.log("you have already tried");
            }

        }, false);


    }
};
window.onload = MemoryGame.init();