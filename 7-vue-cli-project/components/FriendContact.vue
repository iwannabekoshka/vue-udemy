<template>
	<li>
		<h2>{{friendName}} {{friendFavourite ? '(Fav)' : ''}}</h2>
		<button @click="toggleFavourite">{{friendFavourite ? 'Unfav' : 'Fav'}}</button>
		<button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong> {{friendPhone}}</li>
			<li><strong>E-mail:</strong> {{friendEmail}}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		name: 'friend-contact',
		props: {
			friendId: {
				type: Number,
				required: true
			},
			friendName: {
				type: String,
				required: true
			},
			friendPhone: {
				type: String,
				required: true
			},
			friendEmail: {
				type: String,
				required: true
			},
			friendFavourite: {
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
				this.$emit('toggle-favourite', this.friendId)
			}
		}
	}
</script>

<style>

</style>