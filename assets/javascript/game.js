
var quiObj = {
	name: "Qui-Gon Jinn",
	photo: "assets/images/qui.jpg",
	power: 180,
	display: function() {

        var charDiv = $("<button>");

		charDiv.addClass("character");

		charDiv.attr("power", this.power);

		//charDiv.attr("data-letter", this.name);
		charDiv.attr("id", "1");

		//charDiv.text(this.name);
		charDiv.append(this.name)
		charDiv.append('<img src="' + this.photo + '">')
		charDiv.append(this.power)

		//console.log(charDiv);

		return charDiv;

		//$("#characters").append(charDiv);

	},
	setCharacter: function() {
		$("#yourCharacters").append(charDiv);

	},
	attack: function() {
			return 20;
	}
};


var anakinObj = {
	name: "Anakin Skywalker",
	photo: "assets/images/anakin.jpg",
	power: 100,
	display: function() {

        var charDiv = $("<button>");

		charDiv.addClass("character");

		charDiv.attr("power", this.power);

		charDiv.attr("id", "2");

		//charDiv.text(this.name);
		charDiv.append(this.name)
		charDiv.append('<img src="' + this.photo + '">')
		charDiv.append(this.power)

		//console.log(charDiv);

		return charDiv;

		//$("#characters").append(charDiv);

	},
	setCharacter: function() {
		$("#yourCharacters").append(charDiv);

	},
	attack: function() {
			return 20;
	}
};

//quiObj.display();

function displayCharacter(obj, place) {

    var charDiv = $("<button>");

	charDiv.addClass("character");
	//charDiv.addClass("character enemy defender");

	charDiv.attr("power", obj.power);

	//charDiv.attr("id", "2");

	//charDiv.text(this.name);
	charDiv.append(obj.name)
	charDiv.append('<img src="' + obj.photo + '">')
	charDiv.append(obj.power)

	//console.log(charDiv);

	//return charDiv;

	$(place).append(charDiv);
};

function moveCharacter(obj, place) {


	var charDiv = document.createElement("li");
	$("#enemies").append(charDiv);

	$(charDiv).attr("class", "enemy");
	$(charDiv).attr("power", obj.power);

	//charDiv.attr("id", "2");


	//charDiv.append("<div>")
	//charDiv.addClass("character");
	//charDiv.text(this.name);
	$(charDiv).append(obj.name)
	$(charDiv).append('<img src="' + obj.photo + '">')
	$(charDiv).append(obj.power)

	//console.log(charDiv);

	//return charDiv;

	//$(place).append(charDiv);
};


$(document).ready(function() {

	var names = ["Qui-Gon Jinn", "Anakin Skywalker", "Count Dooku", "General Grievous"];
	var images = ["qui.jpg", "anakin.jpg", "dooku.jpg", "grievous.jpb"];
	var pps = ["120", "100", "150", "180"];

	var yourCharacter;
	var Defender;
	var yourDamage;
	var defDamage;
	var yourAtackPower; // remeber incresing

	//for (var i = 0; i < names.length; i++) {

	//var carBtn = $("<button>");

	//carBtn.addClass("letter-button letter letter-button-color");

	//carBtn.attr("data-letter", names[i]);

	//carBtn.text(names[i]);

	//$("#characters").append(carBtn);

	//}

	// Add selected character to #yourCharacters. Add other characters to #enemies.
	//quiObj.display();
	//$("#characters").append(quiObj.display());
	//$("#characters").append(anakinObj.display());
	displayCharacter(quiObj, "#characters");
	displayCharacter(anakinObj, "#characters");


	// Select your character
	$(".character").on("click", function() {

		console.log("clicked");
		console.log(this);

		$("#characters").empty();

		// Display Your Character
		//$("#yourCharacter").append(quiObj.display());
		displayCharacter(quiObj, "#yourCharacter");
		//$(this).removeClass("enemy");

		// Display Enemies available To Attack
		//$("#enemies").append(anakinObj.display());
		moveCharacter(anakinObj, "#enemies");
		//$(anakinObj).addClass("enemies");
        $(".enemies").css('background-color','Red');

	});

	// Select defender
	$("#enemies").click(function(event) {

		console.log("clicked def");
		console.log(this);

	});

});

