let userNumber;
let numberSystem, numberSystem2;
let res, result;
let footerColor;
let time, hour, minute, second;
let colorToFooter;

footerColor = document.getElementById('footerColor');



function resultNumber(){
    userNumber = document.getElementById('num').value;
    numberSystem = document.getElementById('numberSystem').value;
    numberSystem2 = document.getElementById('numberSystem2').value;

    numberSystem = +numberSystem;
    numberSystem2 = +numberSystem2;

    if ((numberSystem <= 1) || (numberSystem >= 37) || (numberSystem2 <= 1) || (numberSystem2 >= 37)){
        swal("Ошибка!", "Неправильная система счисления!", "error");
    } else {
        res = parseInt(userNumber, numberSystem);

        if (isNaN(res)){
            swal("Ошибка!", "Проверьте правильность введёного числа системы счисления!", "error");
        } else {
            result = res.toString(numberSystem2);
            swal("Результат: ", result, "success");
        }
    }
}
function timeColor(){
    time = new Date();
    hour = time.getHours().toString();
    minute = time.getMinutes().toString();
    second = time.getSeconds().toString();

    if (hour.length < 2){
        hour = '0' + hour;
    }
    if (minute.lenght < 2){
        minute = '0' + minute;
    }
    if (second.length < 2){
        second = '0' + second;
    }

    colorToFooter = '#' + hour + minute + second;

    footerColor.style.backgroundColor = colorToFooter;
}

setInterval(timeColor, 1000);