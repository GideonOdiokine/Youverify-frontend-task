<template>
  <modal @close="closeModal()">
    <template v-slot:header>
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-medium text-[#101828]">Create New Template</h3>
        <img
          src="../assets/close.svg"
          alt="plus"
          class="mt-[-20px] cursor-pointer"
          @click="closeModal()"
        />
      </div>
    </template>
    <template v-slot:body>
      <div>
        <div class="w-full">
          <label
            class="block text-sm border-none p-0 pb-2 font-medium mr-0 text-[#101828]"
            for="name"
            >Template Name
          </label>
          <input
            id="name"
            title="name"
            @input="validateInput"
            v-model="title"
            type="text"
            placeholder="Input name"
            class="border border-[#EAECF0] bg-white w-full py-3 px-4 rounded-[5px] outline-none"
            aria-placeholder=""
          />
        </div>
        <div class="w-full mt-6">
          <label
            class="block text-sm border-none p-0 pb-2 font-medium mr-0 text-[#101828]"
            for="Description"
            >Description
          </label>
          <textarea
            id="Description"
            title="Description"
            v-model="description"
            @input="validateInput"
            placeholder="Type message here.."
            class="border border-[#EAECF0] w-full py-3 px-4 rounded-[5px] outline-none"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button
        @click="submitForm()"
        :disabled="!enableBtn"
        class="py-3 rounded-[6px] mx-auto mt-6 flex justify-center items-center text-white text-base font-semibold px-6 bg-[#4D6CBB]"
        :class="{ 'bg-[#ECEDEF]': !enableBtn }"
      >
        Create
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
      title: "",
      description: "",
      enableBtn: false,
    };
  },
  methods: {
    closeModal() {
      if (typeof this.close === "function") {
        this.close();
      }
    },
    validateInput() {
      if (this.title !== "" && this.description !== "") {
        this.enableBtn = true;
      } else {
        this.enableBtn = false;
      }
    },
    submitForm() {
      console.log(this.title, this.description);
      navigateTo(`/details/${this.title}`);
    },
  },
};
</script>
