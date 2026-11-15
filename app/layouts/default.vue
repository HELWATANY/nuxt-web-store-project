<script setup lang="ts">
const { t, n } = useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-default text-default">
    <!-- Storefront Navigation Header -->
    <header class="border-b border-default bg-elevated/80 backdrop-blur sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-highlighted">
            <UIcon name="i-lucide-store" class="w-6 h-6 text-primary" />
            <span>{{ t('app.title') }}</span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-4 text-sm font-medium">
            <NuxtLink to="/" class="text-muted hover:text-default transition-colors">
              {{ t('nav.storefront') }}
            </NuxtLink>
            <NuxtLink to="/admin" class="text-muted hover:text-default transition-colors">
              {{ t('nav.dashboard') }}
            </NuxtLink>
          </nav>
        </div>

        <div class="flex items-center gap-3">
          <UButton
            variant="ghost"
            color="neutral"
            icon="i-lucide-shopping-bag"
            :aria-label="t('nav.cart')"
          >
            <UBadge color="primary" variant="subtle" size="sm">{{ n(0) }}</UBadge>
          </UButton>
        </div>
      </div>
    </header>

    <!-- Main Content Slot -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Storefront Footer -->
    <footer class="border-t border-default py-8 text-center text-sm text-muted">
      <div class="max-w-7xl mx-auto px-4">
        <p>{{ t('app.footer') }}</p>
      </div>
    </footer>
  </div>
</template>
