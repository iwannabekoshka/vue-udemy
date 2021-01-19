const app = Vue.createApp({
	data() {
		return {
			name: 'Daniel',
			age: 23,
			img: 'https://via.placeholder.com/150'
		}
	},
	methods: {
		increaseAge() {
			return this.age + 5;
		},
		getRandom() {
			return Math.random()
		}
	}
})
app.mount('#assignment')