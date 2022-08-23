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
function getAncientCardsQuantity (ancient) {
	ancientsData.forEach(value => {
		if (value.id === ancient) {
			const greenQuantity = value.firstStage.greenCards + value.secondStage.greenCards + value.thirdStage.greenCards;
			const brownQuantity = value.firstStage.brownCards + value.secondStage.brownCards + value.thirdStage.brownCards;
			const blueQuantity = value.firstStage.blueCards + value.secondStage.blueCards + value.thirdStage.blueCards;
		}
	});
}
//Объявляем архивы идентификторов карт
const blueCardsId = [];
const brownCardsId = [];
const greenCardsId = [];
//Заполняем архивы идентификаторов карт согласно сложности
getSimpleDeck (greenCardsData, greenCardsId);
getSimpleDeck (brownCardsData, brownCardsId);
getSimpleDeck (blueCardsData, blueCardsId);
//Замешиваем колоды по цветам





