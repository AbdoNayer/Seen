// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".spinner").delay(500).fadeOut(400, function() {
        document.documentElement.style.setProperty('--backRightIn', 'translateX(100%)')
        document.documentElement.style.setProperty('--backLefttIn', 'translateX(-100%)')
        $(".loader").fadeOut(1500);
    });
    $("body").css("overflow-y", "auto");

});

$(document).ready(function () {

    // // ADD IMAGE
    $('.image-uploader').change(function (event){
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="icon-trash text-white"></i></button></div>');
    });
    
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close',function (){
        $(this).parents('.uploaded-block').remove();
    });

    // // ADD IMAGE
    $('.video-uploader').change(function (event){
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block"><video src="'+ URL.createObjectURL(event.target.files[0]) +'" controls></video><button class="close"><i class="icon-trash text-white"></i></button></div>');
    });
    
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close',function (){
        $(this).parents('.uploaded-block').remove();
    });

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay, .modal-country",function() {
        $(".handle").toggleClass("closed");
        $(".nav-header").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });
    
    // Click Remove Class For All Section
    $(document).on("click", ".overlay-absolute",function() {
        $("body").removeClass("overflow-hidden");
    });

    // Upload Files
    $('#file-upload').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    // Animation Page
    AOS.init();
    
});


