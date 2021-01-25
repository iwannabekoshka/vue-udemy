const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: ''
		};
	},
	computed: {
		fullname() {
			if (!this.name) return
			return this.name + ' Koshkin'
		}
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = ''
		},
	}
});

app.mount('#events');
