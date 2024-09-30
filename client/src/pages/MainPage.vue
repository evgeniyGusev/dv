<template>
  <div>
    <div class="menu">
      <n-tabs type="segment" animated>
        <n-tab-pane name="учёт" tab="Учёт">
          <accounting />
        </n-tab-pane>

        <n-tab-pane name="Группы" tab="Группы">
          Группа1
          Группа2
        </n-tab-pane>

        <n-tab-pane name="календарь" tab="Календарь">
          Деняжки
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup>
import Accounting from '@/components/accounting/Accounting.vue';
</script>
