// Load Page Parts a Home

$(document).ready(function () {
    $("header").load("includes/header.php");
    $("footer").load("includes/footer.php");
});

// Play Button Effect
$('.trailer-item-info').children('i').hover(function () {
    $(this).removeClass("far");
    $(this).toggleClass('fas');

}, function () {
    $(this).removeClass("fas");
    $(this).addClass('far');
});

//multi-step booking form script

$(document).ready(function () {
    $('.form-tab2').hide();
});

$('.form-tab1').children('.form-btn').click(function () {
    $('.form-tab1').hide();
    $('.form-tab2').show();
});


// booking form validatioin
function validate() {
    if (document.getElementsByClassName("form-tab2").fName.value == "") {
        alert("Please provide your name!");
        document.getElementById("form-tab2").fName.focus();
        return false;
    }
    if (document.getElementById("form-tab2").lName.value == "") {
        alert("Please provide your name!");
        document.getElementById("form-tab2").lName.focus();
        return false;
    }
    if (document.getElementById("form-tab2").EMail.value == "") {
        alert("Please provide your Email!");
        document.getElementById("form-tab2").EMail.focus();
        return false;
    }

    return (true)
};

// showing and hiding booking panel

$(".movie-info a").on('click', function () {
    $('.booking-wrap').show();
});

$(".booking-panel-section2").on('click', function () {
    $('.booking-wrap').hide();
});

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
