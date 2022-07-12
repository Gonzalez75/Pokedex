var form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    let name = document.getElementById("name")

    urlForm = urlForm + this.name.value

    alert(urlForm)
})