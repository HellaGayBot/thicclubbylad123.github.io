const clock = document.getElementById('clock');

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    return(time);
}

clock.innerHTML = getTime();

setInterval(function (){
  const time = getTime();
  clock.innerHTML = time;
}, 100)
