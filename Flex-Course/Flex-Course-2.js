$(document).ready(function () {
    $('.hexschool ul').on('click', 'li', function () {
        $('.hexschool ul li.active').removeClass('active');
        $(this).addClass('active');
    });
});