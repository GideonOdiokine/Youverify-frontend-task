<template>
  <div class="flex w-screen min-h-screen flex-col p-5 bg-white md:hidden">
    <div id="middle" class="w-full justify-between items-center flex mb-5">
      <div
        id="search"
        class="w-full rounded-[8px] px-3 bg-gray-100 h-14 flex items-center"
      >
        <img
          src="../assets/searchIcon.svg"
          alt=""
          class="w-[24px] cursor-pointer mr-[12px] transform hover:translate-x-1 transition 200 ease-in"
        />
        <input
          type="search"
          class="w-11/12 bg-transparent text-sm outline-none"
          placeholder="Search for anything here"
        />
      </div>
    </div>

    <!-- notification icon -->
    <div class="flex items-center mb-5">
      <div
        id="notificaton"
        class="flex justify-center items-center w-12 h-12 relative rounded-xl bg-primary-100 cursor-pointer hover:shadow-md"
      >
        <img src="../assets/notificationIcon.svg" class="mr-2" alt="" />

        <span
          class="absolute top-2 right-2 w-4 h-4 flex justify-center items-center rounded-full bg-red-700 text-xs text-white"
        >
          2
        </span>
      </div>
      <span class="ml-5 text-sm text-[#000034]">notifications</span>
    </div>

    <div id="profile" class="flex items-center cursor-pointer">
      <div id="img" class="">
        <img src="../assets/alex.png" class="rounded-full" alt="" />
      </div>
      <div class="text-sm ml-5 text-[#000034]">Alexander</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
