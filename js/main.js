const myApp = new Vue({
	el: '#root',
	data:{
		// profiles
		userProfile: {
			name: 'Mirelle Nascimento',
			image: 'img/avatar_io.jpg',
		},
		contactsProfile: [
			{
				name: 'Giuseppe',
				image: 'img/avatar_1.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Giovanni',
				image: 'img/avatar_2.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Francesco',
				image: 'img/avatar_3.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Matteo',
				image: 'img/avatar_4.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Lucio',
				image: 'img/avatar_5.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Anna',
				image: 'img/avatar_6.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Mario',
				image: 'img/avatar_7.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			},
			{
				name: 'Paolo',
				image: 'img/avatar_8.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: '',
				messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
			}
		],

		//current profile for chat
		selectedProfile: null,

		//filter contacts
		contactSearch: '', // gets the value of the search box input
		filteredProfiles: [], //deposit fot contacts filtered by the search, starts the same as contactsProfile

		//changes icons
		searchBoxIcon:'fas fa-search', // used to the search icon replacement
		messageRightIcon: "fas fa-microphone", // replaces the microphone with a paper plae to send the message;

		//for sending and receiving messages
		inputMessage: '', //gets the input message value
		messageReceiver: null,
		messageReceiverIndex: 0,

		//for showing and hiding emojis
		activeClass: '',
		activeActiveClass: '',
	},

	created(){
		this.selectedProfile = this.contactsProfile[0]; //sets the chat when the page is just opened

		this.$nextTick(function(){
			this.lastMessageSent(); //inizializest this function
		});
	},

	watch:{
		inputMessage(){
			this.changeRightIcon();
		}
	},

	mounted() {
		this.filteredProfiles = [...this.contactsProfile]; //copy contactsProfile into filteredProfiles

		this.$nextTick(function(){ //sets chatbox scrolling to bottom
			this.scrollView();
		});

		window.addEventListener('keydown', (event) => {// sends the message when enter is pressed
			if (event.which === 13){
				this.send();
			};
		});
	},

	methods:{
		// function for filter the contacts list with contactSearch value
		search: function() {
      this.filteredProfiles = this.contactsProfile.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

		//replaces the seacr icon with an arrow
		searchBoxArrow: function(){
			return this.searchBoxIcon = 'fas fa-arrow-left';
		},

		//selects the contact for chat
		chatWith: function(chatIndex){
			this.selectedProfile = this.contactsProfile[chatIndex];
			this.$nextTick(function(){
				this.scrollView();
			});
		},

		//sets the last message in contactsProfile
		lastMessageSent: function(){
			this.contactsProfile.forEach(function(contact){
				contact.lastMessage = contact.messages[contact.messages.length - 1].text;
			});
		},

		//shows and hides emojis block
		activateClass: function(){
			if (this.activeClass === 'active'){
				this.activeClass = '';
				this.activeActiveClass = '';
			} else {
				this.activeClass = 'active';
				this.activeActiveClass = 'active-active';
			}
			this.$nextTick(function(){ //sets chatbox scrolling to bottom
				this.scrollView();
			});
		},

		//insert emojis into inputMessage
		placeInText: function(index){
			this.inputMessage += allEmojis[index].emoji + ' ';
		},

		//makes the last messages visible for first
		scrollView: function(){
			var div = document.getElementById("chat-messages");
			div.scrollTop = div.scrollHeight;
		},

		//toggles the icon at the right of inputMessage between microphone and paper plane
		changeRightIcon: function(){
				if (this.inputMessage === ''){
					this.messageRightIcon = 'fas fa-microphone';
				} else {
					this.messageRightIcon = 'fas fa-paper-plane';
				}
			},


		//sends input message and gets the answer in 3s
		//to send message
		send: function(){
			if (this.inputMessage === ''){
				//avoids empty messages
			}else{
				//gets time of message
				var timeNow = new Date();
				let hours = timeNow.getHours();
				let minutes = timeNow.getMinutes();

				//fixes minutes
				if (minutes<10){
					minutes = '0'+ minutes;
				}

				//create message object
				let myMessage = {
					'text': this.inputMessage,
					'time': hours + ':' + minutes,
					'sentByContact': false
				};

				//sends message
				this.selectedProfile.messages.push(myMessage);

				//gets contact index for whom the message was sent
				this.messageReceiver = (contact) => contact.name === this.selectedProfile.name;
				this.messageReceiverIndex = this.contactsProfile.findIndex(this.messageReceiver);

				this.$nextTick(function(){//sets chatbox scrolling to bottom
					this.scrollView();
					this.lastMessageSent();
				});
				this.inputMessage= '';
				this.changeRightIcon();

				//to get answer
				setTimeout(function () {
					var timeNow = new Date();
					let hours = timeNow.getHours();
					let minutes = timeNow.getMinutes();

					if (minutes<10){
						minutes = '0'+ minutes;
					}
					let answerMessage = {
						'text': randomText(chatShort),
						'time': hours + ':' + minutes,
						'sentByContact': true
					};
					myApp.contactsProfile[myApp.messageReceiverIndex].messages.push(answerMessage);
					myApp.$nextTick(function(){//sets chatbox scrolling to bottom
						this.scrollView();
						this.lastMessageSent();
					});
				}, 3000);
			}
		},
	},
});
