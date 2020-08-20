//change class using jquery
$(function () {
    $('[name="changeClass"]').click(function () {

        if ($(this).hasClass('btn-success')) {
            $(this).removeClass('btn-success').addClass('btn-warning')
        } else {
            $(this).removeClass('btn-warning').addClass('btn-success')
        }
    })
})

//add remove class using jquery
$('[name = "addRemoveElement"]').click(function () {
    const isHaveChild = ($(`#content`).children().length);

    if (isHaveChild) {
        $("#content").empty();
    } else {
        $("#content").append('<span class = "text-danger">Danger, do not delete this words</span>')
    }
})