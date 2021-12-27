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

var menuButton = document.querySelector (".menu-button");
menuButton.addEventListener ("click", function () {
  console.log ("Клик по кнопке меню");
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__visible");
});
