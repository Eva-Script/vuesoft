<template>
  <div class="task-filters">
    <button
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('update:modelValue', filter.value)"
      :class="['task-filters__button', { active: modelValue === filter.value }]"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { TaskFilter } from '../types/task';

const props = defineProps<{
  modelValue: TaskFilter;
}>();

defineEmits<{
  (e: 'update:modelValue', value: TaskFilter): void;
}>();

const filters = [
  { label: 'All', value: 'all' as TaskFilter },
  { label: 'Active', value: 'active' as TaskFilter },
  { label: 'Completed', value: 'completed' as TaskFilter }
];
</script>

<style scoped lang="scss">
.task-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  &__button {
    padding: 6px 12px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background-color: #e9e9e9;
    }

    &.active {
      background-color: #42b883;
      color: white;
      border-color: #42b883;
    }
  }
}
</style> 