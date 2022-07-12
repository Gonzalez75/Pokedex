var form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    let name = document.getElementById("name")

    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase()

    let answer = document.getElementById("content")

    let image = document.getElementById('imgPokemon')

    let html = ''

    fetch(urlForm)
        .then(answer => answer.json())
        .then(function (data){
            console.log(data)
            html = 'Nome:' + uppercase(data.name) + '<br>'
            html = html + 'Type: ' + uppercase(data.types[0].type.name)
            answer.innerHTML = html
            image.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function (err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon not found!'
            } else {
                html = 'Error:' + err
            }
            answer.innerHTML = html
        })
})

function uppercase(val){
    return val[0].toUpperCase() + val.substr(1)
}