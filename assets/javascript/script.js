$( document ).ready(function() {

    var shows = ["My Hero Academia", "Kino's Journey", "Cells at Work", "Laid Back Camp"];

    function renderButtons() {

       // Clear all of the shows so that buttons don't repeat
        $(".buttons").empty();

        // Looping through the array of shows
        for (var i = 0; i < shows.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of show-btn to our button
          a.addClass("show-btn");
          // Adding a data-attribute
          a.attr("data-name", shows[i]);
          // Providing the initial button text
          a.text(shows[i]);
          // Adding the button to the buttons div
          $(".buttons").append(a);
        }
    }

    
    





    
});