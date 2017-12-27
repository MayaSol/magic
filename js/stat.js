function renderStatistics(ctx, name, times) {

    var statX = 140;
    var statY = 10;
    var statWidth = 420;
    var statHeight = 270;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(statX+10, statY+10, statWidth, statHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(statX, statY, statWidth, statHeight);

    ctx.fillStyle = 'black';
    ctx.Text = '16px PT Mono';
    ctx.fillText('Ура вы победили!',statX + 10, statY + 20);
    ctx.fillText('Список результатов:',statX + 10, statY + 40);

    var histMaxHeight = 150;
    var histColWidth = 40;
    var histColSpace = 50;
    var histSelfColor = 'rgba(255,0,0,1)';
    var histStartX = statX + 10;
    var histStartY = statY + statHeight - 40;


    var timeMax = 0;
    for (var i = 0; i < times.length; i++) {
        if (times[i] > timeMax) {
            timeMax = times[i];
        }
    }

    timeMax = Math.round(timeMax);

    for (var i = 0; i < name.length; i++) {
        if (name[i] == 'Вы') {
            ctx.fillStyle = histSelfColor;
        }
        else
        {
        var userOpacity = Math.ceil(Math.random()*10+1)/10;
        ctx.fillStyle = 'rgba(0,0,255,' + userOpacity + ')';
        }

        var histHeight = times[i]*histMaxHeight/timeMax;
        var userX = histStartX + i*(histColWidth + histColSpace);
        var userY = histStartY - histHeight;

        ctx.fillRect(userX, userY, histColWidth, histHeight);

        ctx.fillText(name[i],userX,histStartY + 15);
        ctx.fillText(Math.round(times[i])+'мс',userX,histStartY + 30);
    }

};
