<template>
	<form @submit.prevent="addFriend">
		<div>
			<label>Name: </label>
			<input type="text" v-model="name">
		</div>
		<div>
			<label>Phone: </label>
			<input type="tel" v-model="phone">
		</div>
		<div>
			<label>E-mail: </label>
			<input type="email" v-model="email">
		</div>
		<button type="submit">Add Friend</button>
	</form>
</template>

<script>
	export default {
		name: 'add-friend',
		data () {
			return {
				name: '',
				phone: '',
				email: ''
			}
		},
		methods: {
			addFriend() {
				this.$emit('add-friend', this.name, this.phone, this.email)
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	div {
		margin-bottom: .2rem;
		min-width: 50%;
	}
	label {
		display: inline-block;
		min-width: 30%;
		text-align: right;
		margin-right: .2rem;
	}
	input {
		min-width: 60%;
	}

</style>