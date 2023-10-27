<template>
  <div
    class="flex items-center px-5 py-6 border-b-2 hover:bg-primary-100 hover:shadow bg-white"
  >
    <div class="flex flex-col items-center cursor-pointer mr-6">
      <img src="../assets/plus.svg" class="mb-1.5" alt="" />
      <span class="text-xs text-center text-gray-600"
        >Assign <br />
        Agent</span
      >
    </div>
    <div class="flex flex-col mr-16">
      <span class="text-xs pb-1.5 font-medium">{{ name }}</span>
      <span class="text-xs pb-1.5 text-gray-400"
        >12b Emmanuel Hign street, Sur...</span
      >
      <span class="text-xs pb-1.5 text-gray-400 flex">
        <img src="../assets/XMLID 1.svg" class="mr-2" alt="" />
        Sterling Bank PLC
      </span>
      <span class="text-xs pb-1.5 text-blue-800 font-medium">a day ago</span>
    </div>
    <svg
      class="cursor-pointer"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17 0.99999C0.983753 1.18735 0.879211 1.4408 0.879211 1.70499C0.879211 1.96918 0.983753 2.22263 1.17 2.40999L4.71 5.99999L1.17 9.53999C0.983753 9.72735 0.879211 9.9808 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26297 11.0437 1.37357 11.1181 1.49543 11.1689C1.61729 11.2197 1.74799 11.2458 1.88 11.2458C2.01202 11.2458 2.14272 11.2197 2.26458 11.1689C2.38644 11.1181 2.49704 11.0437 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.132 7.1258 5.99999C7.1258 5.86798 7.09966 5.73727 7.04889 5.61541C6.99813 5.49355 6.92373 5.38295 6.83 5.28999L2.59 0.99999C2.49704 0.906262 2.38644 0.831868 2.26458 0.781099C2.14272 0.73033 2.01202 0.704191 1.88 0.704191C1.74799 0.704191 1.61729 0.73033 1.49543 0.781099C1.37357 0.831868 1.26297 0.906262 1.17 0.99999Z"
        fill="#023A59"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>
