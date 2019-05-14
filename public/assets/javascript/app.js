$('.create-form').on('submit', (event) => {
    event.preventDefault();

    var orderUp = {
        burger_name: $('#patty').val().trim(),
        devoured: 0
    };

    $.ajax('/api/burgers', {
        type: 'POST',
        data: orderUp
    }).then(
        function() {
            console.log(`Rev up those fryers!`);
            location.reload();
        }
    );
});