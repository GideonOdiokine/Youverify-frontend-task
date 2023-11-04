<template>
  <div class="w-14 lg:w-64 min-h-screen overflow-hidden">
    <div class="lg:h-20 mb-2"></div>
    <div class="hidden lg:block py-4 px-8 h-5 text-title text"></div>
    <nav class="pt-20 lg:pt-9 min-h-full flex flex-col text-black">
      <NuxtLink
        to="/"
        class="pl-3 py-3 mb-[32px] flex items-center hover:bg-[#F5F8FD]"
      >
        <img src="../assets/dashbaord.svg" class="mr-2" alt="" />
        <span class="hidden lg:block text-[#CECECE] text-lg font-medium"
          >Dashboard</span
        >
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 flex items-center bg-[#F5F8FD] hover:text-primary-200 border-l-4 border-[#4D6CBB]"
      >
        <img src="../assets/agents.svg" class="mr-2" alt="" />
        <span class="hidden lg:block text-[#4D6CBB] text-lg font-normal"
          >Form Templates</span
        >
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
