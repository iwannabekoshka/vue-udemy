<template>
	<div class="container">
		<h1>Active User</h1>
		<h2>Username: {{ username }}</h2>
		<h3>Age: {{ age }}</h3>
	</div>
</template>

<script>
	export default {
		name: 'active-user',
		props: ['username', 'age']
	}
</script>

<style></style>