
var api = 'https://localhost:5001/api/Movies'



function deleteMovie() {
    var id = document.querySelector('input[name="movieId"]').value;
    var title = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(api + '/' + id, title)
    .then(function(respone) {
        respone.json();
    })
    .then(function() {});
}
