// Fade in effect (jQuery)
$('section').fadeIn('slow');

// Contact Form Success
const queryString = window.location.search;
if (queryString.includes('?result=success') == true) {
    $('#contact-submit').hide();
    $('#contact-response').show();
    $('#contact-response').text('The carrier pigeons were dispatched successfully!');
    $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
} else if (queryString.includes('?result=error') == true) {
    $('#contact-submit').hide();
    $('#contact-response').show();
    $('#contact-response').text('Something went wrong.')
}