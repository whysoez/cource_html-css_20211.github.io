

var api = 'https://localhost:5001/api/Movies/page'


function start(i) {
    getMovie(i,function(movies) {
        renderMovie(movies);
    });
}

function actionPage(i){
    start(i);
}

start(1);

// function
function getMovie(i,callback) {
    fetch(api+'/'+i)
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
    listmovie.innerHTML = htmls.join('');

    // Phân trang slipt htmls và custom state create in movie
}