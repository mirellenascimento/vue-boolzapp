
//sets random time for the messages
function lastAcessTime(){
	var today = new Date();
	var computerTime = today.getHours() + ":" + today.getMinutes()

	let hours = Math.floor(Math.random()*18)+5;
	let minutes = Math.floor(Math.random()*59);

	if (minutes<10){
		minutes = '0'+ minutes;
	}

  let timeLastAcess = hours + ':' + minutes
  return timeLastAcess
}

function randomText(array) {
   return array[Math.floor(Math.random() * array.length)];
};


//chat generator - generate random chats
function chatGenerator(number, arrayText, arrayProb){
  const messages = [];
  let hours = Math.floor(Math.random()*18)+5;
  let minutes = Math.floor(Math.random()*59);

  for (let i = 0; i < number; i++) {
    let chatText = randomText(arrayText);
    let sentBy = randomText(arrayProb);
    if (minutes < 20) {
      minutes += Math.floor(Math.random()*10);
    } else {
      minutes += Math.floor(Math.random()*2);
    }

    let message = {
      'text': chatText,
      'time': hours + ':' + minutes,
      'sentByContact': sentBy
    };
    messages.push(message);
  }
  return messages;
}
