window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item"),
    playBtn = document.querySelector("#playVideo"),
    video = document.querySelector("#video");
    playBtn .addEventListener('click', function () {
        video.play();
        video.setAttribute('controls' , 'controls');
        playBtn.style.display = "none" ;

    });
    video.addEventListener('ended', function () {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls');
    });
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs__item_active")) {
                    otherItem.classList.remove("tabs__item_active");
                }
            })
            elem.classList.add("tabs__item_active")
        });
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="carousel__arrow carousel__prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel__arrow carousel__next"><i class="fa-solid fa-chevron-right"></i></div>'
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryNowBtn').on('click', popupOpen);
    $('#getStartBtn').on('click', popupOpen);
    $('#getStartedBtn').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('popup').removeClass('popup_active');
        $('body').css('overflow','visible');
    });
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').css('overflow','hidden');
    }
    $("a[href*=]").on("click", function(e){
        var anchor = $(this);
        $('html, body') .stop().animate({
            scrollTop: $(anchor .attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});