<template>
  <div class="w-full md:w-96 bg-white">
    <!-- agent -->
    <div
      class="w-100 h-12 bg-primary-200 py-2 px-3.5 flex items-center text-white font-semibold"
    >
      Agents
    </div>

    <div class="grid grid-cols-3 text-sm border-b border-gray-200 bg-white">
      <div
        class="text-subTitle px-4 py-5 cursor-pointer"
        :class="{ 'border-b-2 border-black !text-black': show === 'all' }"
        @click="show = 'all'"
      >
        All
      </div>
      <div
        class="text-subTitle px-4 py-5 flex items-center cursor-pointer"
        :class="{ 'border-b-2 border-black !text-black': show === 'online' }"
        @click="show = 'online'"
      >
        <svg
          class="mr-2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#2EB255" />
        </svg>
        Online
      </div>
      <div
        class="text-subTitle px-4 py-5 flex items-center cursor-pointer"
        :class="{ 'border-b-2 border-black !text-black': show === 'offline' }"
        @click="show = 'offline'"
      >
        <svg
          class="mr-2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#D14349" />
        </svg>
        Offline
      </div>
    </div>
    <div class="overflow-auto" style="height: calc(100vh - 239px)">
      <transition name="agent">
        <div v-if="show === 'all'">
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
          <Agent name="Adebayo Adeoye Emmanuel" />
        </div>
      </transition>
      <transition name="agent">
        <div v-if="show === 'online'">
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
          <Agent name="Oyekachi Samuel Odaba" />
        </div>
      </transition>
      <transition name="agent">
        <div v-if="show === 'offline'">
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
          <Agent name="Peace Anthony Kubua" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "all",
    };
  },
};
</script>

<style>
.agent-enter-active,
.agent-leave-active {
  transition: 0.3s ease all;
}
.agent-enter-from,
.agent-leave-to {
  opacity: 0;
}
.agent-enter,
.agent-leave {
  opacity: 0;
}
</style>
