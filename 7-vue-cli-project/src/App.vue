<template>
	<header>
		<h1>My colleagues</h1>
	</header>
	<add-friend @add-friend="addFriend"/>
	<ul>
		<friend-contact
			v-for="friend in friends"
			:key = friend.id
			:friend-id="friend.id"
			:friend-name="friend.name"
			:friend-phone="friend.phone"
			:friend-email="friend.email"
			:friend-favourite="friend.favourite"
			@toggle-favourite="toggleFavourite"
		/>
	</ul>
</template>

<script>
	import FriendContact from "../components/FriendContact";
	import AddFriend from "../components/AddFriend";
	export default {
		components: {AddFriend, FriendContact},
		data () {
			return {
				friends: [
					{
						id: 1,
						name: 'Sasha Anchous',
						phone: '359-1337-1900',
						email: 'nagibatorzemli3000@kek.com',
						favourite: 1,
					},
					{
						id: 2,
						name: 'Nastya Unicorn',
						phone: '100-149-247',
						email: 'cornflowerblue@purrple.com',
						favourite: true,
					},
					{
						id: 3,
						name: 'Iluha Master',
						phone: 'nonofurbusiness',
						email: 'yatvoyubdshatal@lk.com',
						// favourite:
					}
				]
			}
		},
		methods: {
			toggleFavourite(friendId) {
				const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
				identifiedFriend.favourite = !identifiedFriend.favourite
			},
			addFriend(name, phone, email) {
				const newFriend = {
					id: Date.now(),
					name: name,
					phone: phone,
					email: email,
					favourite: false
				}
				this.friends.push(newFriend)
			}
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: monospace;
		font-size: 16px;
	}

	body {
		margin: 0;
	}

	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: cornflowerblue;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#app li,
	#app form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#app h2 {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #58004d;
		margin: 0 0 1rem 0;
	}

	#app button {
		font: inherit;
		cursor: pointer;
		border: 1px solid cornflowerblue;
		background-color: cornflowerblue;
		color: white;
		padding: 0.2rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	}

	#app button:hover,
	#app button:active {
		background-color: #729dec;
		border-color: #729dec;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}
	#app button:focus {
		outline: none;
	}
</style>