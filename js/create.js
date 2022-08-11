
var api = 'https://localhost:5001/api/Movies'

function start(){
    create();
}

// start();

var state = false;

function create(){
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

    var showSate = document.querySelector(".state");
    if(state)
    {
        showSate.innerHTML = "Vui lòng kiểm tra lại thông tin.";
    }
    else {
        createMovie(dataForm);
        showSate.innerHTML = `<p style="color:blue">Tạo thành công!</p>`;
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
    }
}
