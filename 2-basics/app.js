const app = Vue.createApp({
	data() {
		return {
			goals: ['Become Hokage!', 'Become Cheese!'],
			link: 'https://vuejs.org/'
		}
	},
	methods: {
		getGoal() {
			const rand = Math.random()
			if (rand < 0.5) {
				return this.goals[0]
			} else {
				return this.goals[1]
			}
		}
	}
});

app.mount('#user-goal');