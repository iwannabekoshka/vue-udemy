const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			nameSubmitted: '',
		};
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName
		},
		increase(num) {
			this.counter = this.counter + num
		},
		reduce(num) {
			this.counter = this.counter - num
		},
		submitForm() {
			this.nameSubmitted = this.name
		}
	}
});

app.mount('#events');