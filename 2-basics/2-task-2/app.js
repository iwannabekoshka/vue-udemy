const app = Vue.createApp({
	data() {
		return {
			firstText: '',
			secondText: '',
		}
	},
	methods: {
		showAlert() {
			alert(`any text of your choice`)
		},
		keydownInput(event) {
			this.firstText = event.target.value
		},
		enterInput(event) {
			this.secondText = event.target.value
		}
	}
})

app.mount('#assignment')