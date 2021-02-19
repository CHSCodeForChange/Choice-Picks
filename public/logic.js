//window update settings
window.onload = function() {
    progressBar();
};

window.onscroll = function() {
    upButton();
    progressBar();
};

//to display different screens
function changeScreen(screen) {
    if (screen == 1) {
        document.getElementById('choicePicks').style.display = 'block';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'none';
    }
    else if (screen == 2) {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'block';
        document.getElementById('librarian').style.display = 'none';
    }
    else if (screen == 3) {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'block';
    }
    progressBar();
}

function upButton() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll != 0) {
        document.getElementById('upbtn').style.display = 'block';
    }
    else {
        document.getElementById('upbtn').style.display = 'none';
    }
}

function progressBar() {
    var scrollHeight = document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var hasVerticalScrollbar = scrollHeight > clientHeight;
    if (hasVerticalScrollbar) {
        document.getElementById('myProgress').style.display = 'block';
        document.getElementById('myBar').style.display = 'block';
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = scrollHeight - clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    else {
        document.getElementById('myProgress').style.display = 'none';
        document.getElementById('myBar').style.display = 'none';
    }
}