import form from './view/form';

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [54.83, 37.11],
        zoom: 5
    }, {
            searchControlProvider: 'yandex#search'
        });


    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            const coords = e.get('coords');
            const  myPlacemark = form(coords);
            myMap.geoObjects.add(myPlacemark);
        }
    });
}
