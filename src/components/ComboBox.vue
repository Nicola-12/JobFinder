<script lang="ts" setup>
import type { Option } from '@/models/Option';
import { ref } from 'vue';

interface ComboBoxProps {
    options: Option[];
    placeholder?: string;
    selectedValue?: Option;
}

const { options, selectedValue } = defineProps<ComboBoxProps>();

const selectedOption = ref<Option | string | undefined>(selectedValue ?? '');

</script>

<template>
    <select class="combo-box" v-model="selectedOption" v-on:change="$emit('update:selectedValue', selectedOption)">
        <option disabled value="">{{ placeholder ?? 'Select an option' }}</option>
        <option v-for="(option, index) in options" :key="index" :value="option ?? ''">
            {{ option.label }}
        </option>
    </select>
</template>

<style scoped>
.combo-box {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    font-size: 1rem;
    cursor: pointer;
}

.combo-box:hover {
    border-color: var(--primary-color);
}

.combo-box:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.combo-box option {
    padding: 0.5rem;
    background-color: #fff;
    color: var(--hint-color);
}

.combo-box option:hover {
    background-color: var(--hint-color);
}
</style>