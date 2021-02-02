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
			winner: null,

			battleLog: []
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
		},
	},
	methods: {
		logMessageWhoClass(who) {
			if (who === 'Player') {
				return 'log--player'
			} else {
				return 'log--monster'
			}
		},
		logMessageActionClass(action) {
			if (action === 'attacks for' || action === 'SUPER attacks for') {
				return 'log--damage'
			} else {
				return 'log--heal'
			}
		},
		playerAttack() {
			this.currentRound++;
			if (this.specialAttackCD !== 0) this.specialAttackCD--;

			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue;
			this.addLogMessage('Player', 'attacks for', attackValue)

			this.monsterAttack();
		},
		playerSpecialAttack() {
			this.currentRound++;
			this.specialAttackCD = 2;

			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage('Player', 'SUPER attacks for', attackValue)

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
			this.addLogMessage('Player', 'heals for', healValue)

			this.monsterAttack();
		},
		monsterAttack() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;

			this.addLogMessage('Monster', 'attacks for', attackValue)
		},
		restart() {
			this.playerHealth = this.playerHealthMAX;
			this.monsterHealth = this.monsterHealthMAX;
			this.currentRound = 0;
			this.specialAttackCD = 0;
			this.winner = null;
			this.battleLog = [];
		},
		surrender() {
			this.winner = 'monster';
		},
		addLogMessage(who, action, value) {
			this.battleLog.unshift({
				id: Date.now(),
				who: who,
				action: action,
				value: value
			})
		}
	},
})
app.mount('#game');