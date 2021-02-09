const app = Vue.createApp({
	data() {
		return {
			friends: [
				{

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

app.component('friend-card', {
	template: `
	<li>
		<h2>{{friend.name}}</h2>
		<button @click="toggleDetails(friend.id)">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{friend.phone}}</li>
			<li><strong>Email:</strong> {{friend.email}}</li>
		</ul>
	</li>
	`,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: '1',
				name: 'Anchishkin Alexandr',
				phone: '1337-228-359',
				email: 'ebatorzemli3000@huya.com',
			}
		}
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible
		}
	}
})

app.mount('#app')