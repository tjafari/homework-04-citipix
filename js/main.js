$(function(){

  //listen for click event and call function to get input and change background image
  $("#submit-btn").click(changeCityBackground);

  //define function to get input and change background
  function changeCityBackground() {
    //call function preventDefault to prevent issues with form submission to server
    event.preventDefault();

    //create variable to store city input
    var cityInput = $("#city-type").val();
    
    //conditional to adjust background based on input
    if (cityInput === "New York" || "NYC"){
      $("body").css("background", "url(./images/citipix_skyline.jpg)");

    }else if (cityInput === "San Francisco" || "SF"){
      $("body").css("background", "url(./images/sf.jpg)");
    
    }else if (cityInput === "Los Angeles" || "LA"){
      $("body").css("background", "url(./images/la.jpg)");

    }else if (cityInput === "Austin" || "ATX"){
      $("body").css("background", "url(./images/austin.jpg)");

    }else if (cityInput === "Sydney" || "SYD"){
      $("body").css("background", "url(./images/sydney.jpg)");
    
    }
});

// - Call ```$.val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a form submission using the ```event.preventDefault()``` function
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Get the first element from an attribute name using ```$.attr()```
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg