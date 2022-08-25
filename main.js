import blueCardsData from '/data/MythicCards/blue/index.js';
import brownCardsData from '/data/MythicCards/brown/index.js';
import greenCardsData from '/data/MythicCards/green/index.js';
import ancientsData from '/data/ancients.js';
//Функция замеса колоды - перемешиваем архив
function shuffle (deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
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
//Функция заполнения трекера
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
//Функция выкладывания карт из деки и изменение трекера
function getCardsOn () {
//Изменение значений трекера и получение ссылки на карту
let currentCardUrl;
//Первая стадия
if (stageOneCards.length > 0) {
	let currentCard = stageOneCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenFirst.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownFirst.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueFirst.textContent -= 1;
		}
	});
//Если первая стадия закончилась - начинается вторая
} else if (stageTwoCards.length > 0) {
	let currentCard = stageTwoCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenSecond.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownSecond.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueSecond.textContent -= 1;
		}
	});
//Если вторая стадия закончилась - начинается третья
} else if (stageThreeCards.length > 0) {
	let currentCard = stageThreeCards.shift()
	console.log(currentCard);
	greenCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackGreenThird.textContent -= 1;
		}
	});
	brownCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBrownThird.textContent -= 1;
		}
	});
	blueCardsData.forEach(value => {
		if (value.id === currentCard) {
			currentCardUrl = value.cardFace;
			trackBlueThird.textContent -= 1;
		}
	});
} 
// Если карты закончились - дека прячется
cardsQuantity--;
if (cardsQuantity === 0) {
	deckShirt.classList.add('hider');
}
//Отображение текущей выложенной карты
const card = document.createElement('img');
card.src = currentCardUrl;
card.classList.add('deck-stack');
openCard.append(card);
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
const openCard = document.querySelector('.open-card');








//Объявляем архивы id карт
const blueCardsId = [];
const brownCardsId = [];
const greenCardsId = [];
//Заполняем архивы id карт согласно сложности
getSimpleDeck (greenCardsData, greenCardsId);
getSimpleDeck (brownCardsData, brownCardsId);
getSimpleDeck (blueCardsData, blueCardsId);



const stageOneCards = [],
	  stageTwoCards = [],
	  stageThreeCards = [];
getStageDecks('azathoth');
let cardsQuantity = stageOneCards.length + stageTwoCards.length + stageThreeCards.length;

setTracker('azathoth');
shuffle(stageOneCards);
shuffle(stageTwoCards);
shuffle(stageThreeCards);



//Слушатель клика по колоде
deckShirt.addEventListener('click', getCardsOn);


