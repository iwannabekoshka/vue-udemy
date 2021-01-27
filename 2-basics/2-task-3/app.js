const app = Vue.createApp({
	data() {
		return {
			result: 0,
		}
	},
	watch: {
		result() {
			const that = this
			setTimeout(function () {
				that.result = 0
			}, 5000)
		}
	},
	computed: {
		resultText() {
			if (this.result < 37) return 'Not there yet'
			if (this.result > 37) return 'Too much!'
			return this.result
		}
	},
	methods: {
		increase(num) {
			this.result += num
		}
	}
})

app.mount('#assignment')