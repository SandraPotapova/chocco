let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.751479, 37.607115],
    controls:[],
    zoom: 14
  });

  const coords = [
    [55.749604, 37.603685],
    [55.757435, 37.627901],
    [55.758414, 37.581670],
    [55.744528, 37.581101]
  ];

  const chocoMarker = ymaps.templateLayoutFactory.createClass(
    '<svg class="map__marker">'+
      '<use xlink:href="/sprite.svg#marker"/>'+
    '</svg>'
  );

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: chocoMarker,
    //iconImageSize: [46, 57],
    //iconImageOffset: [-46, -57]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);