<script setup lang="ts">
console.log("Rendering AppContent");
</script>
<template>
  <Suspense
    @resolve="console.log('content suspense: resolved')"
    @pending="console.log('content suspense: pending')"
    @fallback="console.log('content suspense: fallback')"
  >
    <AppContentLoader />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
