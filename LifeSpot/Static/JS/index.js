let nsession = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
}

function NcheckAge() {
    if (nsession.userAge >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
let NsessionLog = function () {
    console.log('Начало сессии: ' + nsession.startDate)
    console.log('Даныне клиента: ' + nsession.userAgent)
    console.log('Возраст пользователя: : ' + nsession.userAge)
}

function filterContent()
{
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




