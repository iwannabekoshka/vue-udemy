<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
				:full-name="activeUser.name"
				:info-text="activeUser.description"
				:role="activeUser.role"
		/>
	</div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import UserInfo from "./components/UserInfo";
import BadgeList from "./components/BadgeList";
export default {
	components: {BadgeList, UserInfo, TheHeader},
	data() {
		return {
			activeUser: {
				name: 'Maximilian Schwarzmüller',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>