//1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.


let cub = document.querySelector('.cub');
let area = document.querySelector('.area');

document.body.addEventListener('keydown', (event) => {
    let key = event.key;
    if (event.ctrlKey == true && key == 'e') {
        cub.classList.toggle('cub--hidden');
        area.classList.toggle('area--toggle');
        cub.innerHTML = area.value.replace(/\n/g, '<br/>');
    }
});



//3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.


window.onload = function () {
    let width = cub.offsetWidth;
    let height = cub.offsetHeight;

    document.onmousedown = function () {
        let posX = event.pageX;
        let posY = event.pageY;

        document.onmousemove = function (event) {
            let resW = width + event.pageX - posX;
            let resH = height + event.pageY - posY;
            cub.style.width = resW + "px";
            cub.style.height = resH + "px";

            document.onmouseup = function () {
                event.preventDefault;
            }
        }
    }
}

// поставить флаг при маус даун и при апе убирать его.в муве проверка если есть флаг - изменять размер
