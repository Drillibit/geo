module.exports = (coords) => {
    return new ymaps.Placemark([coords[0], coords[1]], {
        balloonContentHeader: "Балун метки",
        balloonContentBody: "Содержимое <em>балуна</em> метки",
        balloonContentFooter: "Подвал",
        hintContent: "Хинт метки"
    },{
        // openBalloonOnClick: false
    }
);
};