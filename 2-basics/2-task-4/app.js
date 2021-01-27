const app = Vue.createApp({
	data() {
		return {
			user: '123',
			visible: true,
			bgc: '#8ddba4'
		}
	},
	computed: {
		paragraphClasses() {
			return [this.user, {visible:this.visible}, {hidden:!this.visible}]
		}
	},
	methods: {
		toggleParagraph() {
			this.visible = !this.visible
		}
	}
})

app.mount('#assignment')