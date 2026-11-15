<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

const { t, n } = useI18n()

useSeoMeta({
  title: () => t('admin.title'),
})
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-highlighted">{{ t('admin.title') }}</h1>
      <p class="text-sm text-muted">{{ t('admin.description') }}</p>
    </div>

    <!-- Metric Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <UCard>
        <div class="space-y-1">
          <p class="text-xs font-medium text-muted">{{ t('admin.metrics.revenue') }}</p>
          <p class="text-2xl font-bold text-highlighted">{{ n(0, { style: 'currency', currency: 'USD' }) }}</p>
        </div>
      </UCard>
      <UCard>
        <div class="space-y-1">
          <p class="text-xs font-medium text-muted">{{ t('admin.metrics.orders') }}</p>
          <p class="text-2xl font-bold text-highlighted">{{ n(0) }}</p>
        </div>
      </UCard>
      <UCard>
        <div class="space-y-1">
          <p class="text-xs font-medium text-muted">{{ t('admin.metrics.products') }}</p>
          <p class="text-2xl font-bold text-highlighted">{{ n(0) }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>
