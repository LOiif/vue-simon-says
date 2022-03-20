<template>
  <div id="app">
    <div class="game">
      <div class="game__wrapper">
        <h1 class="title">Simon Game</h1>
        <div class="container">
          <game-board ref="board" :can-click="canClick" @click="clickBoard"></game-board>
          <div class="game-info">
            <p class="score" v-if="!isGameOver">Счет: {{ score }}</p>
            <p class="game-over" v-if="isGameOver">Игра окончена</p>
            <p class="total-score" v-if="isGameOver">Набрано очков: {{ resultScore }}</p>
            <button class="start-button" type="button" v-if="!isGameStart && !isGameOver" @click="startGame">
              Start
            </button>
            <button class="start-button" type="button" v-else @click="restartGame">Restart</button>
            <radio-group class="difficulty"
                         :title="'Сложность'"
                         :difficulty-options="difficultyOptions"
                         :selected-difficulty="selectedDifficulty"
                         @select="selectDifficulty">
            </radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GameBoard from "@/components/GameBoard";
import __ from "@/utils/utils";
import RadioGroup from "@/components/RadioGroup";
import {difficultyOptions} from "@/utils/constants"

export default {
  name: 'App',
  components: {RadioGroup, GameBoard},
  data: () => ({
    score: 0,
    iteration: 0,
    resultScore: 0,
    sequence: [], // {num, el}
    isGameStart: false,
    isGameOver: false,
    canClick: false,
    difficultyOptions,
    selectedDifficulty: 'easy'
  }),
  methods: {
    clickBoard(sectionNum) {
      if (this.isGameStart && this.canClick) {
        __.playSound(sectionNum);
        if (+sectionNum === this.sequence[this.iteration].num) {
          if (this.iteration === this.sequence.length - 1) {
            this.nextLevel();
          } else {
            this.iteration++;
          }
        } else {
          this.endGame();
        }
      }
    },
    selectDifficulty(value){
      this.selectedDifficulty = value;
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
      const el = Array.from(this.$refs.board.$el.children).find(item => +item.dataset.section === +randomNum);
      this.sequence.push({num: randomNum, el});
      this.animate();
    },
    endGame() {
      this.resultScore = this.score;
      this.score = 0;
      this.sequence = [];
      this.iteration = 0;
      this.isGameStart = false;
      this.canClick = false;
      this.isGameOver = true;
    },
    restartGame() {
      this.endGame();
      this.startGame();
    },
    animate() {
      let i = 0;
      const interval = (setInterval(() => {
        this.canClick = false;
        __.lightSections(this.sequence[i].el, this.difficultyOptions[this.selectedDifficulty].duration);
        __.playSound(this.sequence[i].num);
        ++i;
        if (i >= this.sequence.length) {
          clearInterval(interval);
          this.canClick = true;
        }
      }, this.difficultyOptions[this.selectedDifficulty].duration + 100))
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
  background-color: rgba(13, 183, 183, 0.8);
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
  flex-direction: column;
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

.difficulty {
  margin-top: 40px;
}

.visually-hidden{
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
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
