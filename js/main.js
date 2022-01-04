$(document).ready(function () {

  const hotelSlider = new Swiper(".hotel-slider__swiper", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button__next",
      prevEl: ".hotel-slider__button__prev",
    },
  });
  
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button__next",
      prevEl: ".reviews-slider__button__prev",
    },
  });
  
  type = "text/javascript" > ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.57413952, 79.80234031],
      zoom: 10,
    });
    // Создание метки
    var myPlacemark = new ymaps.Placemark(
      // Координаты метки
      [7.57413952, 79.80234031],
    );
  
    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
  }
  
  $(".newsletter").parallax({ imageSrc: "img/newsletter.jpg" });
  
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    console.log ("Клик по кнопке меню");
    document
    .$(".navbar-bottom")
    .toggleClass("navbar-bottom__visible");
  });
  
  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closemodalButton.on("click", closeModal);

    function openModal() {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
  }
    function closeModal(event) {
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });
});