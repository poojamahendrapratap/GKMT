$('document').ready(function () {
    $('#innerdiv').click(function () {
        $('#egg').load('Mad.html');
    });
    $('#innerdiv1').click(function () {
        $('#egg').load('wdd.html');

    });
    $('#innerdiv2').click(function () {

        $('#egg').load('Dmb.html');
    });
    $('#innerdiv3').click(function () {

        $('#egg').load('Ui.html');
    });
    $('#innerdiv4').click(function () {

        $('#egg').load('Sd.html');
    });
    $('#innerdiv5').click(function () {

        $('#egg').load('Ods.html');
    });
    // Add active class to the current button (highlight it)
    $(document).on('click', '#servicemydiv .serviceboxes', function () {
        $('.serviceboxes').removeClass('active');
        $(this).addClass('active');

    });
});