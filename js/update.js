
var api = 'https://localhost:5001/api/Movies'

function start(){
    update();
}

start();

function update(){
    var createBtn = document.querySelector('#update');

    createBtn.onclick = function() {
        var movieId = document.querySelector('#movieId').value;
        var name = document.querySelector('#name').value;
        var genre = document.querySelector('#genre').value;
        var duration = document.querySelector('input[name="duration"]').value;
        var releaseDate = document.querySelector('#releaseDate').value;

        var dataForm = {
            movieId : movieId,
            name: name,
            genre: genre,
            duration: duration,
            releaseDate: releaseDate
        };

        updateMovie(dataForm);
    }
}

function updateMovie(data, callback) {
    var title = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(api + '/' + data.movieId, title)
    .then(function(respone) {
        respone.json();
    })
    .then(callback);
}
