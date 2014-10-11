$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        type: 'image',
        delegate: 'a', // the selector for gallery item
        gallery: {
          enabled:true
        }
    });
});
