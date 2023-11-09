<template>
  <div class="mt-[80px] pt-6 px-6">
    <div
      class="bg-white rounded-lg !h-[calc(100vh-120px)] md:overflow-y-scroll lg:overflow-auto px-[32px] py-[36px]"
    >
      <!-- Left -->
      <div class="flex justify-between gap-6">
        <div
          class="bg-[#F9FBFF] px-8 py-6 w-3/4"
          @dragover.prevent
          @drop="onDrop"
        >
          <div
            class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
          >
            <label
              for="name"
              class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm py-2"
            >
              <span class="px-[10px]">Subject:</span>
              <img src="../../../assets/dot.svg" class="w-6" alt="" />
            </label>
            <input
              type="text"
              v-model="name"
              id="name"
              placeholder="Enter name"
              class="border-[#DFE1E4] rounded-lg py-4 px-[10px] border w-full outline-none"
            />
          </div>
          <div
            class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
          >
            <label
              class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm py-2"
              for="description"
            >
              <span class="px-[10px]">Description:</span>
              <img src="../../../assets/dot.svg" class="w-6" alt="" />
            </label>
            <input
              type="text"
              v-model="description"
              id="description"
              placeholder="Enter description"
              class="border-[#DFE1E4] rounded-lg py-4 px-[10px] border w-full outline-none"
            />
          </div>
          <div
            v-for="(item, index) in droppedItems"
            :key="index"
            class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
          >
            <div v-if="item.type === 'text'">
              <label
                class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm py-2"
                @blur="updateLabel($event, index)"
                v-if="item.type === 'text'"
              >
                <span class="px-[10px]">Text Input:</span>
                <img src="../../../assets/dot.svg" class="w-6" alt="" />
              </label>
              <input
                v-if="item.type === 'text'"
                type="text"
                v-model="item.value"
                id="text-input"
                placeholder="Enter text"
                class="border-[#DFE1E4] rounded-lg py-4 px-[10px] border w-full outline-none"
              />
            </div>
            <div
              v-else-if="item.type === 'checkbox'"
              class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
            >
              <!-- <label
                for="checkbox-input"
                @blur="updateLabel($event, index)"
                :contenteditable="item.type === 'checkbox'"
                >Checkbox:</label
              > -->
              <input type="checkbox" v-model="item.value" id="checkbox-input" />
            </div>
            <button @click="removeItem(index)">Delete</button>
          </div>
          <!-- <button @click="printFormData">Print Form Data</button> -->
        </div>
        <div class="w-2/4 border border-[#DFE1E4] rounded-md py-6 px-6">
          <h3 class="text-[#101828] text-base font-medium pb-6">
            Form Elements
          </h3>
          <h4 class="text-[#626975] text-sm font-medium pb-[18px]">INPUT</h4>
          <div
            class="flex items-center px-3 py-4 mb-4 border border-[#DFE1E4] rounded-md"
            @dragstart="onDragStart('text')"
            draggable="true"
          >
            <img src="../../../assets/textField.svg" class="w-6 mr-2" alt="" />
            Text Input
          </div>
          <div
            class="flex items-center px-3 py-4 mb-4 border border-[#DFE1E4] rounded-md"
            @dragstart="onDragStart('checkbox')"
            draggable="true"
          >
            <img src="../../../assets/checkbox.svg" class="w-6 mr-2" alt="" />
            Checkbox
          </div>
        </div>
      </div>
      <!-- Right -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      droppedItems: [],
    };
  },
  methods: {
    onDragStart(itemType) {
      event.dataTransfer.setData("itemType", itemType);
    },
    onDrop(event) {
      event.preventDefault();
      const itemType = event.dataTransfer.getData("itemType");
      if (itemType) {
        this.droppedItems.push({ type: itemType, label: "Label", value: "" });
      }
    },
    updateLabel(event, index) {
      this.droppedItems[index].label = event.target.innerText;
    },
    removeItem(index) {
      this.droppedItems.splice(index, 1);
    },
    printFormData() {
      // Collect and print the form data
      console.log("Name:", this.name);
      console.log("Description:", this.description);
      console.log("Dropped Items:", this.droppedItems);
    },
  },
};
</script>
