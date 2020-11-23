const myApp = new Vue({
	el: '#root',
	data:{
		userProfile: {
			name: 'User Name',
			image: 'img/avatar_io.jpg',
		},
		contactsProfile: [
			{
				name: 'Contact 01',
				image: 'img/avatar_1.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
				messages: [
					{
						text: randomText(chatQuestions),
						time: '12:34',
						sentByContact: true,
					},
					{
						text: randomText(chatQuestions),
						time: '12:55',
						sentByContact: false,
					},
					{
						text: randomText(chatQuestions),
						time: '12:34',
						sentByContact: false,
					}
				],
			},
			{
				name: 'Contact 02',
				image: 'img/avatar_2.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 03',
				image: 'img/avatar_3.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 04',
				image: 'img/avatar_4.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 05',
				image: 'img/avatar_5.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 06',
				image: 'img/avatar_6.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 07',
				image: 'img/avatar_7.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			},
			{
				name: 'Contact 08',
				image: 'img/avatar_8.jpg',
				lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
				lastMessage: 'Hello my friend!',
			}
		],
		selectedProfile:			{
						name: 'Contact 01',
						image: 'img/avatar_1.jpg',
						lastAcess: 'Ultimo accesso oggi alle ' + lastAcessTime(),
						lastMessage: 'Hello my friend!',
						messages: [
							{
								text: randomText(chatQuestions),
								time: '12:34',
								sentByContact: true,
							},
							{
								text: randomText(chatQuestions),
								time: '12:55',
								sentByContact: false,
							},
							{
								text: randomText(chatQuestions),
								time: '12:34',
								sentByContact: false,
							}
						],
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
	},
})
