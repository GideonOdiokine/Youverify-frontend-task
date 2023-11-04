<template>
  <div class="pt-20 min-h-screen overflow-hidden">
    <div>Hello</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref("tasks");
const showTask = ref(true);
const showAgent = ref(true);
</script>

<style>
.tab-enter-active,
.tab-leave-active {
  transition: 0.5s ease all !important;
}

.tab-enter-from,
.tab-leave-to {
  width: 0px;
  overflow: hidden;
}

.tab-enter,
.tab-leave {
  width: 0px;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease all !important;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100vw);
  /* opacity: 0.5; */
}

.fade-enter,
.fade-leave {
  transform: translateX(-100vw);
  /* opacity: 0.5; */
}
</style>
