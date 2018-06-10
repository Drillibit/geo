import form from './view/form';

export default function getAddress(coords, position) {
    const result = ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        const addres = firstGeoObject.getAddressLine();
        return addres;
    })

    return result;
}