
var api = 'https://localhost:5001/api/Movies'

function start(){
    update();
}

// start();

var state = 1;

function update(){
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
        test();

        var showSate = document.querySelector(".state");
        if(state != 5)
        {
            showSate.innerHTML = "Vui lòng kiểm tra lại thông tin.";
        }
        else {
            updateMovie(dataForm);
            showSate.innerHTML = `<p style="color:blue">Tạo thành công!</p>`;
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


function focusId() {
    var name = document.querySelector('#movieId').value;
    var checkname = document.querySelector('#checkid')
    if(name == null || name.trim().length == 0)
    {
        checkname.innerHTML = "không được để trống Id";
    }
    else {
        checkname.innerHTML = "";
        state++;
    }
}

function focusName() {
    var name = document.querySelector('#name').value;
    var checkname = document.querySelector('#checkname')
    if(name.trim().length == 0)
    {
        checkname.innerHTML = "không được để trống Name";
        // state = fasle;
    }
    else if(name.length < 5 || name.length > 50)
    {
        checkname.innerHTML = "<p>tên phải có độ dài từ 5-50 ký tự</p>";
        // state = fasle;
    }
    else {
        checkname.innerHTML = "";
        state++;
    }
}


function focusGenre() {
    var name = document.querySelector('#genre').value;
    var checkname = document.querySelector('#checkgenre')
    if(name == null || name.trim().length == 0)
    {
        checkname.innerHTML = "không được để trống Genre";
    }
    else {
        checkname.innerHTML = "";
        state++;
    }
}

function focusDuration() {
    var name = document.querySelector('#duration').value;
    var checkname = document.querySelector('#checkduration')
    if(name == null || name.trim().length == 0)
    {
        checkname.innerHTML = "không được để trống Duration";
    }
    else {
        checkname.innerHTML = "";
        state++;
    }
}

function focusReleaseDate() {
    var name = document.querySelector('#releaseDate').value;
    var checkname = document.querySelector('#checkreleasedate')
    if(name == null || name.trim().length == 0)
    {
        checkname.innerHTML = "không được để trống releaseDate";
    }
    else {
        checkname.innerHTML = "";
        state++;
    }
}

function test(){
    state = 0;
    focusId();
    focusName();
    focusGenre();
    focusDuration();
    focusReleaseDate();
    console.log(state);
}
