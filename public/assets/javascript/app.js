$(function () {
    $('.create-form').on('submit', (event) => {
        event.preventDefault();

        let orderUp = {
            burger_name: $('#patty').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: orderUp
        }).then(
            function () {
                console.log(`Rev up those fryers!`);
                location.reload();
            }
        );
    });

    $('.delete').on('click', (event) => {
        let id = $(this).data('id');

        $.ajax(`/api/burgers/${id}` {
            type: 'DELETE'
        }).then(
            function() {
                console.log('delete id', id);
                location.reload();
            }
        );
    });
    //update form
});