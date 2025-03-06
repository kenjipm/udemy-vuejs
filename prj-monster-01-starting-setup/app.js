function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const MAX_PLAYER_HEALTH = 100;
const MAX_PLAYER_MANA = 100;
const MAX_MONSTER_HEALTH = 100;
const SPECIAL_ATTACK_MANA_COST = 100;
const HEAL_MANA_COST = 50;

Vue.createApp({
    data() {
        return {
            playerHealth: MAX_PLAYER_HEALTH,
            playerMana: MAX_PLAYER_MANA,
            monsterHealth: MAX_MONSTER_HEALTH,
            currentRound: 1,
            isLoadingRound: false,
            winner: null,
            battleLogs: [],
        }
    },
    computed: {
        playerHealthStyle() {
            return { width: this.playerHealth + '%' }
        },
        playerManaStyle() {
            return { width: this.playerMana + '%' }
        },
        monsterHealthStyle() {
            return { width: this.monsterHealth + '%' }
        },
        attackEnabled() {
            return !this.isLoadingRound;
        },
        healEnabled() {
            return !this.isLoadingRound &&
                this.playerMana >= HEAL_MANA_COST;
        },
        specialAttackEnabled() {
            return !this.isLoadingRound &&
                this.playerMana >= SPECIAL_ATTACK_MANA_COST;
        },
        surrenderEnabled() {
            return !this.isLoadingRound;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0) {
                this.playerHealth = 0;
                if (this.monsterHealth > 0) {
                    this.winner = "monster";
                } else {
                    this.winner = "draw";
                }
            }
        },
        monsterHealth(value) {
            if (value <= 0) {
                this.monsterHealth = 0;
                if (this.playerHealth > 0) {
                    this.winner = "player";
                } else {
                    this.winner = "draw";
                }
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = MAX_PLAYER_HEALTH;
            this.playerMana = MAX_PLAYER_MANA;
            this.monsterHealth = MAX_MONSTER_HEALTH;
            this.currentRound = 1;
            this.isLoadingRound = false;
            this.winner = null;
            this.battleLogs = [];
        },
        attackMonster() {
            const attackValue = getRandomNumber(5, 12);
            this.monsterHealth -= attackValue;
            this.addBattleLog("player", "attack", attackValue);
            this.attackPlayer();
            this.incrementRound();
        },
        attackPlayer() {
            const attackValue = getRandomNumber(12, 18);
            this.playerHealth -= attackValue;
            this.addBattleLog("monster", "attack", attackValue);
        },
        specialAttackMonster() {
            const attackValue = getRandomNumber(10, 25);
            this.monsterHealth -= attackValue;
            this.addBattleLog("player", "special-attack", attackValue);
            this.playerMana -= SPECIAL_ATTACK_MANA_COST;
            this.attackPlayer();
            this.incrementRound();
        },
        healPlayer() {
            const healValue = getRandomNumber(18, 24);
            this.playerHealth += healValue;
            this.addBattleLog("player", "heal", healValue);
            this.playerMana -= HEAL_MANA_COST;
            if (this.playerHealth > MAX_PLAYER_HEALTH) {
                this.playerHealth = MAX_PLAYER_HEALTH;
            }
            this.attackPlayer();
            this.incrementRound();
        },
        surrender() {
            this.winner = "monster";
            this.incrementRound();
        },
        incrementRound() {
            this.isLoadingRound = true;
            setTimeout(() => {
                if (!this.winner) {
                    this.currentRound++;
                    this.playerMana += 30;
                    if (this.playerMana > MAX_PLAYER_MANA) {
                        this.playerMana = MAX_PLAYER_MANA;
                    }
                    this.isLoadingRound = false;
                }
            }, 100);
        },
        addBattleLog(who, what, value) {
            this.battleLogs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
}).mount("#game");