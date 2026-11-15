<script setup lang="ts">
const { t, n } = useI18n()

useSeoMeta({
  title: () => t('catalog.title'),
  description: () => t('catalog.subtitle'),
})
</script>

<template>
  <div class="space-y-8">
    <!-- Hero / Welcome Banner -->
    <div class="rounded-2xl border border-default bg-elevated/50 p-8 text-center space-y-4">
      <UBadge color="primary" variant="subtle" size="lg">{{ t('catalog.starterReady') }}</UBadge>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-highlighted">
        {{ t('catalog.title') }}
      </h1>
      <p class="text-muted max-w-2xl mx-auto">
        {{ t('catalog.subtitle') }}
      </p>
    </div>

    <!-- Starter Catalog Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="i in 3" :key="i" class="flex flex-col justify-between">
        <template #header>
          <div class="flex items-center justify-between">
            <UBadge color="neutral" variant="subtle">{{ t('catalog.sampleCategory') }}</UBadge>
            <span class="text-xs text-muted">{{ t('catalog.inStock') }}</span>
          </div>
        </template>

        <div class="space-y-2 py-4">
          <h3 class="font-bold text-lg text-highlighted">{{ t('catalog.sampleTitle', { number: i }) }}</h3>
          <p class="text-sm text-muted">{{ t('catalog.sampleDescription') }}</p>
        </div>

        <template #footer>
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-highlighted">{{ n(2900 / 100, { style: 'currency', currency: 'USD' }) }}</span>
            <UButton icon="i-lucide-plus" size="sm" color="primary">
              {{ t('catalog.addToCart') }}
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
