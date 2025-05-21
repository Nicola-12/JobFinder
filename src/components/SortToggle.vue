<script setup lang="ts">
import { SortOrder } from '@/enums';
import { ref, watch } from 'vue'

interface SortToggleProps {
    modelValue: SortOrder
}

const props = defineProps<SortToggleProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: SortOrder): void
}>()

const sortOrder = ref<SortOrder>(props.modelValue)

const toggleSort = () => {
    sortOrder.value = sortOrder.value === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC
    emit('update:modelValue', sortOrder.value)
}
</script>

<template>
    <button @click="toggleSort" class="sort-toggle">
        <span v-if="sortOrder === SortOrder.ASC">🔼 A–Z</span>
        <span v-else>🔽 Z–A</span>
    </button>
</template>

<style scoped>
.sort-toggle {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: white;
    box-sizing: border-box;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & span {
        white-space: nowrap;
    }
}

.sort-toggle:hover {
    background-color: #f0f0f0;
}
</style>
