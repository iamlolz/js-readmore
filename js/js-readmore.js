
// Read more accordion

$(document).ready(function() {
    // Set defaults
    $('.readmore_content').addClass('readmore_hide');
    $('.readmore_fade').addClass('readmore_fadeout');
    $('.readmore_link').addClass('readmore_link-show');
    $('.readmore_link-text').html('More&nbsp;&nbsp;&#x25BC');

    // Show on button click
    $(document).on('click','.readmore_link-show',function(e){
        $(this).next('.readmore_content').removeClass('readmore_hide');
        $(this).next('.readmore_content').children('.readmore_fade').addClass('readmore_fadeout-gone').removeClass('readmore_fadeout');
        $(this).addClass('readmore_link-hide').removeClass('readmore_link-show');
        $(this).children('.readmore_link-text').html('Less&nbsp;&nbsp;&#x25B2;');
        e.preventDefault();
    });

    // Show on content click
    $(document).on('click','.readmore_content.readmore_hide',function(e){
        $(this).removeClass('readmore_hide');
        $(this).children('.readmore_fade').addClass('readmore_fadeout-gone').removeClass('readmore_fadeout');
        $(this).prev('.readmore_link').addClass('readmore_link-hide').removeClass('readmore_link-show');
        $(this).prev('.readmore_link').children('.readmore_link-text').html('Less&nbsp;&nbsp;&#x25B2;');
        e.preventDefault();
    });

    // Hide on button click
    $(document).on('click','.readmore_link-hide',function(e){
        $(this).next('.readmore_content').addClass('readmore_hide');
        $(this).next('.readmore_content').children('.readmore_fade').addClass('readmore_fadeout').removeClass('readmore_fadeout-gone');
        $(this).addClass('readmore_link-show').removeClass('readmore_link-hide');
        $(this).children('.readmore_link-text').html('More&nbsp;&nbsp;&#x25BC');
        e.preventDefault();
    });
});

