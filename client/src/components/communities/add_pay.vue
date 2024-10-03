<template>
  <div class="modal-button-wrapper">
    <n-button @click="showModal = true">
      Внести платёж
    </n-button>
  </div>

  <n-modal
    v-model:show="showModal"
    preset="dialog"
    positive-text="Внести"
    negative-text="Отмена"
    :on-negative-click="onNegativeClick"
    :on-positive-click="onPositiveClick"
  >
    <template #header>
      Внесение платежа
    </template>

    <div class="form-wrapper">
      <n-cascader
        v-model:value="paymentTarget"
        multiple
        placeholder="За кого"
        clearable
        max-tag-count="responsive"
        expand-trigger="click"
        :options="paymentOptions"
        cascade
        check-strategy="child"
        show-path
        filterable
        :clear-filter-after-select="false"
        @update:value="handleUpdateValue"
      />

      <div class="modal-cost-wrapper">
        <div v-for="(value, key) in paymentInputs" :key class="input">
          <span>{{ value.lastName }} {{ value.firstName }}</span>
          <n-input v-model:value="value.sum" type="text" placeholder="Сумма" />
        </div>
      </div>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const { communities = [] } = defineProps<{
  communities: any[],
}>();

const showModal = ref(false);

const paymentTarget = ref([]);
const paymentInputs = ref({});

const paymentOptions = computed(() => {
  return communities.map(({ _id, name, children }) => ({
    value: _id,
    label: name,
    children: children.map(({ _id: chId, firstName: chFName, lastName: chLName }) => ({
      value: chId,
      label: `${chLName} ${chFName}`,
    }))
  }));
});

const children = computed(() => {
  return communities.map(({ children }) => children).flat();
});

function handleUpdateValue() {
  const targets = children.value.filter(({ _id }) => paymentTarget.value.includes(_id));

  paymentInputs.value = targets.reduce((acc, { _id, firstName, lastName, costPerMonth }) => {
    acc[_id] = { firstName, lastName, sum: costPerMonth };
    return acc
  }, {});
}

function onPositiveClick(e) {
  console.log(e);

  console.log(paymentInputs.value);
}

function onNegativeClick() {
  showModal.value = false;
  paymentInputs.value = {};
  paymentTarget.value = [];
}
</script>

<style scoped lang="scss">
.modal-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  margin-bottom: 18px;
}

.modal-cost-wrapper {
  margin-top: 16px;

  .input:not(:last-child) {
    margin-bottom: 12px;
  }
}

.form-wrapper {
  margin-block: 24px;
}
</style>
