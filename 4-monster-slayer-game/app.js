function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
	data() {
		return {
			playerHealthMAX: 100,
			monsterHealthMAX: 100,
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			specialAttackCD: 0,
			winner: null
		}
	},
	watch: {
		playerHealth(value) {
			if (value < 0) this.playerHealth = 0;

			if (value > 0 && this.monsterHealth <= 0) {
				this.winner = 'player'
			} else if (value < 0 && this.monsterHealth <= 0) {
				this.winner = 'draw'
			}
		},
		monsterHealth(value) {
			if (value < 0) this.monsterHealth = 0;

			if (value > 0 && this.playerHealth <= 0) {
				this.winner = 'monster'
			} else if (value < 0 && this.monsterHealth <= 0) {
				this.winner = 'draw'
			}
		}
	},
	computed: {
		playerHealthBarWidth() {
			return {width: (this.playerHealth / this.playerHealthMAX) * 100 + '%'};
		},
		monsterHealthBarWidth() {
			return {width: (this.monsterHealth / this.monsterHealthMAX) * 100 + '%'};
		},
		cantUseSpecialAttack() {
			return this.specialAttackCD !== 0;
		},
		cantHeal() {
			return this.playerHealthMAX === this.playerHealth;
		}
	},
	methods: {
		playerAttack() {
			this.currentRound++;
			if (this.specialAttackCD !== 0) this.specialAttackCD--;

			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.monsterAttack();
		},
		playerSpecialAttack() {
			this.currentRound++;
			this.specialAttackCD = 2;

			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.monsterAttack();
		},
		playerHeal() {
			this.currentRound++;
			if (this.specialAttackCD !== 0) this.specialAttackCD--;

			const healValue = getRandomValue(10, 25);
			if (this.playerHealth + healValue > this.playerHealthMAX) {
				this.playerHealth = this.playerHealthMAX;
			} else {
				this.playerHealth += healValue;
			}

			this.monsterAttack();
		},
		monsterAttack() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
		},
		restart() {
			this.playerHealth = this.playerHealthMAX;
			this.monsterHealth = this.monsterHealthMAX;
			this.currentRound = 0;
			this.specialAttackCD = 0;
			this.winner = null;
		},
		surrender() {
			this.winner = 'monster';
		}
	},
})
app.mount('#game');