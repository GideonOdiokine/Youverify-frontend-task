<template>
  <div class="mt-[80px] py-6 px-6">
    <div class="bg-white rounded-lg">
      <div class="pl-9 pb-9 pt-[53px] pr-12">
        <h3 class="text-[32px] font-medium text-[#101828] pb-[27px]">
          Form Templates
        </h3>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
