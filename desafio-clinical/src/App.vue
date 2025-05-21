<script lang="ts" setup>
import { computed, ref } from 'vue';
import JobCard from './components/JobCard.vue';
import NavBar from './components/NavBar.vue';
import SearchField from './components/SearchField.vue';
import { data } from './data';

const searchValue = ref('');

const onSearch = (value: string) => {
  searchValue.value = value;
};

const filteredJobs = computed(() => {
  if (!searchValue.value) {
    return data;
  }

  const lowerCaseSearchValue = searchValue.value.toLowerCase();

  return data.filter((job) => {
    const jobTitle = job.jobTitleText.toLowerCase();
    const companyName = job.companyName.toLowerCase();
    const locationName = job.locationName.toLowerCase();

    return (
      jobTitle.includes(lowerCaseSearchValue) ||
      companyName.includes(lowerCaseSearchValue) ||
      locationName.includes(lowerCaseSearchValue)
    );
  });
});

</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <SearchField :on-search="onSearch" />
    <div class="job-list">
      <JobCard v-for="(job, index) in filteredJobs" :key="index" :job="job" />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>