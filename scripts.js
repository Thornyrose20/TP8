//hiding list items underneath ingredients,equipment and directions and toggling them

// toggle the ingredient box
window.onload = function() {
  document.querySelector("#box1").onclick = function (){
    document.querySelector("#box1 ul").classList.toggle("showMe");
  }
  
  //toggling equipment
   document.querySelector("#box2").onclick = function (){
     document.querySelector("#box2 ul").classList.toggle("showMe");
   }
   
   //toggling directions
    document.querySelector("#box3").onclick = function (){
     document.querySelector("#box3 ol").classList.toggle("showMe");
   }
    
    // changing font size
    document.querySelector("#browniepic h1").classList.add("title");
  
  //title changes color when hovering over it
  document.querySelector("#browniepic h1").onclick = function(){
    this.classList.toggle("title");
  }
 
  document.querySelector("#footer").innerHTML += "<p>This is just a test webpage</p>";
    

  document.querySelector("#r1").onclick = function() {
    BrookeBombshellBrownie.displayRecipe();
  }
 
  document.querySelector("#r2").onclick = function(){
    ChocolateChipCookies.displayRecipe();
  }
    
}// end of window onload



//new recipe object
function Recipe(recipeName,contributorName,imageURL,ingredientsFilename,equipmentFilename,directionsFilename){
  
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  this.ingredients = ingredientsFilename;
  this.equipment = equipmentFilename;
  this.direction = directionsFilename;
  
  this.displayRecipe = function(){
    
    document.querySelector("#browniepic h1").innerHTML = this.recipe;
    document.querySelector("#Contributor").innerHTML = this.contributor;
    document.querySelector("#browniepic").style.backgroundImage = "url(" + this.img + ")";
    
  loadFileInto(this.ingredients,"#box1 ul");
  loadFileInto(this.equipment,"#box2 ul");
  loadFileInto(this.direction,"#box3 ol");  
  }
  
  this.displayRecipe = function(){
    
    document.querySelector("#browniepic h1").innerHTML = this.recipe;
    document.querySelector("#Contributor").innerHTML = this.contributor;
    document.querySelector("#browniepic").style.backgroundImage = "url(" + this.img + ")";
    
  loadFileInto(this.ingredients,"#box1 ul");
  loadFileInto(this.equipment,"#box2 ul");
  loadFileInto(this.direction,"#box3 ol");  
    
  }
  
}


BrookeBombshellBrownie = new Recipe("Brooke's Bombshell Brownies","Roselynne","Images/brownie.jpg","ingredients.html","equipment.html","directions.html");
ChocolateChipCookies = new Recipe("Chocolate Chip Cookies","Aida","ImagesA/chocolate.jpg","ingredientsA.html","equipmentA.html","directionsA.html");




// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}