<template>
  <header
    class="w-full flex justify-between items-center bg-white px-3 lg:px-8 py-4 shadow fixed top-0 z-50"
  >
    <!-- left part of the header start -->
    <div id="left" class="flex items-center">
      <img
        src="../assets/Frame.png"
        alt=""
        class="w-36 cursor-pointer mr-4 lg:mr-14 transform hover:translate-x-1 transition 200 ease-in"
      />
      <div
        class="w-8 h-8 mr-2 bg-white shadow hover:shadow-md rounded-full justify-center items-center cursor-pointer flex"
        @click="handleSideNav"
      >
        <svg
          class="transition 200 ease-in"
          :class="{ 'rotate-180': rotate }"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.820821 5.75246C0.755337 5.91096 0.755338 6.08896 0.820822 6.24746C0.852438 6.32605 0.899152 6.39767 0.958322 6.45829L5.54166 11.0416C5.66322 11.1632 5.82809 11.2315 6 11.2315C6.17191 11.2315 6.33677 11.1632 6.45833 11.0416C6.57989 10.9201 6.64818 10.7552 6.64818 10.5833C6.64818 10.4114 6.57989 10.2465 6.45833 10.125L2.97958 6.64621L10.5833 6.65079C10.6689 6.65114 10.7537 6.63455 10.8328 6.60196C10.9119 6.56938 10.9838 6.52145 11.0443 6.46095C11.1048 6.40044 11.1528 6.32856 11.1853 6.24943C11.2179 6.17031 11.2345 6.08552 11.2342 5.99996C11.2345 5.91439 11.2179 5.8296 11.1853 5.75048C11.1528 5.67136 11.1048 5.59947 11.0443 5.53897C10.9838 5.47846 10.9119 5.43053 10.8328 5.39795C10.7537 5.36537 10.6689 5.34877 10.5833 5.34912L2.97957 5.35371L6.45833 1.87495C6.57989 1.75339 6.64818 1.58852 6.64818 1.41662C6.64818 1.24471 6.57989 1.07984 6.45833 0.958282C6.33677 0.836725 6.17191 0.768433 6 0.768433C5.82809 0.768433 5.66322 0.836725 5.54166 0.958282L0.958322 5.54162C0.899152 5.60224 0.852438 5.67387 0.820821 5.75246Z"
            fill="#0F808C"
          />
        </svg>
      </div>
    </div>
    <!-- left part of the header end -->

    <!-- middle part of the header start -->
    <div
      id="middle"
      class="w-1/4 md:w-2/5 xl:w-3/5 justify-between items-center hidden md:flex"
    >
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
    <!-- middle part of the header end -->

    <!-- right part of the header start -->
    <div class="items-center hidden md:flex">
      <!-- notification icon -->
      <div
        id="notificaton"
        class="flex justify-center items-center w-12 h-12 relative rounded-xl bg-primary-100 cursor-pointer hover:shadow-md"
      >
        <div class="">
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
      </div>
      <div id="profile" class="flex items-center ml-6 cursor-pointer">
        <div id="img" class="">
          <img src="../assets/photo.png" class="rounded-full" alt="" />
        </div>
        <div class="text-sm ml-7 mr-5 text-primary-300">Solomon</div>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z"
            fill="#023A59"
          />
        </svg>
      </div>
    </div>
    <!-- right part of the header end -->

    <!-- Mobile header start -->
    <transition name="height">
      <div v-if="showMenu" class="fixed top-16 right-0 h-full">
        <MobileHeader />
      </div>
    </transition>
    <!-- Mobile header end -->

    <!-- menu start -->
    <svg
      @click="showMenu = !showMenu"
      class="md:hidden h-6 w-6 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#46B2C8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <!-- menu end -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      rotate: false,
    };
  },
  methods: {
    handleSideNav() {
      this.$emit("SideNav");
      this.rotate = !this.rotate;
    },
  },
};
</script>

<style>
.height-enter-active,
.height-leave-active {
  transition: 0.3s ease all;
}
.height-enter-from,
.height-leave-to {
  opacity: 0;
}
.height-enter,
.height-leave {
  opacity: 0;
}
</style>
