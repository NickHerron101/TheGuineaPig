console.log("hello");


var sayWhat = document.getElementById("output-target");
var artSections = document.getElementsByClassName("article-section");
console.log("artSections", artSections);


// function that happens when clicked
function handleClick (event){
	console.log(event);
	var elementText = event.target.innerHTML; // the target html to var
	sayWhat.innerHTML = "You clicked on the " + elementText + " section"; // assign to output this
}

// looping through and adding an event listener to each item with classname 'article-section'
// //if is embedded in for loop
for (var i = 0; i < artSections.length; i++) {
	artSections.item(i).addEventListener("click", handleClick);
	 if (artSections.item(i).innerHTML === "Section 1") {
	 	artSections.item(i).classList.add("bold")
	 } else if (artSections.item(i).innerHTML === "Section 3") {
	 	artSections.item(i).classList.add("italicized")
	 }
}

var pageTitle = document.getElementById("page-title")

function handlePageTitleMouseOver(event) {
	console.log(event);
	sayWhat.innerHTML = "You moved your mouse over the header";
}

function handlePageTitleMouseOut (event) {
	console.log(event);
	sayWhat.innerHTML = "You left me!!";
}

pageTitle.addEventListener("mouseover", handlePageTitleMouseOver);
pageTitle.addEventListener("mouseout", handlePageTitleMouseOut);

var keyInput = document.getElementById("keypress-input");

keyInput.addEventListener("keyup", function(){
	console.log("event", event);
	sayWhat.innerHTML = event.target.value;
});

var guineaPig = document.getElementById("guinea-pig");


document.getElementById("add-color").
	addEventListener("click", function() {
		guineaPig.classList.toggle("blue");
	});

document.getElementById("make-large").
	addEventListener("click", function() {
		guineaPig.classList.toggle("large");
	});

document.getElementById("add-border").
	addEventListener("click", function() {
		guineaPig.classList.toggle("border");
	});

document.getElementById("add-rounding").
	addEventListener("click", function() {
		guineaPig.classList.toggle("rounded");
	});

///adding block class to buttons
document.getElementById("add-color").classList.add("block");
document.getElementById("make-large").classList.add("block");
document.getElementById("add-border").classList.add("block");
document.getElementById("add-rounding").classList.add("block");


//
// innerHTML


// for {var i = 0; i < artSections.length; i++) {
// 	section.item()
// }
