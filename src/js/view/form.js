import '../../css/form.sass';

export default function (data, coords) {
    const [top, left] = coords;
    let reviewBlockWidth = 320;
    let reviewBlockHeigth = 539;

    const container = document.createElement('div');
    container.draggable = true;
    container.id = 'popup';
    container.innerHTML = `<div class="form_container">
                            <div class="header"><p>Address</p></div>
                            <div id="reviews">
                            </div>
                            <form action="" class="review_form">
                                <input type="text" placeholder="name">
                                <input type="text" placeholder="place">
                                <textarea name="" id="text" cols="30" rows="10"></textarea>
                                <button id="add">Добавить</button>
                            </form>
                            </div>`;
    container.setAttribute('style',
        `
        z-index: 10;
        position: absolute;
        top: ${left}px;
        left: ${top}px;
            `);
    return container;
}