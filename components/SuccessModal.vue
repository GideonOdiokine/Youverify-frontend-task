<template>
  <modal @close="closeModal()">
    <template v-slot:header>
      <div class="flex justify-center mb-6">
        <img src="../assets/tick.svg" alt="plus" />
      </div>
    </template>
    <template v-slot:body>
      <div class="text-center">
        <h3 class="text-[#101828] text-[32px] font-semibold">Saved!</h3>
        <p class="text-base text-[#626975] font-medium">
          A new form has been added to your list. To see forms, click on the
          button below.
        </p>
      </div>
    </template>
    <template v-slot:footer>
      <button
        @click="submitForm()"
        class="py-3 rounded-[6px] mx-auto mt-6 flex justify-center items-center text-white text-base font-semibold px-6 bg-[#4D6CBB]"
      >
        close
      </button>
    </template>
  </modal>
</template>

<script>
export default {
  props: {
    close: Function,
  },
  data() {
    return {
      enableBtn: false,
    };
  },
  methods: {
    closeModal() {
      if (typeof this.close === "function") {
        this.close();
      }
    },
    submitForm() {
      //   console.log(this.title, this.description);
      //   this.$emit("close");
      //   navigateTo(`/`);
    },
  },
};
</script>
