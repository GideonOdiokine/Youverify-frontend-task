<template>
  <div id="app">
    <div class="draggable" @dragstart="onDragStart('text')" draggable="true">
      <i class="fas fa-font"></i> Text Input
    </div>
    <div
      class="draggable"
      @dragstart="onDragStart('checkbox')"
      draggable="true"
    >
      <i class="fas fa-check-square"></i> Checkbox
    </div>
    <div class="droppable" @dragover.prevent @drop="onDrop">
      <div class="default-input">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" placeholder="Enter name" />
      </div>
      <div class="default-input">
        <label for="description">Description:</label>
        <input
          type="text"
          v-model="description"
          id="description"
          placeholder="Enter description"
        />
      </div>
      <div
        v-for="(item, index) in droppedItems"
        :key="index"
        class="dropped-item"
      >
        <!-- <label
          :contenteditable="item.type === 'label'"
          @blur="updateLabel($event, index)"
          @keydown.enter.prevent=""
        >
          {{ item.label }}
        </label> -->
        <label
          @blur="updateLabel($event, index)"
          v-if="item.type === 'text'"
          :contenteditable="item.type === 'text'"
          >Text Input:</label
        >
        <input
          v-if="item.type === 'text'"
          type="text"
          v-model="item.value"
          id="text-input"
          placeholder="Enter text"
        />
        <template v-else-if="item.type === 'checkbox'">
          <label for="checkbox-input">Checkbox:</label>
          <input type="checkbox" v-model="item.value" id="checkbox-input" />
        </template>
        <button @click="removeItem(index)">Delete</button>
      </div>
      <button @click="printFormData">Print Form Data</button>
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

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}

.default-input {
  margin-bottom: 10px;
}

.draggable {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.droppable {
  margin-top: 20px;
  padding: 20px;
  border: 2px dashed #ccc;
}

.dropped-item {
  margin-top: 10px;
}

label {
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
