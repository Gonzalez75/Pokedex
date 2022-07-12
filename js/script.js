var form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    let name = document.getElementById("name")

    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase()

    let answer = document.getElementById("content")

    let html = ''

    fetch(urlForm)
        .then(answer => answer.json())
        .then(function (data){
            console.log(data)
            html = 'Nome:' + data.name + '<br>'
            html = html + 'Type: ' + data.types[0].type.name
            answer.innerHTML = html
        })
        .catch(function (err){
            console.log(err)
        })
})

function