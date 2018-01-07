'use strict';

var overlay = document.querySelector('.overlay');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');

overlay.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

function getRandom(numTo) {
  return Math.floor( Math.random()*(numTo+1) );
}

function generateWizardData(names, sirnames, coatColors, eyesColors, resultLength) {
  var result = [];
  var n;

  for (var i=0; i<resultLength; i++) {
    result[i] = {
      'name': names[ getRandom(names.length-1) ],
      'sirname': sirnames[ getRandom(sirnames.length-1) ],
      'coatColor': coatColors[ getRandom(coatColors.length-1) ],
      'eyesColor': eyesColors[ getRandom(eyesColors.length-1) ]
    }
  }

  console.log(result);

  return result;

}

function insertSimilar( similars ) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var frag = document.createDocumentFragment();
  var elem;

  for (var i=0; i < similars.length; i++) {
    elem = template.cloneNode(true);
    elem.querySelector('.setup-similar-label').textContent = similars[i].name + ' ' + similars[i].sirname;
    elem.querySelector('.wizard-coat').style.fill = similars[i].coatColor;
    elem.querySelector('.wizard-eyes').style.fill = similars[i].eyesColor;
    frag.appendChild(elem);
  }

setupSimilarList.appendChild(frag);


  console.log(template);
}

var WIZARD_NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_SIRNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


var similarWizards = generateWizardData(WIZARD_NAMES, WIZARD_SIRNAMES, WIZARD_COAT_COLORS, WIZARD_EYE_COLORS, 4);
insertSimilar(similarWizards);



