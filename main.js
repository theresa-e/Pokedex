$(document).ready(function(){
    // Displays images and assigns an ID
    for (var i=1; i<=50; i++) {
        $('.pokemonImages').append('<img id="' + i + 
        '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">');
    }
    // Populates right table when Pokemon is clicked 
    $('img').on('click', function(){
        var pokemonID = event.target.id;
        var pokemonURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;
        var pokemonImage = '<img class="pokeImg" width ="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonID + '.png">';
        $.get(pokemonURL, function(res) {
            var pokemonName = '<h2 class="text-center">' + res.forms[0].name + '</h2>';
            var pokemonTypes = '<p class="info-title">Type: '
            for (var i = 0; i<res.types.length; i++){
                pokemonTypes += res.types[i].type.name
                if (i < res.types.length - 1){
                    pokemonTypes += ", ";
                } else {
                    pokemonTypes += ".</p>";
                }
            }
            pokemonTypes += '</ul>';
            var pokemonHeight = '<p class="info-title">Height: ' + res.height + '</p>';
            var pokemonWeight = '<p class="info-title">Weight: ' + res.weight + '</p>';
            console.log('name: ', pokemonName)
            console.log(res.height);
            $('.pokemonInfo').html(pokemonImage + pokemonName +  pokemonTypes + pokemonHeight + pokemonWeight);
        }, 'json');
            $('.pokemonInfo').hide().fadeIn("slow");
        });
});