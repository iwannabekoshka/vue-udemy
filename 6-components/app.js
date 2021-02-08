const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: '1',
					name: 'Anchishkin Alexandr',
					phone: '1337-228-359',
					email: 'ebatorzemli3000@huya.com',
					showDetails: false,
				},
				{
					id: '2',
					name: 'Artem Hookah',
					phone: '1999-20002-0001',
					email: 'artemhookah@loh.com',
					showDetails: false,
				}
			]
		}
	},
	methods: {
		toggleDetails(id) {
			this.friends[id-1].showDetails = !this.friends[id-1].showDetails
		}
	}

})

app.mount('#app')