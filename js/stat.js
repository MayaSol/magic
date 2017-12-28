'use strict';

window.getMaxElem = function( array ) {

    var maxElem = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxElem) {
            maxElem = array[i];
        }
    }

    return maxElem;
}

window.renderStatistics = function(ctx, name, times) {

    var statX = 140;
    var statY = 10;
    var statWidth = 420;
    var statHeight = 270;

    var histMaxHeight = 150;
    var histColWidth = 40;
    var histColSpace = 50;

    function drawInfo(statX, statY, statWidth, statHeight) {

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(statX+10, statY+10, statWidth, statHeight);
        ctx.fillStyle = 'white';
        ctx.fillRect(statX, statY, statWidth, statHeight);

        ctx.fillStyle = 'black';
        ctx.Text = '16px PT Mono';
        ctx.fillText('Ура вы победили!',statX + 10, statY + 20);
        ctx.fillText('Список результатов:',statX + 10, statY + 40);
    }

    function getHistColor(nameUser, nameSelf) {

        var userOpacity;

        if (nameUser == nameSelf) {
            return 'rgba(255,0,0,1)';
        }
        else
        {
            userOpacity = Math.ceil(Math.random()*10+1)/10;
            return 'rgba(0,0,255,' + userOpacity + ')';
        }
    }

    function drawHist(histStartX, histStartY, histMaxHeight, histColWidth, histColSpace) {

        var histHeight;
        var userX;
        var userY;
        var histSelfColor = 'rgba(255,0,0,1)';
        var timeMax = Math.round(getMaxElem(times));

        for (var i = 0; i < name.length; i++) {

            ctx.fillStyle = getHistColor(name[i], 'Вы');

            histHeight = Math.exp((times[i] - timeMax) / 1000) * histMaxHeight;
            userX = histStartX + i*(histColWidth + histColSpace);
            userY = histStartY - histHeight;

            ctx.fillRect(userX, userY, histColWidth, histHeight);

            ctx.fillText(name[i],userX,histStartY + 15);
            ctx.fillText(Math.round(times[i])+'мс',userX,histStartY + 30);
        }
    }

    drawInfo(statX, statY, statWidth, statHeight);
    drawHist(statX + 40, statY + statHeight - 40, histMaxHeight, histColWidth, histColSpace);
};
