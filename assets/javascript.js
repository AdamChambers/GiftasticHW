
$(document).ready(function () {
    //run function when document is ready
    var topics = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    //sets up button topics
    $(this).attr('data-name');
    //adds data-name attribute to this(topics array) 

    for (i = 0; i < topics.length; i++) {
        //for loop creating buttons for the length of topics array
        var createBtn = $("<button>"+topics[i]+"</button>");
        //var createBTN creates buttons with topic array names
        createBtn.addClass("buttonForGif" + [i]);
        //sets class attribute for the button
        createBtn.attr("data-name", topics[i]);
        //sets data-name attribute for button
        $("#header1").append(createBtn);
        //appends button to html header
       
  

    $(".buttonForGif"+[i]).on("click", function () {
//when a specific button is clicked run this function
       var topics=$(this).attr("data-name");
    //sets data-name again. could be redundant, but i figured it might not hold true in this function if i didn't declare it

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=WVe1woeWLa6HwFIp1KfLVatEuMYos4U5&limit=10";
        // giphy api url with unique api key searching for whatever named topic button was clicked
        console.log("Query URL: "+ queryURL);
        //console logs the full URL for clarity
     $.ajax({
        url: queryURL,
        method: "GET"
        //using the constructed url, get data then put it in this function
    }).then(function (response) {
        console.log(response);
        //console log response pulled from attempted query
        var dataReturn = response.data;
        //sets data pulled from giphy api to a variable named dataReturn
        for (i=0; i<dataReturn.length; i++){
            var gif= {
                
            }
           // var gif = JSON.stringify()
            //for loop for amount of gifs pulled from api
            var planetGif= $("<img>");
            //creeates variable that will hold gif
           planetGif.attr('src',dataReturn.url);
           //sets src attribute to url data it pulled
            planetGif.attr('data-state', 'animate');
        //should, in theory, animate the gif pulled
            planetGif.attr('type', dataReturn.type);
            //should, in theory, let the function assign a datatype to the PlanetGif
            planetGif.attr('alt', "coultnt load image");
            //reassurance that something is working..

           

            $("#container").append(planetGif);
            //more reassurance of poor code
        }
      
////////////////////////////////////////////////////////////////////////////////////////////////////
// I can return objects with data properties from the gify api in the console with the paramaters //
// addressed by the queryURL but am unable to display the gif image, sorry//////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
        })
    });
    }
});



