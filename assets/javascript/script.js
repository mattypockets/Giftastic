$( document ).ready(function() {

    var pokemon = ["Bulbasaur", "Pikachu", "Eevee", "Squirtle"];

    
    // Show buttons for each pokemon
    function renderButtons() {

       // Clear all of the buttons so that buttons don't repeat
        $(".buttons").empty();

        // Looping through the array of pokemon
        for (var i = 0; i < pokemon.length; i++) {

          var a = $("<button>");

          a.addClass("btn btn-info poke-btn");
          a.attr("data-name", pokemon[i]);
          a.text(pokemon[i]);

          $(".buttons").append(a);
        }
    }

    // Display gifs when button is clicked
    $(document.body).on("click", ".poke-btn", function() {
        event.preventDefault();

        var name = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          name + "&api_key=GjAmS61CkZSQ8r9uxM5EY3G73hyeGOEM&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
            $(".gifSpace").html("");

            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div class='gif-div'>");
              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + rating);
              var pokeImg = $("<img>");

              pokeImg.attr("src", results[i].images.fixed_height_still.url);
              pokeImg.attr("data-still", results[i].images.fixed_height_still.url);
              pokeImg.attr("data-animate", results[i].images.fixed_height.url);
              pokeImg.attr("data-state", "still");
  
              gifDiv.prepend(p);
              gifDiv.prepend(pokeImg);
              gifDiv.css("width", "250px");
  
              $(".gifSpace").prepend(gifDiv);
            }
          });
      });

      // Add button when a pokemon is searched

      $(".addPokemon").on("click", function(event) {

		event.preventDefault();

		var character = $(".pokeSearch").val().trim();

		pokemon.push(character);
		$(".pokeSearch").val("");

		renderButtons();

	});
    


      // Toggle between still and moving gifs on click
      $(document.body).on("click", "img", function() {
        
          var state = $(this).attr('data-state');
    
          if (state === "still") {
            $(this).attr("data-state", "animate");
            $(this).attr('src', $(this).attr("data-animate"));
          } else if (state === "animate") {
            $(this).attr("data-state", "still");
            $(this).attr('src', $(this).attr("data-still"));
          }
        });
  



    renderButtons();




    
});