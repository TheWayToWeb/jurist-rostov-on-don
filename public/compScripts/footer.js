$(() => {
    const iconAddress = $('.is-address');
    const listItem = $('.is-item');

    iconAddress.on('mouseover', function() {
        $(this).addClass('is-colored');
    });

    iconAddress.on('mouseout', function() {
        $(this).removeClass('is-colored');
    });

    listItem.on('mouseover', function() {
        $(this).addClass('is-colored');
    });

    listItem.on('mouseout', function() {
        $(this).removeClass('is-colored');
    });
});