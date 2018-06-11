import form from './form';
import clusterAdd from '../clusterAdd';

const placemark = (current, data, myMap, clusterer) => {
    const {name, address, date} = current;

    const myMark = new ymaps.Placemark([current.coords[0], current.coords[1]], {
        balloonContentHeader: `${name}`,
        balloonContentBody: `<a href="#" class="mark-link">${address}</a>`,
        balloonContentFooter: `${date}`
    }, {
        openBalloonOnClick: false
    });

    myMap.geoObjects.add(myMark);

    myMark.events.add('click', function () {
        form(data, current);
    });

    clusterAdd(myMark, clusterer, myMap);

    return true;
};

export default placemark;