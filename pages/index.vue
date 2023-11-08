<template>
  <div class="mt-[80px] py-6 px-6">
    <div class="bg-white rounded-lg">
      <div class="pl-9 pb-9 pt-[53px] pr-12">
        <h3 class="text-[32px] font-medium text-[#101828] pb-[27px]">
          Form Templates
        </h3>
        <div class="flex justify-between">
          <!-- Search Icon -->
          <div
            id="middle"
            class="w-2/4 justify-between items-center hidden md:flex"
          >
            <div
              id="search"
              class="w-full rounded-[4px] border-[#CDCFD0] border px-3 bg-white h-14 flex items-center"
            >
              <img
                src="../assets/searchIcon.svg"
                alt=""
                class="w-[24px] cursor-pointer mr-[12px] transform hover:translate-x-1 transition 200 ease-in"
              />
              <input
                type="search"
                class="w-11/12 bg-transparent text-sm outline-none"
                placeholder="Search templates..."
              />
            </div>
          </div>

          <!--  Create new templates-->
          <button
            @click="toggleShowModal"
            class="py-3 rounded-[6px] flex items-center text-white text-base font-semibold px-3 bg-[#4D6CBB]"
          >
            <img src="../assets/add.svg" alt="plus" class="pr-2" />

            Create new templates
          </button>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <CreateFormModal :close="closeCreateFormModal" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal;
    },
    closeCreateFormModal() {
      this.showModal = false;
    },
  },
};
</script>

<style></style>
