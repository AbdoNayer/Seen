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

    $(".done-subscription").fadeOut("");
    $(".form-add-services").fadeOut("");
    $(".form-add-new-list").fadeOut("");
    $(".show-list-subscription").fadeOut("");
    $(".form-new-offer").fadeOut("");

    // Show Subscription
    $(document).on("click", ".next-subscription",function() {
        $(".form-subscription").fadeOut("");
        $(".done-subscription").fadeIn("");
    });

    // Show Form Services
    $(document).on("click", ".add-new-services",function() {
        $(".list-services").fadeToggle("");
        $(".form-add-services").fadeToggle("");
    });

    // Show Form List
    $(document).on("click", ".add-new-list",function() {
        $(".all-list-dolar").fadeToggle("");
        $(".form-add-new-list").fadeToggle("");
    });

    // Show Subscription List
    $(document).on("click", ".show-subscription",function() {
        $(".all-list-dolar").fadeToggle("");
        $(".show-list-subscription").fadeToggle("");
    });

    // Show Form New Offers
    $(document).on("click", ".add-new-offer",function() {
        $(".offers-list").fadeToggle("");
        $(".form-new-offer").fadeToggle("");
    });

    // Done Subscription And Push To Home
    $(document).on("click", ".done-add-subscription",function() {
        setTimeout(function() {
            $('#doneAddSubscriptionModal').modal('hide');
            document.location.href = "/index-before-login.html";
        }, 2000);
    });

    // Animation Page
    AOS.init();
    
});


