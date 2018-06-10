import display from './view/display';

export default function addReview (data, current) {
    const addBtn = document.getElementById('add');
    const name = document.getElementById('name');
    const place = document.getElementById('place');
    const text = document.getElementById('text');
    const reviews = [];
    const date = new Date().toLocaleDateString();
    addBtn.addEventListener('click', e => {
        e.preventDefault();
        if(!name.value || !place.value || !text.value){
            alert('Заполните все поля');
        } else {
            const review = {
                name: name.value,
                place: place.value,
                text: text.value,
                date
            }

            reviews.push(review);
            data[current.address].reviews = reviews;
            display(reviews);
        }
    })
    return false;
}
