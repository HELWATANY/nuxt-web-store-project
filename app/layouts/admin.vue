<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-default text-default">
    <!-- Admin Sidebar Navigation -->
    <aside class="w-full md:w-64 border-b md:border-b-0 md:border-r border-default bg-elevated p-6 flex flex-col justify-between">
      <div class="space-y-6">
        <div class="flex items-center gap-2 font-bold text-lg text-highlighted">
          <UIcon name="i-lucide-shield-check" class="w-6 h-6 text-primary" />
          <span>{{ t('admin.title') }}</span>
        </div>

        <nav class="space-y-2 text-sm font-medium">
          <NuxtLink
            to="/admin"
            class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/10 transition-colors"
          >
            <UIcon name="i-lucide-layout-dashboard" class="w-5 h-5 text-muted" />
            <span>{{ t('nav.overview') }}</span>
          </NuxtLink>
          <NuxtLink
            to="/admin/products"
            class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/10 transition-colors"
          >
            <UIcon name="i-lucide-package" class="w-5 h-5 text-muted" />
            <span>{{ t('admin.products.title') }}</span>
          </NuxtLink>
          <NuxtLink
            to="/admin/orders"
            class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/10 transition-colors"
          >
            <UIcon name="i-lucide-shopping-cart" class="w-5 h-5 text-muted" />
            <span>{{ t('nav.orders') }}</span>
          </NuxtLink>
        </nav>
      </div>

      <div class="pt-6 border-t border-default">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-sm text-muted hover:text-default transition-colors"
        >
          <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
          <span>{{ t('nav.backToStorefront') }}</span>
        </NuxtLink>
      </div>
    </aside>

    <!-- Admin Content Area -->
    <main class="flex-1 p-6 md:p-8 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
