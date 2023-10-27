<template>
  <div class="w-14 lg:w-64 min-h-screen overflow-hidden">
    <div class="lg:h-20 mb-2"></div>
    <div class="hidden lg:block py-4 px-8 h-28 text-title text">
      <div class="w-40 text-base font-bold">Cheta And Daughters Limited</div>
      <div class="font-normal">RC123456789</div>
    </div>
    <nav class="pt-20 lg:pt-9 min-h-full flex flex-col text-black">
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 bg-primary-200 flex items-center border-l-4 border-[#115766] hover:bg-primary-200"
      >
        <img src="../assets/dashbaord.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-white text-lg font-medium"
          >Dashboard</span
        >
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 flex items-center hover:text-primary-200 border-l-4 border-transparent"
      >
        <img src="../assets/agents.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-lg font-normal">Agents</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 flex items-center hover:text-primary-200 border-l-4 border-transparent"
      >
        <img src="../assets/Document.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-lg font-normal">Task</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 flex items-center hover:text-primary-200 border-l-4 border-transparent"
      >
        <img src="../assets/Shield Done.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-lg font-normal">Teams</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 flex items-center hover:text-primary-200 border-l-4 border-transparent"
      >
        <img src="../assets/users.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-lg font-normal">Users</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        class="pl-3 py-3 lg:pl-9 flex items-center hover:text-primary-200 border-l-4 border-transparent"
      >
        <img src="../assets/Setting.svg" class="mr-5" alt="" />
        <span class="hidden lg:block text-lg font-normal">Settings</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
