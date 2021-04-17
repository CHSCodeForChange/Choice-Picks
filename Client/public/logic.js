//window update settings
window.onload = function() {
    progressBar();
};

window.onscroll = function() {
    upButton();
    progressBar();
    // moveScroller();
};

//to display different screens
function changeScreen(screen) {
    if (screen == 1) {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        document.getElementById('choicePicks').style.display = 'block';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'none';
        document.getElementById('nominations').style.display = 'none';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('title').innerHTML = 'Choice Picks Collection';
    }
    else if (screen == 2) {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'block';
        document.getElementById('librarian').style.display = 'none';
        document.getElementById('nominations').style.display = 'none';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('title').innerHTML = 'Recommendations';
    }
    else if (screen == 3) {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'block';
        document.getElementById('nominations').style.display = 'none';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('title').innerHTML = 'Librarians Access';
    }
    else if (screen == 4) {
        document.getElementById('choicePicks').style.display = 'none';
        document.getElementById('recommendations').style.display = 'none';
        document.getElementById('librarian').style.display = 'none';
        document.getElementById('nominations').style.display = 'block';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('title').innerHTML = 'Nominations';
    }
}

//handles the logic of the up button
function upButton() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll != 0) {
        document.getElementById('upbtn').style.display = 'block';
    }
    else {
        document.getElementById('upbtn').style.display = 'none';
    }
}

//handles logic for the progress bar
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

//basic window logic
$(document).ready(function(e) {
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false
    });
    $('.Portfolio-box').magnificPopup({
        delegate: 'a',
        type: 'image'
    });
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
    });
wow.init();

$(window).load(function() {
    $('.main-nav li a, .servicelink').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 102
        }, 1500, 'easeInOutExpo');
        if ($(window).width() < 768) {
        $('.main-nav').hide();
        }
        event.preventDefault();
    });
})

$(window).load(function() {
    var $container = $('.portfolioContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;
    $container.isotope({
        resizable: true,
        masonry: {
        columnWidth: colW
    }
});

$(window).smartresize(function() {
    var currentColumns = Math.floor(($body.width() - 30) / colW);
    if (currentColumns !== columns) {
    columns = currentColumns;
    $container.width(columns * colW)
        .isotope('reLayout');
    }
    }).smartresize();
    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({

        filter: selector,
        });
        return false;
    });
});