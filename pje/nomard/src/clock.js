const clock = document.querySelector("#clock");
const daily = document.querySelector("#daily");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function getClock(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    const day =  week[now.getDay()];

    const houre = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    daily.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
    clock.innerText = `${houre} : ${minutes} : ${seconds}`;

}

getClock();
setInterval(getClock, 1000);