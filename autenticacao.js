$(document).ready(() => {
    const user = 'admin';
    const pass = '123';
    $('#camps-invalid').hide();

    $('#login').click(() => {
        // acertou
        if ($('#w-user').val() == user && $('#w-pass').val() == pass) {
            $('#valid').show();
            $('body').hide();
            // campos vazios-ok
        } else if ($('#w-user').val() == '' || $('#w-pass').val('') == '') {
            $('#invalid').hide();
            $('#camps-invalid').show();
            // errou
        } else {
            $('#camps-invalid').hide();
            $('#invalid').show();
        };
    });
})