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
			},

		],
		selectedProfile: {
			name: 'Contact 03',
			image: 'img/avatar_3.jpg',
			lastAcess: '12:56',
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

		},

		searchBoxFilter: function(){
			this.filteredProfiles = this.contactsProfile.filter(function(contact){
				return contact.name.includes('0');
			});
			this.contactsProfile = [...filteredProfiles]
			console.log(myApp.contactsProfile);
		},
	},
})



function lastAcessTime(){
	var today = new Date();
	var computerTime = today.getHours() + ":" + today.getMinutes()

	let hours = Math.floor(Math.random()*11);
	let minutes = Math.floor(Math.random()*59);

	if (hours == today.getHours()){
		if (minutes > today.getMinutes()){
			myApp.selectedProfile.lastAcess = 'Ultimo accesso a ' + minutes - today.getMinutes();
		} else{
			myApp.selectedProfile.lastAcess = 'Ultimo accesso a ' + today.getMinutes() + 60 - minutes;
		}
	} else {
		if (hours<10){
			hours = '0'+ hours;
		}
		if (minutes<10){
			minutes = '0'+ minutes;
		}
	}

	let timeLastAcess = hours + ':' + minutes
	return timeLastAcess;
}
