<template>
  <div class="w-full">
    <table class="border-collapse w-[100%]">
      <thead class="bg-[#F9FAFB]">
        <tr class="w-full flex flex-1">
          <th class="py-[17px] flex flex-1 !mx-9">
            <div class="text-[#101828] text-base font-medium">Name</div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1">
            <div class="text-[#101828] text-base font-medium">Modified By</div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1">
            <div class="text-[#101828] text-base font-medium">Date created</div>
            <img
              src="../assets/tableIcon.svg"
              alt=""
              class="w-[11px] cursor-pointer ml-[8px] transform hover:translate-x-1 transition 200 ease-in"
            />
          </th>
          <th class="py-[17px] flex flex-1">
            <div class="text-[#101828] text-base font-medium">
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
      <!-- <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="border px-4 py-2">{{ item.name }}</td>
          <td class="border px-4 py-2">{{ item.createdAt }}</td>
          <td class="border px-4 py-2 flex items-center">
            {{ item.lastModified }}
            <i class="fas fa-pencil-alt"></i>
          </td>
          <td class="border px-4 py-2">{{ item.createdAt }}</td>
        </tr>
      </tbody> -->
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
        // Add more items as needed
      ],
    };
  },
};
</script>
