
var api = 'https://localhost:5001/api/Movies'

function start(){
    create();
}

start();

function create(){
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('#name').value;
        var genre = document.querySelector('#genre').value;
        var duration = document.querySelector('input[name="duration"]').value;
        var releaseDate = document.querySelector('#releaseDate').value;

        var dataForm = {
            name: name,
            genre: genre,
            duration: duration,
            releaseDate: releaseDate
        };

        createMovie(dataForm);
    }
}

function createMovie(data, callback) {
    var title = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(api, title)
    .then(function(respone) {
        respone.json();
    })
    .then(callback);
}
