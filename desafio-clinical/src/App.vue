<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import JobCard from './components/JobCard.vue';
import NavBar from './components/NavBar.vue';
import SearchField from './components/SearchField.vue';
import { data } from './data';
import ComboBox from './components/ComboBox.vue';
import type { Option } from './models/Option';
import { Payment } from './enums/Payment';
import { Currency, SortOrder } from './enums';
import SortToggle from './components/SortToggle.vue';

const searchValue = ref('');
const paymentOption = ref<Option>();
const currencyOption = ref<Option>();
const sortOrder = ref<SortOrder>(SortOrder.ASC);

const paymentOptions = ref<Option[]>(Object.values(Payment).map((payment) => ({
  label: payment,
  value: payment,
})));

const currenceOptions = ref<Option[]>(Object.values(Currency).map((currency) => ({
  label: currency,
  value: currency,
})));

const onSearch = (value: string) => {
  searchValue.value = value;
};

const filteredJobs = computed(() => {
  const lowerCaseSearchValue = searchValue.value.toLowerCase();

  return [...data].sort((a, b) =>
    sortOrder.value === SortOrder.ASC
      ? a.jobTitleText.localeCompare(b.jobTitleText)
      : b.jobTitleText.localeCompare(a.jobTitleText)
  ).filter((job) => {
    const jobTitle = job.jobTitleText.toLowerCase();
    const companyName = job.companyName.toLowerCase();
    const locationName = job.locationName.toLowerCase();
    const payment = job.payPeriod;
    const currency = job.payCurrency;

    return (
      (jobTitle.includes(lowerCaseSearchValue) ||
        companyName.includes(lowerCaseSearchValue) ||
        locationName.includes(lowerCaseSearchValue)) &&
      (!paymentOption.value || payment === paymentOption.value.value) &&
      (!currencyOption.value || currency === currencyOption.value.value)
    );
  });
});

watch(
  [paymentOption, currencyOption],
  () => {
    filteredJobs.value;
  },
  { immediate: true }
);
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <SearchField :on-search="onSearch" />
    <div class="combobox-filters">
      <ComboBox :placeholder="'Select a Payment'" :options="paymentOptions" v-model:selectedValue="paymentOption" />
      <ComboBox :placeholder="'Select a Currency'" :options="currenceOptions" v-model:selectedValue="currencyOption" />
      <SortToggle v-model="sortOrder" />
    </div>
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

.combobox-filters {
  display: flex;
  gap: 1rem;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>