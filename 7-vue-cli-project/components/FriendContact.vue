<template>
	<li>
		<h2>{{name}} {{favourite ? '(Fav)' : ''}}</h2>
		<button @click="toggleFavourite">{{favourite ? 'Unfav' : 'Fav'}}</button>
		<button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
		<button @click="deleteFriend" class="delete">Delete</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{phone}}</li>
			<li><strong>E-mail:</strong> {{email}}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		name: 'friend-contact',
		emits: ['toggle-favourite', 'delete'],
		props: {
			id: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			phone: {
				type: String,
				required: true
			},
			email: {
				type: String,
				required: true
			},
			favourite: {
				type: Boolean,
				required: false,
				default: true
			}
		},
		data() {
			return {
				detailsAreVisible: false,
			}
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible
			},
			toggleFavourite() {
				this.$emit('toggle-favourite', this.id)
			},
			deleteFriend() {
				this.$emit('delete', this.id)
			}
		}
	}
</script>

<style scoped>
	#app .delete {
		background-color: salmon;
		border-color: salmon;
	}
	#app .delete:hover,
	#app .delete:active {
		background-color: #fc8a7d;
	}
</style>