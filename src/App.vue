<template>
  <div id="app">
    <div class="game">
      <div class="game__wrapper">
        <h1 class="title">Simon Says</h1>
        <div class="container">
          <game-board @click="clickBoard"></game-board>
          <div class="game-info">
            <p class="score">Score: {{ score }}</p>
            <button class="start-button" type="button" v-if="!isGameStart" @click="startGame">Start</button>
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
    queue: [],
    userQueue: [],
    isGameStart: false,
    iteration: 0
  }),
  methods: {
    clickBoard(userClick) {

      if (this.isGameStart) {
        console.log('iteration: ' + this.iteration)
        console.log(userClick, this.queue[this.iteration])
        if (!(+userClick === this.queue[this.iteration])) {
          this.endGame()
        } else {
          if (this.iteration === this.queue.length - 1) {
            this.nextLevel();
          } else {
            this.iteration += 1
          }
        }
      }
    },
    startGame() {
      this.iteration = 0;
      this.isGameStart = true
      this.score = 1;
      this.queue.push(__.randomNum(4))
      console.log(this.queue)
    },

    nextLevel() {
      this.iteration = 0;
      this.score++;
      this.queue.push(__.randomNum(4))
      console.log(this.queue)
    },

    endGame() {
      this.score = 0;
      this.queue = [];
      this.iteration = 0;
      this.isGameStart = false
    },

    restartGame() {
      this.endGame();
      this.startGame()
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
  padding-top: 40px;
}

.start-button {
  width: 120px;
  font-size: 22px;
  background-color: #02a7a7;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  margin-top: 30px;
}

.start-button:hover {
  background-color: rgba(2, 167, 167, 0.7);
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

@media (min-width: 880px) {
  .game__wrapper {
    width: 800px;
    padding-left: 0;
    padding-right: 0;
  }

  .game-info {
    align-self: start;
    margin-left: 120px;
  }

  .container {
    flex-direction: row;
  }
}

@media (min-width: 580px) {
  .game__wrapper {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
