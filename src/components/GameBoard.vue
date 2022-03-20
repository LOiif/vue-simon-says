<template>
  <div class="board">
    <div
        class="board__item board__item_red"
        :class="{'can-click': canClick}"
        @click="clickItem"
        :data-section="1">
    </div>
    <div
        class="board__item board__item_blue"
        :class="{'can-click': canClick}"
        @click="clickItem"
        :data-section="2">
    </div>
    <div
        class="board__item board__item_green"
        :class="{'can-click': canClick}"
        @click="clickItem"
        :data-section="3">
    </div>
    <div
        class="board__item board__item_yellow"
        :class="{'can-click': canClick}"
        @click="clickItem"
        :data-section="4">
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoard",
  methods: {
    clickItem(evt) {
      const sectionNum = evt.target.dataset.section;
      if (this.canClick) {
        this.$emit('click', sectionNum);
      }
    }
  },
  props: {
    canClick: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.board {
  position: relative;
  border-radius: 50%;
  background-color: antiquewhite;
  width: 82vw;
  height: 82vw;
}

.board::before, .board::after {
  content: '';
  position: absolute;
  background-color: #2c3e50;
  z-index: 2;
}

.board::before {
  width: 1px;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -0.5px;
}

.board::after {
  height: 1px;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -0.5px;
}

.board__item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  transition: all ease 0.17s;
}

.board__item:hover {
  transform: scale(1.0107);
  border: 3px solid rgba(18, 15, 15, 0.6);
}

.board__item.can-click:active {
  transition: none;
}

.board__item_red {
  background: rgba(255, 0, 0, 0.3);
  clip-path: inset(0 0 50% 50%);
}

.board__item.can-click:active {
  background: rgba(255, 0, 0, 0.9);
}

.board__item_red.active {
  background: rgba(255, 0, 0, 0.9);
}

.board__item_blue {
  background: rgba(0, 0, 255, 0.3);
  clip-path: inset(50% 0 0 50%);
}

.board__item_blue.can-click:active {
  background: rgba(0, 0, 255, 0.9);
}

.board__item_blue.active {
  background: rgba(0, 0, 255, 0.9);
}

.board__item_green {
  background: rgba(1, 255, 1, 0.3);
  clip-path: inset(0 50% 50% 0);
}

.board__item_green.can-click:active {
  background: rgba(4, 188, 4, 0.9);
}

.board__item_green.active {
  background: rgba(4, 188, 4, 0.9);
}

.board__item_yellow {
  background: rgba(255, 225, 0, 0.25);
  clip-path: inset(50% 50% 0 0);
}

.board__item_yellow.can-click:active {
  background: rgb(255, 225, 1);
}

.board__item_yellow.active {
  background: rgb(255, 225, 0.9);
}

@media (min-width: 540px) {
  .board {
    width: 450px;
    height: 450px;
  }
}
</style>