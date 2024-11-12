document.addEventListener('DOMContentLoaded', function () {
    let array = []
    const randomIdEnd = getRandomInt(100);
    let randomIdStart = getRandomInt(randomIdEnd);

    for (let i=randomIdStart; i<randomIdEnd; i++){
        array.push(`https://jsonplaceholder.typicode.com/comments?postId=${randomIdStart}`);
        randomIdStart+=1;
    }
    for (let i = 0; i < array.length; i++) {
        fetch(array[i])
            .then(response => {
                if (response.ok !== true) {
                    throw new Error('Неудачный запрос');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                document.getElementById('loading').style.display = 'none';
                data.forEach(review => {
                    const oneReview = document.createElement('div');
                    const title = document.createElement('h3');
                    const email = document.createElement('h4');
                    const body = document.createElement('p');
                    title.textContent = review.name;
                    email.textContent = review.email;
                    body.textContent = review.body;
                    oneReview.classList.add('review');
                    oneReview.appendChild(title);
                    oneReview.appendChild(email);
                    oneReview.appendChild(body);
                    document.getElementById('all_reviews').appendChild(oneReview);
                });
            })
            .catch(error => {
                document.getElementById('loading').style.display = 'none';
                let errorDiv = document.createElement('div');
                errorDiv.classList.add('error');
                errorDiv.textContent = 'Произошла ошибка при попытке загрузки отзыва';
                document.getElementById('reviews_block').appendChild(errorDiv);
            });
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
});