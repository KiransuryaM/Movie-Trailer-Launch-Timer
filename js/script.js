const days = document.querySelector("#days");
const hr = document.querySelector("#hours");
const mn = document.querySelector("#minutes");
const sc = document.querySelector("#seconds");


function timer(){
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
const currentDate = new Date();
const difference = newYear-currentDate;
const diff = Math.floor(difference/1000/60/60/24);
const hour = Math.floor((difference/1000/60/60)%24);
const min = Math.floor((difference/1000/60)%60);
const sec = Math.floor((difference/1000)%60);
days.innerHTML=diff<10?"0"+diff:diff;
hr.innerHTML= hour<10?"0"+hour:hour;
mn.innerHTML= min<10?"0"+min:min;
sc.innerHTML= sec<10?"0"+sec:sec;
}

setInterval(timer,1000);