<template>
  <div class="transition duration-500 ease-in-out">
    <Header @SideNav="showSideNav = !showSideNav" />

    <div class="flex">
      <!-- side nav -->
      <transition name="side">
        <SideNavbar v-show="showSideNav" />
      </transition>
      <!-- side nav -->
      <div class="flex w-full transition duration-500 ease-in-out">
        <div class="w-full transition duration-500 ease-in-out">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSideNav = ref(true); // Use ref to create a reactive variable for showSideNav
</script>

<style>
.side-enter-active,
.side-leave-active {
  transition: 0.5s ease all;
}
.side-enter-from,
.side-leave-to {
  width: 0px;
}
.side-enter,
.side-leave {
  width: 0px;
}
</style>
