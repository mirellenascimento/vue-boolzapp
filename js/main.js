const myApp = new Vue({
	el: '#root',
	data:{
		userProfile: {
			name: 'User Name',
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
		selectedProfile:			{
						name: 'Amadeo',
						image: 'img/avatar_8.jpg',
						lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
						lastMessage: '',
						messages: chatGenerator(Math.floor(Math.random()*30), chatText, bool),
					},

		searchBoxIcon:'fas fa-search',
		searchBoxValue: '',
		filteredProfiles: [],
	},

	methods:{

		searchBoxArrow: function(){
			return this.searchBoxIcon = 'fas fa-arrow-left';
		},

		chatWith: function(chatIndex){
			this.selectedProfile.name = this.contactsProfile[chatIndex].name;
			this.selectedProfile.image = this.contactsProfile[chatIndex].image;
			this.selectedProfile.lastAcess = this.contactsProfile[chatIndex].lastAcess;
			this.selectedProfile.messages = this.contactsProfile[chatIndex].messages;
		},

		searchBoxFilter: function(){
			let filteredProfiles = this.contactsProfile.filter(function(contact){
				return contact.name.includes(this.searchBoxValue);
			});
			this.contactsProfile = [...filteredProfiles]
		},

		lastMessageSent: function(){
			this.contactsProfile.forEach(function(contact){
				contact.lastMessage = contact.messages[contact.messages.length - 1].text;
				return contact.lastMessage;
			});
		},

	}
})

//With this console log, the contacts at contacts list have the last message uploaded;
console.log(myApp.lastMessageSent());
