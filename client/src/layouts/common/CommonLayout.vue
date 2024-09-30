<template>
  <CommonHeader />

  <main class="main-container">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/layouts/common/header/CommonHeader.vue';
</script>
