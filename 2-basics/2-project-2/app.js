const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			firstName: 'dadadad',
		};
	},
	methods: {
		setName(event, lastName) {
			this.firstName = event.target.value + ' ' + lastName
		},
		increase(num) {
			this.counter = this.counter + num
		},
		reduce(num) {
			this.counter = this.counter - num
		}
	}
});

app.mount('#events');