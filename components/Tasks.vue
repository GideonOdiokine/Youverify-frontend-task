<template>
  <div class="w-full lg:w-96 bg-white border-l !border-gray-200">
    <!-- tasks -->

    <div
      class="w-100 h-12 bg-primary-200 py-2 px-3.5 flex items-center text-white font-semibold"
    >
      Task
    </div>

    <div class="grid grid-cols-3 bg-white text-sm border-b border-gray-200">
      <div
        class="text-subTitle pl-3 lg:px-4 py-5 cursor-pointer font-normal"
        :class="{
          'border-b-2 border-black !text-primary-500 font-medium ':
            show === 'unassigned',
        }"
        @click="show = 'unassigned'"
      >
        24 Unassigned
      </div>
      <div
        class="text-subTitle pl-3 lg:px-4 py-5 cursor-pointer font-normal"
        :class="{
          'border-b-2 border-black !text-primary-500 font-medium':
            show === 'assigned',
        }"
        @click="show = 'assigned'"
      >
        12 assigned
      </div>
      <div
        class="text-subTitle pl-1 lg:px-4 py-5 cursor-pointer font-normal"
        :class="{
          'border-b-2 border-black !text-primary-500 font-medium':
            show === 'completed',
        }"
        @click="show = 'completed'"
      >
        30 Completed
      </div>
    </div>
    <div class="overflow-auto" style="height: calc(100vh - 239px)">
      <transition name="task">
        <div v-if="show === 'unassigned'">
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
        </div>
      </transition>

      <transition name="task">
        <div v-if="show === 'assigned'">
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
        </div>
      </transition>

      <transition name="task">
        <div v-if="show === 'completed'">
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Tafawa Balewa Okon" />
          <Task name="Abiodun Olawale Solomon" />
          <Task name="Mercy Timothy Bakare" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "unassigned",
    };
  },
};
</script>

<style>
.task-enter-active,
.task-leave-active {
  transition: 0.3s ease all;
}
.task-enter-from,
.task-leave-to {
  opacity: 0;
}
.task-enter,
.task-leave {
  opacity: 0;
}
</style>
