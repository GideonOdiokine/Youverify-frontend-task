<template>
  <div class="pt-20 min-h-screen overflow-hidden">
    <div class="lg:w-full lg:h-12 bg-white" />

    <div class="lg:hidden w-full text-sm text-center bg-white grid grid-cols-2">
      <span
        @click="show = 'tasks'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'tasks' }"
        >Task</span
      >
      <!-- <span
        @click="show = 'map'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'map' }"
        >Map</span
      > -->
      <span
        @click="show = 'agents'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'agents' }"
        >Agents</span
      >
    </div>

    <div class="lg:hidden w-full">
      <transition name="fade">
        <div v-if="show === 'tasks'">
          <Tasks />
        </div>
      </transition>
      <!-- <div v-if="show === 'map'" class="h-full">
        <Map />
      </div> -->
      <transition name="fade">
        <div v-if="show === 'agents'">
          <Agents />
        </div>
      </transition>
    </div>

    <div
      class="hidden w-full lg:flex lg:justify-between justify-between bg-map"
      style="height: calc(100vh - 129px)"
    >
      <!-- tasks area start -->
      <div class="flex">
        <transition name="tab">
          <Tasks v-show="showTask" />
        </transition>
        <div
          @click="showTask = !showTask"
          class="w-12 h-12 bg-black flex justify-center items-center cursor-pointer"
        >
          <svg
            class="transition 200 ease-in"
            :class="{ 'rotate-180': showTask === false }"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.96474 10.9228C7.14583 10.7305 7.24343 10.4743 7.23625 10.2102C7.22906 9.94609 7.11767 9.69558 6.92639 9.51335L3.29005 6.02097L6.73245 2.38599C6.91354 2.19363 7.01115 1.93743 7.00396 1.67334C6.99677 1.40925 6.88538 1.15874 6.6941 0.976511C6.59862 0.885346 6.48604 0.813987 6.36284 0.766552C6.23965 0.719117 6.10828 0.696544 5.97632 0.700134C5.84435 0.703725 5.71441 0.733409 5.59397 0.787473C5.47354 0.841537 5.365 0.918913 5.27462 1.01514L1.15152 5.36889C1.06036 5.46437 0.988998 5.57696 0.941563 5.70015C0.894127 5.82335 0.871554 5.95471 0.875145 6.08668C0.878735 6.21864 0.908419 6.34859 0.962484 6.46902C1.01655 6.58945 1.09392 6.69799 1.19015 6.78837L5.54526 10.9615C5.64074 11.0526 5.75333 11.124 5.87652 11.1714C5.99972 11.2188 6.13109 11.2414 6.26305 11.2378C6.39501 11.2342 6.52496 11.2046 6.64539 11.1505C6.76582 11.0964 6.87436 11.0191 6.96474 10.9228Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <!-- tasks area end -->

      <!-- map area start -->
      <!-- <Map /> -->
      <!-- map area end -->

      <!-- agents area start -->
      <div class="flex">
        <div
          @click="showAgent = !showAgent"
          class="w-12 h-12 bg-black flex justify-center items-center cursor-pointer"
        >
          <svg
            class="transition 200 ease-in"
            :class="{ 'rotate-180': showAgent === false }"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.17 0.99999C0.983753 1.18735 0.879211 1.4408 0.879211 1.70499C0.879211 1.96918 0.983753 2.22263 1.17 2.40999L4.71 5.99999L1.17 9.53999C0.983753 9.72735 0.879211 9.9808 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26297 11.0437 1.37357 11.1181 1.49543 11.1689C1.61729 11.2197 1.74799 11.2458 1.88 11.2458C2.01202 11.2458 2.14272 11.2197 2.26458 11.1689C2.38644 11.1181 2.49704 11.0437 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.132 7.1258 5.99999C7.1258 5.86798 7.09966 5.73727 7.04889 5.61541C6.99813 5.49355 6.92373 5.38295 6.83 5.28999L2.59 0.99999C2.49704 0.906262 2.38644 0.831868 2.26458 0.781099C2.14272 0.73033 2.01202 0.704191 1.88 0.704191C1.74799 0.704191 1.61729 0.73033 1.49543 0.781099C1.37357 0.831868 1.26297 0.906262 1.17 0.99999Z"
              fill="white"
            />
          </svg>
        </div>
        <transition name="tab">
          <Agents v-show="showAgent" />
        </transition>
      </div>
      <!-- agents area end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "tasks",
      showTask: true,
      showAgent: true,
    };
  },
};
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
