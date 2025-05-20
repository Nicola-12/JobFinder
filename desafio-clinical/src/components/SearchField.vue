<script setup lang="ts">
import { ref } from 'vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

interface SearchFieldProps {
    defaultValue?: string;
    onSearch?: (value: string) => void;
}

const { defaultValue, onSearch } = defineProps<SearchFieldProps>();

const searchValue = ref(defaultValue || '');

</script>
<template>
    <div class="search-field">
        <div class="leading">
            <MagnifyIcon class="search-icon" />
        </div>
        <input v-model="searchValue" type="text" placeholder="Search for jobs..." />
        <button v-on:click="() => onSearch?.(searchValue)" class="search-button">Search</button>
    </div>
</template>

<style scoped>
.search-field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    & .leading {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;

        & .search-icon {
            width: 1.5rem;
            height: 1.5rem;
            color: #333;
        }
    }

    & input {
        width: 100%;
        padding: 0.5rem 0.5rem 0.5rem 2rem;
        border: none;
        outline: none;
    }

    & .search-button {
        padding: 0.5rem 1rem;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--secondary-color);
        }
    }
}
</style>