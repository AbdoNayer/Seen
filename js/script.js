// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".spinner").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

});

$(document).ready(function () {

    // // ADD IMAGE
    $('.image-uploader').change(function (event){
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="icon-trash text-white"></i></button></div>');
    });
    
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close',function (){
        $(this).parents('.uploaded-block').remove();
    });

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay, .modal-country",function() {
        $(".handle").toggleClass("closed");
        $("nav").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("nav li").toggleClass("animSlideIn");
        $("body").toggleClass("overflow-hidden");
    });
    
    // Click Remove Class For All Section
    $(document).on("click", ".overlay-absolute",function() {
        $(".form-search").removeClass("showing");
        $(".up-in-filter").removeClass("showing");
        $("body").removeClass("overflow-hidden");
    });

    // Animation Page
    AOS.init();
    
});


