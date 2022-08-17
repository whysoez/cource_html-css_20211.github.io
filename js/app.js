

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
    var headlist = document.querySelector('#head_list');
    var movie0 = movies.headers;
    console.log(movie0[0].propertyType);
    var length = movie0.length;
    var head = movie0.map(function(element){
        return `
        <th>${element.propertyValue}</th>
        `;
    });

    headlist.innerHTML = head.join('');

    if(movies == null)
    return;

    var movies2 = movies.movies;
    var listmovie =  document.querySelector('#list');
    htmls = movies2.map(function(movie) {
        // console.log(movie);
        var l = "";
        for(var i=0; i< length; i++)
        {
            // var proName = convert(movie0[i].propertyName)
            // console.log(nn)
            l = l + '<td>' + movie[movie0[i].propertyName] + '</td>';
            // var key = movie0[i].propertyName;

            // console.log(l);
        }
        return '<tr>' + l +'</tr>';
    });

    listmovie.innerHTML = htmls.join('');

    // Phân trang slipt htmls và custom state create in movie
}

// đã xử lý ở controller
/* 
function convert(a) {
    var b = a.charAt(0).toLowerCase();
    a = a.replace(a.charAt(0), b);
    // console.log(a);
    return a;
}
 */