<template>
	<main>
		<active-user
				:username="username"
				:age="age"
		/>
		<user-data @add-user="addUser"/>
	</main>
</template>

<script>
	import ActiveUser from "./components/ActiveUser";
	import UserData from "./components/UserData";
	export default {
		components: {UserData, ActiveUser},
		data() {
			return {
				username: '12',
				age: '34'
			}
		},
		methods: {
			addUser(username, age) {
				this.username = username;
				this.age = age
			}
		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: monospace;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100vh;
	}
	.container {
		height: 150px;
		min-width: 300px;

		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, .5);

		padding: 1rem;
		margin-right: 2rem;
	}
	.container > h1 {
		text-align: center;
	}

	.container input {
		margin-bottom: .2rem;
		display: block;
	}
</style>