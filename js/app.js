

var api = 'https://localhost:5001/api/Movies'


function start() {
    getMovie(function(movies) {
        console.log(movies);
        renderMovie(movies);
    });
}

start();

// function
function getMovie(callback) {
    fetch(api)
    .then(function(respone){
        return respone.json();
    })
    .then(callback);
}

function renderMovie(movies){
    var listmovie =  document.querySelector('#list');
    var htmls = movies.map(function(movie){
        return `
            <tr>
                <td>${movie.movieId}</td>
                <td>${movie.name}</td>
                <td>${movie.genre}</td>
                <td>${movie.duration}</td>
                <td>${movie.releaseDate}</td>
            </tr>
        `;
    });
    listmovie.outerHTML = htmls.join('');

    // Phân trang slipt htmls và custom state create in movie
}