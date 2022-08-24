import blueCardsData from '/data/MythicCards/blue/index.js';
import brownCardsData from '/data/MythicCards/brown/index.js';
import greenCardsData from '/data/MythicCards/green/index.js';
import ancientsData from '/data/ancients.js';
//Функция замеса колоды - перемешиваем архив
function shuffle (array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
//Функция сбора общей колоды в для очень легкой сложности
function getSimpleDeck (data, output) {
	data.forEach(value => {
		if (value.difficulty === 'easy') {
			output.push(value.id);
		}
	});
	data.forEach(value => {
		if (value.difficulty === 'normal') {
			output.push(value.id);
		}
	});
	data.forEach(value => {
		if (value.difficulty === 'hard') {
			output.push(value.id);
		}
	});
}
//Функция определения количества карт для древнего
// function getAncientCardsQuantity (ancient) {
// 	let greenQuantity,
// 		brownQuantity,
// 		blueQuantity;
// 	ancientsData.forEach(value => {
// 		if (value.id === ancient) {
// 			greenQuantity = value.firstStage.greenCards + value.secondStage.greenCards + value.thirdStage.greenCards;
// 			brownQuantity = value.firstStage.brownCards + value.secondStage.brownCards + value.thirdStage.brownCards;
// 			blueQuantity = value.firstStage.blueCards + value.secondStage.blueCards + value.thirdStage.blueCards;
// 		}
// 	});
// 	return [greenQuantity, brownQuantity, blueQuantity];
// }
//Функция сбора колод по стадиям
function getStageDecks (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
//Первая стадия
			if (value.firstStage.greenCards !== 0) {
				for (let i = 0; i < value.firstStage.greenCards; i++) {
					stageOneCards.push(greenCardsId[i]);
				}
			}
			if (value.firstStage.brownCards !== 0) {
				for (let i = 0; i < value.firstStage.brownCards; i++) {
					stageOneCards.push(brownCardsId[i]);
				}
			}
			if (value.firstStage.blueCards !== 0) {
				for (let i = 0; i < value.firstStage.blueCards; i++) {
					stageOneCards.push(blueCardsId[i]);
				}
			}
//Вторая стадия
			if (value.secondStage.greenCards !== 0) {
				for (let i = value.firstStage.greenCards; i < (value.secondStage.greenCards + value.firstStage.greenCards); i++) {
					stageTwoCards.push(greenCardsId[i]);
				}
			}
			if (value.secondStage.brownCards !== 0) {
				for (let i = value.firstStage.brownCards; i < (value.secondStage.brownCards + value.firstStage.brownCards); i++) {
					stageTwoCards.push(brownCardsId[i]);
				}
			}
			if (value.secondStage.blueCards !== 0) {
				for (let i = value.firstStage.blueCards; i < (value.secondStage.blueCards + value.firstStage.blueCards); i++) {
					stageTwoCards.push(blueCardsId[i]);
				}
			}
//Третья стадия	
			if (value.thirdStage.greenCards !== 0) {
				for (let i = (value.secondStage.greenCards + value.firstStage.greenCards); i < (value.secondStage.greenCards + value.firstStage.greenCards + value.thirdStage.greenCards); i++) {
					stageThreeCards.push(greenCardsId[i]);
				}
			}
			if (value.thirdStage.brownCards !== 0) {
				for (let i = (value.secondStage.brownCards + value.firstStage.brownCards); i < (value.secondStage.brownCards + value.firstStage.brownCards + value.thirdStage.brownCards); i++) {
					stageThreeCards.push(brownCardsId[i]);
				}
			}
			if (value.thirdStage.blueCards !== 0) {
				for (let i = (value.secondStage.blueCards + value.firstStage.blueCards); i < (value.secondStage.blueCards + value.firstStage.blueCards + value.thirdStage.blueCards); i++) {
					stageThreeCards.push(blueCardsId[i]);
				}
			}
		}
	});
}
function setTracker (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
			trackGreenFirst.textContent = value.firstStage.greenCards;
			trackBrownFirst.textContent = value.firstStage.brownCards;
			trackBlueFirst.textContent = value.firstStage.blueCards;
			trackGreenSecond.textContent = value.secondStage.greenCards;
			trackBrownSecond.textContent = value.secondStage.brownCards;
			trackBlueSecond.textContent = value.secondStage.blueCards;
			trackGreenThird.textContent = value.thirdStage.greenCards;
			trackBrownThird.textContent = value.thirdStage.brownCards;
			trackBlueThird.textContent = value.thirdStage.blueCards;
		}
	});
}


//Получение элементов DOM-дерева
const deckShirt = document.querySelector('.deck-shirt');
const trackGreenFirst = document.querySelector('.g1');
const trackBrownFirst = document.querySelector('.br1');
const trackBlueFirst = document.querySelector('.bl1');
const trackGreenSecond = document.querySelector('.g2');
const trackBrownSecond = document.querySelector('.br2');
const trackBlueSecond = document.querySelector('.bl2');
const trackGreenThird = document.querySelector('.g3');
const trackBrownThird = document.querySelector('.br3');
const trackBlueThird = document.querySelector('.bl3');








//Объявляем архивы идентификторов карт
const blueCardsId = [];
const brownCardsId = [];
const greenCardsId = [];
//Заполняем архивы идентификаторов карт согласно сложности
getSimpleDeck (greenCardsData, greenCardsId);
getSimpleDeck (brownCardsData, brownCardsId);
getSimpleDeck (blueCardsData, blueCardsId);



const stageOneCards = [],
	  stageTwoCards = [],
	  stageThreeCards = [];
getStageDecks('azathoth');
let cardsQuantity = stageOneCards.length + stageTwoCards.length + stageThreeCards.length;

setTracker('azathoth');





deckShirt.addEventListener('click', () => {
	if (stageOneCards.length > 0) {
		if (blueCardsData.id.includes(stageOneCards.shift())) {
			
		}
	}
	cardsQuantity--;
	if (cardsQuantity === 0) {
		deckShirt.classList.add('hider');
	}
	console.log(cardsQuantity);
});


