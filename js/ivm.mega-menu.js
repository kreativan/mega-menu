jQuery(document).ready(function($) {

    $("#ivm-mega-menu-items").menuAim({
        activate: function(a){
            var idx = $(a).index();
            $('.ivm-mega-menu-panel').eq(idx).show();
            $("#ivm-mega-menu-items > li").eq(idx).addClass('ivm-hover');
        },  // fired on row activation
        deactivate: function(a){
            var idx = $(a).index();
            $('.ivm-mega-menu-panel').eq(idx).hide();
            $("#ivm-mega-menu-items > li").eq(idx).removeClass('ivm-hover');
        }  // fired on row deactivation
    });

    /*
    *   Menu modes
    */
    var ivm_mode = $('#ivm-mega-menu-button').data("menu-mode");
    if(ivm_mode == "hover") {
        $('#ivm-mega-menu-button, #ivm-mega-menu-wrapper, #ivm-mega-menu').hover(function() {
            $('#ivm-mega-menu-wrapper').show();
        }, function() {
            $('#ivm-mega-menu-wrapper').hide();
        });
    }else if (ivm_mode == "click") {
        $('#ivm-mega-menu-button').click(function() {
            $('#ivm-mega-menu-wrapper').toggleClass('ivm-active');
            $(this).toggleClass('ivm-active');
        });
    }

    /*
    *   Responsive Menu
    */
    $('#ivm-mega-menu-mobile-button').click(function() {
        $('#ivm-mega-menu-wrapper').toggleClass('ivm-active');
        $('.ivm-mm-item-mobile').removeClass('ivm-active');
    });
    $('.ivm-mm-item-mobile').click(function() {
        $('.ivm-mm-item-mobile').removeClass('ivm-active');
        $(this).addClass('ivm-active');
    });

});
