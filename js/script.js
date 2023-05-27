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


    $('.image-uploader-in-more').change(function (event){
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block"><img class="border" src="'+ URL.createObjectURL(event.target.files[0]) +'"><div class="control-img w-100 h-100 d-flex align-items-center justify-content-center"><button class="icon-circle bg-danger rounded-3 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="icon-trash text-white"></i></button><button class="icon-circle bgColorMain rounded-3 mx-2"><i class="icon-edit text-white"></i></button></div></div>');
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
    $(".input-bank").fadeOut("");
    $(".input-bank").fadeOut("");
    $(".form-gallery").fadeOut("");
    $(".block-subscribe").fadeOut("");
    $(".none-section").fadeOut("");

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

    // Show Add New Bank
    $(document).on("click", ".add-bank",function() {
        $(".add-bank").fadeToggle("");
        $(".input-bank").fadeToggle("");
    });

    // Show Add New Gallery
    $(document).on("click", ".add-new-gallery",function() {
        $(".list-gallery").fadeToggle("");
        $(".form-gallery").fadeToggle("");
    });

    // Show Add New Subscribe
    $(document).on("click", ".add-new-subscribe",function() {
        $(".block-subscribe").fadeToggle("");
        $(".found-subscribe").fadeToggle("");
    });

    // Show New Phone
    $(document).on("click", ".add-phone",function() {
        $(".list-phones").append(`
            <div class="section-phone mb-3">
                <div class="d-flex align-items-center mb-3">
                    <img src="./images/call.png" alt="" width="30" height="30">
                    <h6 class="m-0 mx-2">أرقام الهاتف</h6>
                </div>
                <div class="d-flex align-items-center">
                    <input placeholder="ادخل الرابط" class="w-100 borderColorInput bgBody" />
                    <label class="switch position-relative d-inline-block me-3">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        `);
    });

    // Done Subscription And Push To Home
    $(document).on("click", ".done-add-subscription",function() {
        setTimeout(function() {
            $('#doneAddSubscriptionModal').modal('hide');
            document.location.href = "/index-before-login.html";
        }, 2000);
    });

    // Start Chat ScrollDown
    (function() {
        $(".live-chat").animate({ scrollTop: $('.live-chat').prop("scrollHeight")}, 1000);
        $(function () {
            $('.form-chat').on('submit', function (event) {
                event.preventDefault();
                var message = $('.right-inbox').first().clone();
                message.find('p').text($('.input-custom-size').val());
                message.appendTo('.live-chat');
                $('input').val('');
                $(".live-chat").animate({ scrollTop: $('.live-chat').prop("scrollHeight")}, 1000);
            });
        });
    })(jQuery);
    

    // Select Menu Drop Down
    $(document).on("click", ".on-click-head-menu",function() {
        $(this).parent('.dropdown').toggleClass('open').siblings().removeClass('open');
    });

    // Animation Page
    AOS.init();
    
});


