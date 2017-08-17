var getCards = document.getElementById('showCards');
var cardHolderDiv = document.getElementById('cardHolder');
var text = document.getElementById('textArea');

function writeToDom(){
	var newCard ="";
	newCard+= `<div class="cardHolder">`;
	newCard+= `${text.value} <button id="delete" class="delete" type="button">delete</button>`;
	newCard+= `</div>`
	cardHolderDiv.innerHTML += newCard;
}

function deleteCard(event) {
	
	if(event.target.className === 'delete'){
			console.log(event);
		event.target.parentElement.remove();
	}
}


getCards.addEventListener("click", writeToDom);
document.body.addEventListener("click", deleteCard);