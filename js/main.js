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
		searchBoxIcon:'fas fa-search',
		contactSearch: '',
		filteredProfiles: [],
		inputMessage: '',
	},

	created(){
		this.selectedProfile = this.contactsProfile[0];
		this.lastMessageSent();
		this.scrollView();
	},

	mounted() {
	this.filteredProfiles = [...this.contactsProfile];
},

	methods:{
		search: function() {
      this.filteredProfiles = this.contactsProfile.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
      );
    },

		searchBoxArrow: function(){
			return this.searchBoxIcon = 'fas fa-arrow-left';
		},

		chatWith: function(chatIndex){
			this.selectedProfile = this.contactsProfile[chatIndex];
		},

		lastMessageSent: function(){
			this.contactsProfile.forEach(function(contact){
				contact.lastMessage = contact.messages[contact.messages.length - 1].text;
			});
		},

		scrollView: function(){
			var div = document.getElementById("chat-messages");
			div.scrollTop = div.scrollHeight;
		},

		send: function(){
			var timeNow = new Date();
			let myMessage = {
				'text': this.inputMessage,
				'time': timeNow.getHours() + ":" + timeNow.getMinutes(),
				'sentByContact': false
			};
			this.selectedProfile.messages.push(myMessage);
			this.scrollView();
			this.inputMessage= '';

			setTimeout(function () {
			  var timeNow = new Date();
				if (timeNow.getMinutes()){
					timeNow.getMinutes() = '0'+ timeNow.getMinutes();
				}
				let answerMessage = {
					'text': randomText(chatShort),
					'time': timeNow.getHours() + ":" + timeNow.getMinutes(),
					'sentByContact': true
				};
				myApp.selectedProfile.messages.push(answerMessage);
				this.scrollView();
			}, 3000);
		},

	}
});
