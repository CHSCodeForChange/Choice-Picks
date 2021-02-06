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
}

window.onscroll = function() {
    showUpButton();
    //progressBar();
};

function showUpButton() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll != 0) {
        document.getElementById('upbtn').style.display = 'block';
    }
    else {
        document.getElementById('upbtn').style.display = 'none';
    }
}

//in testing
// function progressBar() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
// }