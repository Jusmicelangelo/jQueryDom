$(document).ready(function () {
    console.log("Let’s get ready to party with jQuery!")
})

//adding a movie to the list
$("Button").on("click", function (event) {
    event.preventDefault()
    let movie = $("#title").val()
    let rating = $("#rating").val()
    let newMovie = `<tr><th>${movie}</th><th>${rating}</th><th><button>Delete</button></th></tr>`
    if (rating > 10 || movie.length < 2) {
        alert("Highest rating is 10 and minChar of a Movie has to be 2!")
    } 
    else {
    $("#listMovies").append(newMovie)
    $("#title").val("")
    $("#rating").val("")
    $("#title").focus()
    }
})  

//removing a movie from the list
$("#listMovies").on("click", function (e) {
    $(e.target).closest("tr").remove();
})

