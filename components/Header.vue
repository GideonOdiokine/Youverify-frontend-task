<template>
  <header
    class="w-full flex justify-between items-center bg-white px-3 lg:px-8 py-4 shadow fixed top-0 z-50"
  >
    <!-- left part of the header start -->
    <div id="left" class="flex items-center">
      <img
        src="../assets/Frame.png"
        alt=""
        class="w-36 cursor-pointer mr-4 lg:mr-14 transform hover:translate-x-1 transition-200 ease-in"
      />
      <div
        class="w-8 h-8 mr-2 bg-white shadow hover:shadow-md rounded-full justify-center items-center cursor-pointer flex"
        @click="handleSideNav"
      >
        <svg
          class="transition-200 ease-in"
          :class="{ 'rotate-180': rotate }"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_690)">
            <path
              d="M5.82082 10.7525C5.75534 10.911 5.75534 11.089 5.82082 11.2475C5.85244 11.326 5.89915 11.3977 5.95832 11.4583L10.5417 16.0416C10.6632 16.1632 10.8281 16.2315 11 16.2315C11.1719 16.2315 11.3368 16.1632 11.4583 16.0416C11.5799 15.9201 11.6482 15.7552 11.6482 15.5833C11.6482 15.4114 11.5799 15.2465 11.4583 15.125L7.97958 11.6462L15.5833 11.6508C15.6689 11.6511 15.7537 11.6345 15.8328 11.602C15.9119 11.5694 15.9838 11.5215 16.0443 11.4609C16.1048 11.4004 16.1528 11.3286 16.1853 11.2494C16.2179 11.1703 16.2345 11.0855 16.2342 11C16.2345 10.9144 16.2179 10.8296 16.1853 10.7505C16.1528 10.6714 16.1048 10.5995 16.0443 10.539C15.9838 10.4785 15.9119 10.4305 15.8328 10.3979C15.7537 10.3654 15.6689 10.3488 15.5833 10.3491L7.97957 10.3537L11.4583 6.87495C11.5799 6.75339 11.6482 6.58852 11.6482 6.41662C11.6482 6.24471 11.5799 6.07984 11.4583 5.95828C11.3368 5.83672 11.1719 5.76843 11 5.76843C10.8281 5.76843 10.6632 5.83672 10.5417 5.95828L5.95832 10.5416C5.89915 10.6022 5.85244 10.6739 5.82082 10.7525Z"
              fill="#0F808C"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_690">
              <rect
                width="15.5564"
                height="15.5564"
                fill="white"
                transform="translate(11 22) rotate(-135)"
              />
            </clipPath>
          </defs>
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
        <div class="h-8 w-1 border-r-2 mx-2 border-gray-300"></div>
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
          <!-- Your SVG path -->
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z"
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
import { ref } from "vue";

export default {
  setup() {
    const showMenu = ref(false);
    const rotate = ref(false);

    const handleSideNav = () => {
      // Add your logic for SideNav here
      rotate.value = !rotate.value;
    };

    return {
      showMenu,
      rotate,
      handleSideNav,
    };
  },
};
</script>
