<template>
  <Suspense
    @resolve="console.log('wrapper suspense: resolved')"
    @pending="console.log('wrapper suspense: pending')"
    @fallback="console.log('wrapper suspense: fallback')"
  >
    <AppWrapperContent />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
