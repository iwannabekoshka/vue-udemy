const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: ''
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this
				setTimeout(function() {
					that.counter = 0
				}, 2000)
			}
		}
	},
	computed: {
		fullname() {
			if (!this.name) return
			return this.name + ' Koshkin'
		},
		counterText() {
			return this.counter + ' pts'
		}
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		resetInput() {
			this.name = ''
		},
	}
});

app.mount('#events');
