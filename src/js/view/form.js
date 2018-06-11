import addReview from '../addReview';
import placemark from '../view/placemark';

export default function form(data, current, myMap, clusterer) {
    const container = document.getElementById('popup');
    const [left, top] = current.position;
    container.setAttribute('style',
        `
    width: 350px;
    z-index: 10;
    position: absolute;
    top: ${top}px;
    left: ${left}px;
        `);
    container.innerHTML = `<div class="form_container">
                        <div class="header"><p>${current.address}</p><button id="close">x</button></div>
                        <div id="reviews">
                        </div>
                        <form id="form_vals" action="" class="review_form">
                            <input id="name" type="text" placeholder="name">
                            <input id="place" type="text" placeholder="place">
                            <textarea name="" id="text" cols="15" rows="10"></textarea>
                            <button id="add">Добавить</button>
                        </form>
                        </div>`;
    addReview(data, current, myMap, clusterer);

    return true;
}