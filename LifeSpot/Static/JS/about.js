/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getComment() {
    let comment = {}
    comment.autor = prompt("What is you name?")
    if (comment.autor == nul) { return }
    commemt.text = prompt("Enter calback")
    if (comment.text == null) { return }
    comment.date = new Date().toLocaleString()
    let Likes = prompt("Wont like comment")
    if (Likes) {
        let 
    }
}


function getReview() {
    // Создадим объект
    let review = {}
    
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }
    
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()
    
    // Добавим на страницу
    writeReview(review)
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>`  +
        '</div>';
}
