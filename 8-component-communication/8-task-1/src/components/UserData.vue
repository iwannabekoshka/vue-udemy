<template>
	<div class="container">
		<h1>User Data</h1>
		<form @submit.prevent="addUser">
			<input type="text" placeholder="username" v-model="username">
			<input type="number" placeholder="age" v-model="age">
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'user-data',
		emits: ['add-user'],
		data() {
			return {
				username: '',
				age: ''
			}
		},
		methods: {
			addUser() {
				this.$emit('add-user', this.username, this.age)
				this.username = ''
				this.age = ''
			}
		}
	}
</script>

<style></style>