<script setup lang="ts">
import { loadSomeAsyncContent } from "./loader";

console.log("loadSomeAsyncContent: start");
await loadSomeAsyncContent();
console.log("loadSomeAsyncContent: end");
</script>

<template>
  <AppContent />
</template>
