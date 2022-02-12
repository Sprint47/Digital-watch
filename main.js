let timeZone
let hour;
let min;
let sec;
let date;

setInterval(() => {

  timeZone = new Date();
  hour = timeZone.getHours();
  min = timeZone.getMinutes();
  sec = timeZone.getSeconds();
  amPM = 'AM';
  date = timeZone.getDate() + '/' + timeZone.getFullYear();


  if (hour > 12) {
    hour -= 12;
    amPM = 'PM';
  }

  if (hour == 0) {
    hour = 12;
    amPM = 'AM';
  }


  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById('hour').innerText = hour;
  document.getElementById('minute').innerText = min;
  document.getElementById('second').innerText = sec;
  document.getElementById('amPM').innerText = amPM;
  document.getElementById('date').innerText = date;

}, 1000);
