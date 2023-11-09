<template>
  <div class="hidden md:flex w-full">
    <table class="border-collapse w-[100%]">
      <thead class="bg-[#F9FAFB] border-b-[#B2B8BD] border-b">
        <tr class="w-full flex flex-1">
          <th class="py-[17px] flex flex-1 items-center !mx-9">
            <div class="text-[#101828] text-xs md:text-base font-medium">
              Name
            </div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1 items-center">
            <div class="text-[#101828] text-xs md:text-base font-medium">
              Modified By
            </div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1 items-center">
            <div class="text-[#101828] text-xs md:text-base font-medium">
              Date created
            </div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1 items-center">
            <div class="text-[#101828] text-xs md:text-base font-medium">
              Last Modified
            </div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
        </tr>
      </thead>
      <!-- <> -->
      <div class="overflow-auto h-[calc(100%+80px)]">
        <tbody
          class="w-full flex pt-[32px]"
          v-for="(item, index) in items"
          :key="index"
        >
          <tr class="flex-1 !mx-9 font-medium text-sm text-[#101828]">
            <td>{{ item.name }}</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>{{ item.createdAt }}</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>{{ item.lastModified }}</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>{{ item.createdAt }}</td>
          </tr>
          <!-- <td class="px-4 py-2">{{ item.createdAt }}</td> -->
        </tbody>
      </div>
      <!-- </> -->
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Item 1",
          createdAt: "2023-01-01",
          createdBy: "User A",
          lastModified: "2023-01-10",
        },
        {
          name: "Item 2",
          createdAt: "2023-02-05",
          createdBy: "User B",
          lastModified: "2023-03-20",
        },
      ],
    };
  },
};
</script>
