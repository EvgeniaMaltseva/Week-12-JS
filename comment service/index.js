/* let fullUserName = document.getElementById("nametext").value; // вызов имени из документа по id
console.log(fullUserName);
let arr = fullUserName.split(" ");// split разбивает строку на отдельные элементы - фамилию, имя, отчество
let lastUserName = arr[0]; // Фамилия
let firstUserName = arr[1]; // Имя
let secondUserName = arr[2]; //Отчество

let link = document.getElementById("link").value; // вызов из документа по id
let userText = document.getElementById("commentsdown").value; //  вызов из документа по id

let newUserName = 0  */
/* for(let i=0; i<arr.lenght; i++){

    newUserName = newUserName + (arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() +' ');// переменная для преобразования всех данных
    console.log(newUserName);
} 
console.log(newUserName); */

function submitForm(){
const button = document. querySelector ('.submit');
button.addEventListener('click', () => {

let fullUserName = document.getElementById("nametext").value; // вызов имени из документа по id
let arr = fullUserName.split(" ");// split разбивает строку на отдельные элементы - фамилию, имя, отчество
let lastUserName = arr[0]; // Фамилия
let firstUserName = arr[1]; // Имя
let secondUserName = arr[2]; //Отчество
let link = document.getElementById("link").value; // вызов из документа по id
let userText = document.getElementById("commentsdown").value; //вызов из документа по id

let newUserName = (arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() +' ')+(arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase() +' ') + (arr[2][0].toUpperCase() + arr[2].slice(1).toLowerCase());// замена первой буквы на заглавную

    let divNameOutput = document.getElementsByClassName('shownUserName'); // переменная для вывода имени пользователя в чате и определение места на странице
    divNameOutput[0].textContent = newUserName; // вывод имени пользователя в чате
    let divImageOutput = document.getElementsByClassName('userphoto'); // переменная для вывода линка пользователя в чате и определение места на странице
    divImageOutput[0].style.width="30%"; // задана ширина для фото
    divImageOutput[0].style.height="150px"; // задана высота для фото
    divImageOutput[0].setAttribute('src', link); // вывод линка пользователя в чате с установлением значения атрибута
    let divTextOutput = document.getElementsByClassName('user-text'); // переменная для вывода текста пользователя в чате и определение места на странице
    divTextOutput[0].textContent = checkSpam(userText); // вывод текста пользователя в чате
});

function checkSpam(str){
    let changedText = str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
    return changedText;
};
}






