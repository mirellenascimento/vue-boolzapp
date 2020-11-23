function lastAcessTime(){
	var today = new Date();
	var computerTime = today.getHours() + ":" + today.getMinutes()

	let hours = Math.floor(Math.random()*18)+5;
	let minutes = Math.floor(Math.random()*59);

  if (hours<10){
		hours = '0'+ hours;
	}
	if (minutes<10){
		minutes = '0'+ minutes;
	}

  let timeLastAcess = hours + ':' + minutes
  return timeLastAcess
}

function randomText(array) {
   return array[Math.floor(Math.random() * array.length)];
}
