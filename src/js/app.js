import '../css/form.sass';
import form from './view/form';

const data = {};
ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [50.11, 22.00],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    }),
    clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        clusterDisableClickZoom: true,
        openBalloonOnClick: true,
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        clusterBalloonItemContentLayout: customItemContentLayout
    }),
    customItemContentLayout = ymaps.templateLayoutFactory.createClass(
        '<h2 class=ballon_header>{{ properties.balloonContentHeader|raw }}</h2>' +
        '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
        '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
    );

    myMap.events.add('click', e => {
        const coords = e.get('coords');
        const position = e.get('position');

        geocode(coords, position, clusterer, myMap);
        clusterer.balloon.close();

});


    function geocode(coords, position, clusterer, myMap) {
        ymaps.geocode(coords).then(res => {
            const firstGeoObject = res.geoObjects.get(0);

            const address = firstGeoObject.getAddressLine()
            
            data[address] = {};
            data[address].address = address;
            data[address].position = position;
            data[address].coords = coords;
            form(data, data[address], myMap, clusterer);

        });
    }
}
