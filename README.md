# Dynamic Cards

### Basics of Project

* Type in text area and push submit button. A card will apear with what has been typed.
* In the card is a delete button that will delete the spacific card that is targeted. 


### Sample of code in project

```function writeToDom(){
	var newCard ="";
	newCard+= `<div class="cardHolder">`;
	newCard+= `<h3>${text.value}</h3><button id="delete" class="delete" type="button">Delete</button>`;
	newCard+= `</div>`
	cardHolderDiv.innerHTML += newCard;
}
```

### Screen Shot of project

![Screen Shot](https://github.com/Matthensley777/dynamiccards/blob/master/images/Screen%20Shot%202017-08-17%20at%206.15.03%20PM.png)

### How to Download Project

* From Dynamic Card Github Page

![Clone or Download](https://github.com/Matthensley777/dynamiccards/blob/master/images/Screen%20Shot%202017-08-17%20at%206.46.44%20PM.png)

* Copy to terminal

![Git Clone](https://github.com/Matthensley777/dynamiccards/blob/master/images/Screen%20Shot%202017-08-17%20at%206.48.23%20PM.png)

* In terminal type git clone, paste in link.

* To view project type in http-server in terminal.