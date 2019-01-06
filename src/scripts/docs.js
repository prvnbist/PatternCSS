import '../styles/docs.scss';

$('.index').click(function () {
    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).next().slideUp(350);
    } else {
        $(this).parent().parent().find('li .menu').removeClass('show');
        $(this).parent().parent().find('li .menu').slideUp(350);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(350);
    }
});

$('#menu-toggle').click(function(event) {
    event.stopPropagation();
    $(this).toggleClass('active');
    $('#sidebar').toggleClass('showSidebar');
});

$('html').click(function(e){
    
    if ($(e.target).closest('#sidebar').length === 0) {
        if($('#menu-toggle').hasClass('active')){
            $('#sidebar').removeClass('showSidebar');
            $('#menu-toggle').removeClass('active');
        }
    }

    
});

