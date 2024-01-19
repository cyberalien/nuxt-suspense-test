<script setup lang="ts">
function loadData(): Promise<{
  content: string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        content: "Content",
      });
    }, 2000);
  });
}

// Data
console.log("Content: loading data");
const data = await loadData();
console.log("Content: got data");
</script>
<template>
  <div v-if="data">App content: {{ data.content }}</div>
</template>
