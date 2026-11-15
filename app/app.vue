<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('app.title'),
  description: () => t('app.description'),
  ogImage: '/social-preview.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
