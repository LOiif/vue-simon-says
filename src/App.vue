<template>
  <div id="app">
    <div class="game">
      <div class="game__wrapper">
        <h1 class="title">Simon Says</h1>
        <div class="container">
          <game-board ref="board" :can-click="canClick" @click="clickBoard"></game-board>
          <div class="game-info">
            <p class="score" v-if="!isGameOver">Счет: {{ score }}</p>
            <p class="game-over" v-if="isGameOver">Игра окончена</p>
            <p class="total-score" v-if="isGameOver">Набрано очков: {{ resultScore }}</p>
            <button class="start-button" type="button" v-if="!isGameStart && !isGameOver" @click="startGame">Start
            </button>
            <button class="start-button" type="button" v-else @click="restartGame">Restart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GameBoard from "@/components/GameBoard";
import __ from "@/utils/utils";

export default {
  name: 'App',
  components: {GameBoard},
  data: () => ({
    score: 0,
    iteration: 0,
    resultScore: 0,
    queue: [],
    elems: [],
    isGameStart: false,
    isGameOver: false,
    canClick: false,
  }),
  methods: {
    clickBoard(clickSection) {
      if (this.isGameStart && this.canClick) {

      this.playSound(clickSection)

        if (+clickSection === this.queue[this.iteration]) {
          if (this.iteration === this.queue.length - 1) {
            this.nextLevel();
          } else {
            this.iteration++;
          }
        } else {
          this.endGame();
        }
      }
    },
    startGame() {
      this.isGameStart = true;
      this.isGameOver = false;
      this.nextLevel();
      this.score = 0;
    },
    nextLevel() {
      this.canClick = false;
      this.iteration = 0;
      this.score++;
      const randomNum = __.randomNum(4);
      this.queue.push(randomNum);
      const sections = Array.from(this.$refs.board.$el.children);
      this.elems.push(sections.find(item => +item.dataset.section === +randomNum));
      sections.forEach(el => {
        console.log(Number(el.dataset.section), Number(randomNum));
      })
      this.animate();
    },
    endGame() {
      this.resultScore = this.score;
      this.score = 0;
      this.queue = [];
      this.iteration = 0;
      this.isGameStart = false;
      this.canClick = false;
      this.elems = [];
      this.isGameOver = true;
    },
    restartGame() {
      this.endGame();
      this.startGame();
    },
    light(el) {
      console.log(el);
      setTimeout(() => {
        el.classList.add('active');
      }, 1)
      setTimeout(() => {
        el.classList.remove('active');
      }, 400)
    },

    playSound(name) {
      let path = require(`@/assets/sounds/${name}.wav`)
      const audio = new Audio(path);
      audio.play()
    },
    animate() {
      let i = 0;

      const interval = (setInterval(() => {
        this.canClick = false;
        this.light(this.elems[i]);
        this.playSound(this.queue[i]);
        ++i;
        if (i >= this.queue.length) {
          clearInterval(interval);
          this.canClick = true;
        }
      }, 600))
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.title {
  text-align: center;
}

.game__wrapper {
  display: flex;
  flex-direction: column;
  padding: 60px 20px 0 20px;
  margin: 0 auto;
}

.game-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.start-button {
  width: 120px;
  font-size: 22px;
  background-color: #0db7b7;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  margin-top: 30px;
  align-self: center;
  margin-bottom: 30px;
}

.start-button:hover {
  background-color: rgba(13, 183, 183, 0.7);
}

.start-button:active {
  opacity: 0.5;
}

.score {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}

.container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 40px;
}

.game-over {
  font-size: 28px;
  text-align: center;
}

.total-score {
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
}

@media (min-width: 580px) {
  .game__wrapper {
    padding-left: 40px;
    padding-right: 40px;
  }

  .game-info {
    padding-top: 20px;
  }
}

@media (min-width: 780px) {
  .game__wrapper {
    width: 700px;
    padding: 60px 0 0 0;
  }

  .game-info {
    align-self: start;
    padding-top: 20px;
  }

  .container {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 120px;
  }

  .start-button {
    margin-bottom: 0;
  }
}
</style>
