$('document').ready(function() {
    $('#links a').click(function(e) {
        e.preventDefault();
        $('#links a').removeClass('activeLink');
        $(this).addClass('activeLink');
    });
});

function Animate2id(id) {
}