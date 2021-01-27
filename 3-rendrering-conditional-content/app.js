const app = Vue.createApp({
	data() {
		return {
			goals: [],
			newGoal: ''
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.newGoal)
		}
	}
});

app.mount('#user-goals');
