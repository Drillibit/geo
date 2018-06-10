export default function display(reviews) {
    const revNode = document.createElement('div');
    const reviewBlock = document.getElementById('reviews');
        reviews.forEach(el => {
            revNode.innerHTML = `<strong>${el.name}</strong> ${el.place} ${el.date} <br/>
                                <p>${el.text}</p>`
            reviewBlock.appendChild(revNode);
        });
}
