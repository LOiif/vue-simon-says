<template>
  <div class="container">
    <div class="board">

      <div class="board__item board__item_red" @click="clickItem" :data-section="1">
      </div>
      <div class="board__item board__item_blue" @click="clickItem" :data-section="2"></div>
      <div class="board__item board__item_green" @click="clickItem" :data-section="3"></div>
      <div class="board__item board__item_yellow" @click="clickItem" :data-section="4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoard",
  methods: {
    clickItem(evt) {
      const sectionNum = evt.target.dataset.section;

      this.$emit('click', sectionNum)
    }
  }
}
</script>

<style scoped>
.container {

}

.board {
  position: relative;
  border-radius: 50%;
  background-color: antiquewhite;
  width: 250px;
  height: 250px;

  margin: 0 auto;

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
  opacity: 0.5;
}

.board__item:hover {
  transform: scale(1.01);
  border: 3px solid black;
}

.board__item:active {
  opacity: 0.7;
}

.board__item_red {
  background: red;
  clip: rect(0px, 250px, 125px, 125px);
}

.board__item_blue {
  background: blue;
  clip: rect(125px, 250px, 250px, 125px)

}

.board__item_green {
  background: green;
  clip: rect(125px, 125px, 250px, 0px);
}

.board__item_yellow {
  background: #ffd900;
  clip: rect(0px, 125px, 125px, 0px);
}


@media (min-width: 340px) {
  .board {
    width: 300px;
    height: 300px;
  }

  .board__item_red {
    clip: rect(0px, 300px, 150px, 150px);
  }

  .board__item_blue {
    clip: rect(150px, 300px, 300px, 150px)
  }

  .board__item_green {
    clip: rect(150px, 150px, 300px, 0px);
  }

  .board__item_yellow {
    clip: rect(0px, 150px, 150px, 0px);
  }
}

@media (min-width: 540px) {
  .board {
    width: 450px;
    height: 450px;
  }

  .board__item_red {
    clip: rect(0px, 450px, 225px, 225px);
  }

  .board__item_blue {
    clip: rect(225px, 450px, 450px, 225px)
  }

  .board__item_green {
    clip: rect(225px, 225px, 450px, 0px);
  }

  .board__item_yellow {
    clip: rect(0px, 225px, 225px, 0px);
  }
}

</style>