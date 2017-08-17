Dynamic Cards

Basics of Project

Type in text area and push submit button. A card will apear with what has been typed.
In the card is a delete button that will delete the spacific card that is targeted.
Sample of code in project

    var newCard ="";
    newCard+= `<div class="cardHolder">`;
    newCard+= `<h3>${text.value}</h3><button id="delete" class="delete" type="button">Delete</button>`;
    newCard+= `</div>`
    cardHolderDiv.innerHTML += newCard;
}
Screen Shot of project

![Screen Shot](dynamiccards/images/Screen Shot 2017-08-17 at 6.15.03 PM.png)