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
          v-for="(formTemplate, index) in formTemplates"
          :key="index"
        >
          <tr class="flex-1 !mx-9 font-medium text-sm text-[#101828]">
            <td>{{ formTemplate.id }}</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>{{ formTemplate.randomName }}</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>2023-01-10</td>
          </tr>
          <tr class="flex-1 font-medium text-sm text-[#101828]">
            <td>2023-01-01</td>
          </tr>
          <!-- <td class="px-4 py-2">2023-01-01</td> -->
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
          id: "Item 1",
          createdAt: "2023-01-01",
          randomName: "User A",
          lastModified: "2023-01-10",
        },
        {
          id: "Item 2",
          createdAt: "2023-02-05",
          randomName: "User B",
          lastModified: "2023-03-20",
        },
      ],
      formTemplates: [],
    };
  },
  mounted() {
    if (localStorage) {
      // Get the existing form templates from localStorage
      const existingFormTemplates =
        JSON.parse(localStorage.getItem("formData")) || [];

      // If there are existing form templates, use them
      if (existingFormTemplates.length > 0) {
        this.formTemplates = existingFormTemplates;
      } else {
        // If no existing form templates, use the default items
        this.formTemplates = this.items;
      }

      // Save the form templates to localStorage
      localStorage.setItem("formData", JSON.stringify(this.formTemplates));
    }
  },
};
</script>
