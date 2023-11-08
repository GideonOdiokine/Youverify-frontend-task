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
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <div class="flex justify-between mb-6">
          <h3 class="text-2xl font-medium text-[#101828]">
            Create New Template
          </h3>
          <img
            src="../assets/close.svg"
            alt="plus"
            class="mt-[-20px] cursor-pointer"
            @click="showModal = false"
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
              type="text"
              placeholder="Input name"
              class="border border-[#EAECF0] w-full py-3 px-4 rounded-[5px] outline-none"
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
              placeholder="Type message here.."
              class="border border-[#EAECF0] w-full py-3 px-4 rounded-[5px] outline-none"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button
          class="py-3 rounded-[6px] mx-auto mt-6 flex justify-center items-center text-white text-base font-semibold px-6 bg-[#4D6CBB]"
        >
          <!-- <img src="../assets/add.svg" alt="plus" class="pr-2" /> -->

          Create
        </button>
      </template>
    </modal>
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
  },
};
</script>

<style></style>
