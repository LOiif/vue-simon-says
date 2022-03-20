<template>
  <div class="options">
    <h2 class="options__title">{{ title }}</h2>
    <ul class="options__list">
      <li class="options__item" v-for="(option, key) in difficultyOptions">
        <label class="options__label">
          <input type="radio"
                 class="visually-hidden"
                 name="difficulty"
                 :key="option.value + key"
                 :value="option.value"
                 v-model="difficulty"
                 @change="$emit('select', $event.target.value)">
          <span class="options__radio-indicator"></span>
          {{ option.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DifficultyOption",
  data() {
    return {
      difficulty: this.selectedDifficulty
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    difficultyOptions: {
      type: Object,
      require: true
    },
    selectedDifficulty: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
}

.options__list {
  list-style: none;
  padding-top: 20px;
  padding-left: 20px;
}

.options__item {
  display: flex;
  align-items: center;
}

.options__item:not(:first-of-type) {
  margin-top: 10px;
}

.options__label {
  position: relative;
  cursor: pointer;
  padding-left: 22px;
}

.options__label:hover {
  opacity: 0.8;
}

.options__label:active {
  opacity: 0.5;
}

.options__radio-indicator {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  top: 50%;
  left: 0;
  margin-top: -7px;
  border: 1px solid #2c3e50;;
  border-radius: 50%;
}

.options__radio-indicator::after {
  content: '';
  position: absolute;
  display: none;
  width: 6px;
  height: 6px;
  top: 50%;
  left: 50%;
  margin-left: -3px;
  margin-top: -3px;
  border-radius: 50%;
  background-color: teal;
}

.options__label input:checked ~ .options__radio-indicator {
  border: 1px solid teal;
}

.options__label:focus .options__radio-indicator{
  border: 1px solid black;
}

.options__label input:checked ~ .options__radio-indicator::after {
  display: block;
}
</style>