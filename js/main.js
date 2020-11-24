const myApp = new Vue({
	el: '#root',
	data:{
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
		selectedProfile: null,
		searchBoxIcon:'fas fa-search', // used to the search icon replacement
		contactSearch: '', // gets the value of the search box input
		filteredProfiles: [], //deposit fot contacts filtered by the search, starts the same as contactsProfile
		inputMessage: '', //gets the input message value
	},

	created(){
		this.selectedProfile = this.contactsProfile[0]; //sets the chat when the page is just opened
		this.lastMessageSent(); //inizializest this function
	},

	mounted() {
		this.filteredProfiles = [...this.contactsProfile]; //copy contactsProfile into filteredProfiles
		this.$nextTick(function(){ //sets chatbox scrolling to bottom
			this.scrollView();
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

		//makes the last messages visible for first
		scrollView: function(){
			var div = document.getElementById("chat-messages");
			div.scrollTop = div.scrollHeight;
		},

		//sends input message and gets the answer in 3s
		//to send message
		send: function(){
			var timeNow = new Date();
			let hours = timeNow.getHours();
			let minutes = timeNow.getMinutes();

			if (minutes<10){
				minutes = '0'+ minutes;
			}

			let myMessage = {
				'text': this.inputMessage,
				'time': hours + ':' + minutes,
				'sentByContact': false
			};
			this.selectedProfile.messages.push(myMessage);
			this.$nextTick(function(){//sets chatbox scrolling to bottom
				this.scrollView();
			});
			this.inputMessage= '';

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
				myApp.selectedProfile.messages.push(answerMessage);
				myApp.$nextTick(function(){//sets chatbox scrolling to bottom
					this.scrollView();
				});
			}, 3000);
		},

	}
});
