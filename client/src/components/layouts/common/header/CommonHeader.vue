<template>
  <header class="header">
    <div class="main-container">
      <logo class="icon" />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/assets/icons/logo_black.svg?component';
</script>

<style scoped lang="scss">
.header {
  //margin-bottom: 2rem;
  padding: 1rem 0;
  background-color: #fff;
  z-index: 1;

  .main-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
