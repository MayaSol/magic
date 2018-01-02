'use strict';

var overlay = document.querySelector(".overlay");
overlay.classList.remove("hidden");

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
			'eyesColors': eyesColors[ getRandom(eyesColors.length-1) ]
		}
	}

console.log(result);

}

var WIZARD_NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_SIRNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


generateWizardData(WIZARD_NAMES, WIZARD_SIRNAMES, WIZARD_COAT_COLORS, WIZARD_EYE_COLORS, 4);


