// Wait until the entire page has been served before applying javaScript
$(document).ready(function () {
    // If mobile width when loaded, hide the menu
    if ($(window).width() < 768) {
        $("#nav ul").addClass("hidden");
    }
    // Add nested toggle buttons
    $('ul.children').before('<button type="button" class="btn btn-default btn-lg nested-toggle"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></button>');
    
    // Add a button toggle, to hide or show menu
    $('.responsive-toggle').click(function () {
        $("#nav ul").toggleClass("hidden");
    });

    // Hide or unhide the menu when the window is resized
    $(window).resize(function () {
        // IF the window is 768px or greater, remove any hidden class from menu
        if ($(window).width() >= 768) {
            $("#nav ul").removeClass("hidden");
        }
        else {
            $("#nav ul").addClass("hidden");
        }
    });
});