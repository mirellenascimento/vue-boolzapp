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
};


//chat generator
function chatGenerator(number, arrayText, arrayProb){
  const messages = [];
  let hours = Math.floor(Math.random()*18)+5;
  let minutes = Math.floor(Math.random()*59);

  for (let i = 0; i < number; i++) {
    let chatText = randomText(arrayText);
    let sentBy = randomText(arrayProb);
    minutes += Math.floor(Math.random()*10);

    let message = {
      'text': chatText,
      'time': hours + ':' + minutes,
      'sentByContact': sentBy
    };
    messages.push(message);
  }
  return messages;
}
