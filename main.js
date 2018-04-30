$(document).ready(function(){
    // Displays images and assigns an ID
    for (var i=1; i<=150; i++) {
        $('.pokemonImages').append('<img id="' + i + 
        '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png">');
    }
    // Populates right table when Pokemon is clicked 
    $('img').on('click', function(){
        var pokemonID = event.target.id;
        var pokemonURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;
        var pokemonImage = '<img class="mx-auto d-block" width ="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonID + '.png">';
        $.get(pokemonURL, function(res) {
            var pokemonName = '<h2 class="text-center">' + res.forms[0].name + '</h2>';
            var pokemonTypes = '<p class="title">Types:</p><ul>'
            for (var i = 0; i<res.types.length; i++){
                pokemonTypes += '<li>' + res.types[i].type.name + '</li>';
            }
            pokemonTypes += '</ul>';
            var pokemonHeight = '<p class="title">Height: </p><ul><li>' + res.height + '</li></ul></p>';
            var pokemonWeight = '<p class="title">Weight: </p><ul><li>' + res.weight + '</li></ul></p>';
            console.log(res.height);
            $('.pokemonInfo').html(pokemonImage + pokemonName +  pokemonTypes + pokemonHeight + pokemonWeight);
        }, 'json');
        });
});