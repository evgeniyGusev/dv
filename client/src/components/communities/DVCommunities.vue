<template>
  <div>
    <ul v-if="!isLoading">
      <li v-for="community in communities" :key="community._id">
        {{ community.name }}
      </li>
    </ul>

    <div v-else>Загрузка</div>
  </div>
</template>

<script setup lang="ts">
const { communities = [], isLoading = false } = defineProps<{
  communities: any[],
  isLoading: boolean
}>()
</script>

<style scoped lang="scss">
</style>
