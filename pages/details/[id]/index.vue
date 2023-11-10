<template>
  <div class="mt-[80px] p-5 pt-6 md:px-6">
    <div
      class="bg-white rounded-lg !h-[calc(100vh-120px)] overflow-y-scroll pb-6"
    >
      <!-- Top -->
      <div class="border-b-[##ECEDEF] border-b mb-6">
        <div class="text-[#667085] text-base pb-6 px-[32px] py-[36px]">
          Form Templates /
          <span class="font-medium">{{ $route.params.id }}</span>
        </div>
        <div class="md:flex justify-between items-center px-[32px]">
          <h3 class="text-[#101828] md:text-[32px] font-medium pb-6">
            Templates
          </h3>
          <button
            @click="submitForm"
            class="py-3 px-3 rounded-[6px] mb-[5px] flex w-full md:w-auto text-white text-base font-semibold md:px-6 bg-[#4D6CBB]"
          >
            Save
            <svg
              v-if="loading"
              class="w-5 h-5 text-white animate-spin ml-3"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="md:px-[32px]">
        <div class="md:flex justify-between gap-6">
          <!-- Left -->
          <div
            :class="{
              'border-[#4D6CBB] border-2 rounded-lg': droppedItems.length > 0,
            }"
            class="bg-[#F9FBFF] px-8 py-6 md:w-3/4 h-max mb-3 md:!mb-0"
            @dragover.prevent
            @drop="onDrop"
            @dragenter="onDragEnter"
            @dragleave="onDragLeave"
          >
            <div
              class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
            >
              <label
                for="name"
                class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm py-2"
              >
                <span class="px-[10px]">Subject:</span>
                <img
                  src="../../../assets/dot.svg"
                  class="w-6"
                  alt=""
                  draggable="false"
                />
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
                <img
                  src="../../../assets/dot.svg"
                  class="w-6"
                  alt=""
                  draggable="false"
                />
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
              @dragenter="onDragEnter"
              @dragleave="onDragLeave"
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
              <div v-else-if="item.type === 'checkbox'">
                <label
                  for="checkbox-input"
                  class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm py-2"
                  >Checkbox:</label
                >
                <input
                  type="checkbox"
                  v-model="item.value"
                  id="checkbox-input"
                  class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg"
                />
              </div>

              <div v-else-if="item.type === 'date'">
                <label
                  class="flex justify-between mx-0 px-[10px] border-none text-[#101828] font-medium text-sm py-2"
                  v-if="item.type === 'date'"
                  >Date</label
                >
                <input
                  type="date"
                  v-model="item.value"
                  class="bg-white py-3 pb-6 mb-4 px-6 border border-[#DFE1E4] rounded-lg w-full"
                />
              </div>
              <div v-else-if="item.type === 'page'">
                <div
                  class="flex justify-between mx-0 !px-0 border-none text-[#101828] font-medium text-sm mb-4 py-2"
                  v-if="item.type === 'page'"
                >
                  <div class="flex gap-4">
                    <img
                      src="../../../assets/saveIcon.svg"
                      class="w-5 cursor-pointer"
                      alt=""
                    />
                    <img
                      src="../../../assets/copy.svg"
                      class="w-5 cursor-pointer"
                      alt=""
                      @click="copyPage(index)"
                    />
                    <!-- Add a click event to copy the page -->

                    <img
                      src="../../../assets/delete.svg"
                      class="w-5 cursor-pointer"
                      alt=""
                      @click="removeItem(index)"
                    />
                  </div>
                  <img
                    src="../../../assets/dot.svg"
                    class="w-6 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <div
                    class="w-full justify-between items-center hidden md:flex"
                  >
                    <div
                      id="search"
                      class="w-full rounded-[4px] border-b-[#F9F9F9] border-b mb-[24px] px-3 bg-gray-100 h-14 flex items-center"
                    >
                      <img
                        src="../../../assets/pageIcon.svg"
                        alt=""
                        class="w-[24px] cursor-pointer mr-[12px] transform hover:translate-x-1 transition 200 ease-in"
                      />
                      <input
                        type="search"
                        v-model="item.newOption"
                        class="w-11/12 bg-transparent text-sm outline-none"
                        placeholder="Add Page description"
                      />
                    </div>
                  </div>
                </div>
                <div
                  v-for="(option, optionIndex) in item.options"
                  :key="optionIndex"
                >
                  <div class="flex justify-between items-center pb-[28px]">
                    <div class="space-x-3 flex items-center">
                      <input
                        type="radio"
                        v-model="item.selectedOption"
                        :value="option"
                        :id="`option-${index}-${optionIndex}`"
                        class="w-6 h-6"
                      />
                      <label
                        class="text-sm text-[#101828] font-normal"
                        :for="`option-${index}-${optionIndex}`"
                        >{{ option }}</label
                      >
                    </div>

                    <button @click="removeOption(index, optionIndex)">
                      <img
                        src="../../../assets/closePage.svg"
                        class="w-5 cursor-pointer"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <button
                  @click="addOption(index)"
                  class="text-[#4D6CBB] flex items-center space-x-3 text-sm font-medium"
                >
                  <input type="radio" class="mr-3 w-6 h-6" />
                  Add option
                </button>
              </div>
            </div>
            <div
              :class="{
                'bg-[#DBE2F1] rounded-md mt-6 h-[20px] ': isNearDropArea,
              }"
            />
            <!-- <button @click="printFormData">Print Form Data</button> -->
          </div>
          <!-- Right -->
          <div
            class="w-full md:w-2/4 border border-[#DFE1E4] rounded-md py-6 px-6"
          >
            <h3 class="text-[#101828] text-base font-medium pb-6">
              Form Elements
            </h3>
            <h4 class="text-[#626975] text-sm font-medium pb-[18px]">INPUT</h4>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border border-[#DFE1E4] rounded-md text-sm text-[#101828] font-medium"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/textField.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                Text Input
              </div>
              <img
                src="../../../assets/dot.svg"
                class="w-6 cursor-pointer"
                alt=""
                @dragstart="onDragStart('text')"
                draggable="true"
              />
            </div>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border border-[#DFE1E4] text-sm text-[#101828] font-medium rounded-md"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/dateField.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                Date
              </div>
              <img
                src="../../../assets/dot.svg"
                class="w-6 cursor-pointer"
                alt=""
                @dragstart="onDragStart('date')"
                draggable="true"
              />
            </div>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border border-[#DFE1E4] rounded-md text-sm text-[#101828] font-medium"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/checkbox.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                Checkbox
              </div>
              <img
                src="../../../assets/dot.svg"
                class="w-6 cursor-pointer"
                alt=""
                @dragstart="onDragStart('checkbox')"
                draggable="true"
              />
            </div>
            <h4 class="text-[#626975] text-sm font-medium py-[18px]">LAYOUT</h4>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border border-[#DFE1E4] text-sm text-[#101828] font-medium rounded-md"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/group.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                Group
              </div>
              <img src="../../../assets/dot.svg" class="w-6" alt="" />
            </div>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border text-sm text-[#101828] border-[#DFE1E4] rounded-md font-medium"
              @dragstart="onDragStart('page')"
              draggable="true"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/pageIcon.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                Page
              </div>
              <img
                src="../../../assets/dot.svg"
                class="w-6 cursor-pointer"
                alt="dot"
              />
            </div>
            <div
              class="flex items-center justify-between px-3 py-4 mb-4 border border-[#DFE1E4] text-sm text-[#101828] rounded-md font-medium"
            >
              <div class="flex items-center px-3">
                <img
                  src="../../../assets/listIcon.svg"
                  class="w-[49px] mr-2"
                  alt=""
                  draggable="false"
                />
                List
              </div>
              <img src="../../../assets/dot.svg" class="w-6" alt="dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="showSuccessModal">
      <SuccessModal />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      droppedItems: [],
      loading: false,
      showSuccessModal: false,
      isNearDropArea: false,
    };
  },
  methods: {
    onDragStart(itemType) {
      event.dataTransfer.setData("itemType", itemType);
    },
    onDragEnter(event) {
      this.isNearDropArea = true;
    },

    onDragLeave(event) {
      this.isNearDropArea = false;
    },
    onDragOver(event) {
      // Calculate the position of the dragged item relative to the drop zone
      const rect = event.target.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Define thresholds (adjust as needed) to determine when the item is considered entering the drop zone
      const horizontalThreshold = 10;
      const verticalThreshold = 10;

      // Check if the mouse is within the threshold on the right side, bottom, or in the middle in the same line
      this.isNearDropArea =
        mouseX >= rect.right - horizontalThreshold ||
        (mouseX >= rect.left && mouseX <= rect.right) ||
        mouseY >= rect.bottom - verticalThreshold;
    },
    onDrop(event) {
      event.preventDefault();
      const itemType = event.dataTransfer.getData("itemType");
      if (itemType === "page") {
        this.droppedItems.push({
          type: itemType,
          label: "Label",
          options: [],
          selectedOption: null,
          newOption: "",
        });
      } else {
        this.droppedItems.push({ type: itemType, label: "Label", value: "" });
      }
      this.isNearDropArea = false;
    },
    updateLabel(event, index) {
      this.droppedItems[index].label = event.target.innerText;
    },
    removeItem(index) {
      this.droppedItems.splice(index, 1);
    },
    removeOption(pageIndex, optionIndex) {
      this.droppedItems[pageIndex].options.splice(optionIndex, 1);
    },
    addOption(pageIndex) {
      if (this.droppedItems[pageIndex].newOption) {
        this.droppedItems[pageIndex].options.push(
          this.droppedItems[pageIndex].newOption
        );
        this.droppedItems[pageIndex].newOption = "";
      }
    },
    copyPage(index) {
      // Clone the page at the specified index
      const pageToCopy = { ...this.droppedItems[index] };

      // Add a unique identifier to the copied page (if needed)
      pageToCopy.label += " (Copy)";

      // Insert the copied page right after the original
      this.droppedItems.splice(index + 1, 0, pageToCopy);
    },

    submitForm() {
      this.loading = true;

      // Collect the form data
      const id = this.$route.params.id;
      //   create an array with names and return one at a random
      const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];

      // Get a random index from the names array
      const randomIndex = Math.floor(Math.random() * names.length);

      // Return the name at the random index
      const randomName = names[randomIndex];

      const existingFormData =
        JSON.parse(localStorage.getItem("formData")) || [];

      // Add the new form data to the existing form data
      existingFormData.push({
        name: this.name,
        description: this.description,
        droppedItems: this.droppedItems,
        id,
        randomName,
      });

      // Save the updated form data to localStorage
      localStorage.setItem("formData", JSON.stringify(existingFormData));

      setTimeout(() => {
        // Set loading back to false
        this.loading = false;
        this.showSuccessModal = true;
      }, 2000);
    },
  },
};
</script>
