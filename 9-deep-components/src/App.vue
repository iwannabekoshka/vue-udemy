<template>
	<div>
		<TheHeader />

		<base-card>
			<BadgeList />
		</base-card>

		<base-card>
			<UserInfo
				:full-name="activeUser.name"
				:info-text="activeUser.description"
				:role="activeUser.role"
			/>
		</base-card>
	</div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import UserInfo from "./components/UserInfo";
import BadgeList from "./components/BadgeList";
import BaseCard from "./components/BaseCard";

export default {
	components: {BaseCard, BadgeList, UserInfo, TheHeader},
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
		--primary-color: cornflowerblue;
		--secondary-color: orangered;
	}

	body {
		margin: 0;
	}
</style>