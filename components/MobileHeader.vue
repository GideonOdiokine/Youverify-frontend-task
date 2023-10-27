<template>
  <div class="flex w-screen min-h-screen flex-col p-5 bg-white md:hidden">
    <div id="middle" class="w-full justify-between items-center flex mb-5">
      <div id="search" class="w-full px-3 bg-gray-100 h-14 flex items-center">
        <select
          class="w-16 bg-transparent text-sm outline-none text-gray-400 border-gray-400 cursor-pointer"
          name=""
          id=""
        >
          <option value="">All</option>
        </select>
        <div class="h-8 w-1 border-r-2 mx-2 border-gray-300" />
        <input
          type="search"
          class="w-11/12 bg-transparent text-sm outline-none"
          placeholder="Search for anything here"
        />
        <svg
          class="cursor-pointer"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.67627 1.66669C5.25268 1.66669 1.66666 5.17351 1.66666 9.4994C1.66666 13.8253 5.25268 17.3321 9.67627 17.3321C11.5682 17.3321 13.307 16.6906 14.6775 15.6179L17.2809 18.1572L17.3501 18.2155C17.5918 18.3905 17.9345 18.3706 18.1532 18.1561C18.3938 17.9202 18.3933 17.5383 18.1521 17.303L15.5793 14.7936C16.8874 13.3995 17.6859 11.5406 17.6859 9.4994C17.6859 5.17351 14.0999 1.66669 9.67627 1.66669ZM9.67627 2.87313C13.4185 2.87313 16.4522 5.83982 16.4522 9.4994C16.4522 13.159 13.4185 16.1257 9.67627 16.1257C5.93404 16.1257 2.90035 13.159 2.90035 9.4994C2.90035 5.83982 5.93404 2.87313 9.67627 2.87313Z"
            fill="#999999"
          />
        </svg>
      </div>
    </div>

    <!-- notification icon -->
    <div class="flex items-center mb-5">
      <div
        id="notificaton"
        class="flex justify-center items-center w-12 h-12 relative rounded-xl bg-primary-100 cursor-pointer hover:shadow-md"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0638 12.3696C20.3016 11.4794 19.9552 10.7081 19.9552 9.39756V8.95196C19.9552 7.24421 19.5621 6.1439 18.7076 5.04358C17.3905 3.33478 15.1733 2.30487 13.0027 2.30487H12.9104C10.7854 2.30487 8.63762 3.28748 7.29772 4.92693C6.39651 6.04931 5.95782 7.19692 5.95782 8.95196V9.39756C5.95782 10.7081 5.63426 11.4794 4.84919 12.3696C4.27154 13.0253 4.08694 13.8682 4.08694 14.7804C4.08694 15.6936 4.38666 16.5586 4.98816 17.2616C5.77322 18.1045 6.88186 18.6425 8.01434 18.7361C9.65395 18.9231 11.2936 18.9935 12.957 18.9935C14.6195 18.9935 16.2591 18.8758 17.8997 18.7361C19.0312 18.6425 20.1398 18.1045 20.9249 17.2616C21.5253 16.5586 21.8261 15.6936 21.8261 14.7804C21.8261 13.8682 21.6415 13.0253 21.0638 12.3696Z"
            fill="#0F808C"
          />
          <path
            opacity="0.4"
            d="M15.0525 20.2823C14.5309 20.1709 11.3523 20.1709 10.8306 20.2823C10.3847 20.3853 9.90244 20.6249 9.90244 21.1503C9.92836 21.6516 10.2219 22.0941 10.6284 22.3747L10.6273 22.3757C11.1531 22.7856 11.7702 23.0462 12.4163 23.1397C12.7606 23.187 13.1111 23.1849 13.4679 23.1397C14.113 23.0462 14.73 22.7856 15.2558 22.3757L15.2548 22.3747C15.6613 22.0941 15.9548 21.6516 15.9807 21.1503C15.9807 20.6249 15.4985 20.3853 15.0525 20.2823Z"
            fill="#0F808C"
          />
        </svg>
        <span
          class="absolute top-2 right-2 w-4 h-4 flex justify-center items-center rounded-full bg-red-700 text-xs text-white"
        >
          2
        </span>
      </div>
      <span class="ml-5 text-sm text-primary-300">notifications</span>
    </div>

    <div id="profile" class="flex items-center cursor-pointer">
      <div id="img" class="">
        <img src="../assets/photo.png" class="rounded-full" alt="" />
      </div>
      <div class="text-sm ml-7 mr-5 text-primary-300">Solomon</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
