import form from './form';
import clusterAdd from '../clusterAdd';

const placemark = (current, data, myMap, clusterer) => {

    const myMark = new ymaps.Placemark([current.coords[0], current.coords[1]], {
        balloonContentHeader: `${current.reviews[0].name}`,
        balloonContentBody: `<a href="#" class="mark-link" data-info="${current.address}">${current.address}</a><p>${current.reviews[0].text}</p>`,
        balloonContentFooter: `${current.reviews[0].date}`
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