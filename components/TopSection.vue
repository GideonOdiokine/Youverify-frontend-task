<template>
  <div class="border-b-[#ECEDEF] border-b mb-6">
    <div class="text-[#667085] text-base pb-6 px-[32px] py-[36px]">
      Form Templates /
      <span class="font-medium">{{ $route.params.id }}</span>
    </div>
    <div class="md:flex justify-between items-center px-[32px]">
      <h3 class="text-[#101828] md:text-[32px] font-medium pb-6">Templates</h3>
      <button
        @click="submitForm"
        class="py-3 px-3 rounded-[6px] mb-[5px] flex w-full md:w-auto text-white text-base font-semibold md:px-6 bg-[#4D6CBB]"
      >
        Save
        <svg
          v-if="loading"
          class="w-5 h-5 text-white animate-spin ml-3"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // Emit submitForm
    async submitForm() {
      this.$emit("submitForm");
    },
  },
};
</script>
