const app = Vue.createApp({
	data() {
		return {
			listHidden: false,
			tasks: [],
			newTask: '',
		}
	},
	computed: {
		btnText() {
			return this.listHidden ? 'Show' : 'Hide'
		}
	},
	methods: {
		addTask() {
			if (this.newTask.trim() === '') return
			this.tasks.push({id: Date.now(), text: this.newTask.trim()})
			this.newTask = ''
		},
		displayList() {
			this.listHidden = !this.listHidden
		}
	}
})

app.mount('#assignment')