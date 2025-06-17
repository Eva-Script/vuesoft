<template>
  <div class="task-input">
    <input
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      type="text"
      placeholder="Add a new task..."
      class="task-input__field"
    />
    <button @click="addTask" class="task-input__button">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const newTaskTitle = ref('');

const addTask = () => {
  const title = newTaskTitle.value.trim();
  if (title) {
    store.dispatch('createTask', title);
    newTaskTitle.value = '';
  }
};
</script>

<style scoped lang="scss">
.task-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  &__field {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #42b883;
    }
  }

  &__button {
    padding: 8px 16px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #3aa876;
    }
  }
}
</style> 