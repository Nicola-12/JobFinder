<script lang="ts" setup>

import type { Job } from '@/models/Job';
import { defineProps } from 'vue';

interface JobCardProps {
    job: Job
}

const { job } = defineProps<JobCardProps>();

function formatCurrency(amount: number, currency: Job['payCurrency']): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(amount)
}
</script>

<template>
    <div class="job-card">
        <img :src="job.companyLogoUrl" alt="Company Logo" class="company-logo" />

        <div class="job-info">
            <h2 class="job-title">{{ job.jobTitleText }}</h2>
            <p class="company-name">{{ job.companyName }}</p>
            <p class="location">{{ job.locationName }}</p>

            <div class="wage-rating">
                <p class="wage">
                    {{ formatCurrency(job.annualWage, job.payCurrency) }}
                    <span v-if="job.payPeriod === 'HOURLY'">/hr</span>
                    <span v-else>/yr</span>
                </p>

                <div class="rating">
                    <span v-for="n in 5" :key="n" class="star">
                        {{ n <= job.rating ? '★' : '☆' }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.job-card {
    display: flex;
    align-items: flex-start;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 16px;
    gap: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.company-logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
}

.job-info {
    flex: 1;
}

.job-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
}

.company-name,
.location {
    color: #555;
    margin: 4px 0;
}

.wage-rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}

.wage {
    font-weight: bold;
    color: #333;
}

.rating .star {
    color: #f5b50a;
    font-size: 16px;
}
</style>