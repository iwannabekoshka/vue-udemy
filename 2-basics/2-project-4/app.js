const app = Vue.createApp({
	data() {
		return {
			boxAActive: false,
			boxBActive: false,
			boxCActive: false,
		}
	},
	computed: {
		boxAClasses() {
			return { active:this.boxAActive }
		},
		boxBClasses() {
			return ['demo', { active:this.boxBActive }]
		}
	},
	methods: {
		activateBox(boxName) {
			switch (boxName) {
				case 'A':
					this.boxAActive = !this.boxAActive
					return
				case 'B':
					this.boxBActive = !this.boxBActive
					return
				case 'C':
					this.boxCActive = !this.boxCActive
					return
			}
		}
	}
})

app.mount('#styling')