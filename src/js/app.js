import placemark from './view/placemark';
import form from './view/form';
import '../css/main.sass';

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [54.83, 37.11],
        zoom: 5
    }, {
            searchControlProvider: 'yandex#search'
        });
    const map = document.getElementById('map');    
    map.addEventListener('click', e => {
        console.log(e.target);
        if (e.target.id === 'popup') {
            e.target.parentNode.removeChild(e.target);
        }
    })

    clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        clusterDisableClickZoom: true,
        openBalloonOnClick: true,
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        clusterBalloonItemContentLayout: customItemContentLayout
    });

    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            const position = e.get('position');
            const coords = e.get('coords');
            const data = 'hello'
            // const  myPlacemark = placemark(coords);
            // myMap.geoObjects.add(myPlacemark);
            map.appendChild(form(data, position));
        }
    });
}
