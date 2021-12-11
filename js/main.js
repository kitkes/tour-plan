const swiper = new Swiper(".swiper", {
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
