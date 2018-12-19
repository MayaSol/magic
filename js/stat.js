function renderStatistics(ctx, names, times) {
  console.log('renderStatistics.start');
  console.log(names);
  console.log(times);
  cloudX = 150;
  cloudY = 10;
  cloudWidth = 450;
  cloudHeight = 200;
  gapX = 10;
  fontSize = 16;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX+10,cloudY+10,cloudWidth,cloudHeight);
  ctx.fillStyle = 'white';
  ctx.fillRect(cloudX,cloudY,cloudWidth,cloudHeight);
  ctx.font = `PT Mono ${fontSize}px`;
  console.log(ctx.font);
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!',cloudX+gapX,rowY(1));
  ctx.fillText('Список результатов:',cloudX+gapX,rowY(2));
  renderHist(ctx,cloudX+gapX,cloudY+rowY(3)+gapX,cloudWidth,names,times);
  function rowY(n) {
    return cloudY+(10+fontSize)*n;
  }
}

function renderHist(ctx,histX,histY,cloudWidth,names,times) {
  const namesWidth = 50; //длина полей с именами
  const barHeight = 15; //высота полоски гистограммы
  const gapX = 10; //горизонтальный отступ
  const gapY = 10; //вертикальный отступ
  var curGamer = 0;

  ctx.font += ' bold';

  for (let i=0; i<names.length; i++) {
    if (names[i] == 'Вы') {
      curGamer = i;
    }
    ctx.fillText(names[i],histX,histY + (gapY+barHeight)*i);
  }

  var minTime = Math.min.apply(null,times);
  console.log(minTime);
  var maxTime = Math.max.apply(null,times);
  var maxLength = cloudWidth - namesWidth - gapX*3 - 50;
  ctx.fillStyle = 'red';

  for (let i= 0; i< times.length; i++) {
    let histLength = maxLength * (times[i]-minTime) / (maxTime-minTime) + 50;
    if (curGamer == i) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = `rgba(0,0,255,${getRand(3,10)/10})`;
    }

    ctx.fillRect(histX + namesWidth + gapX, histY + (gapX+barHeight)*i-barHeight, histLength, barHeight);
  }
  let result = [];
  result.length = 100;
  result.fill(0);
  for (let i=0; i<100000; i++) {
    let test = getRand(3,10);
      result[test]++;
  }
  console.log(result);
}

// Случайное целое число в диапазоне от randForm до randTo
function getRand(randFrom,randTo) {
  return Math.floor( Math.random()*(randTo - randFrom  + 1) + randFrom);
}


