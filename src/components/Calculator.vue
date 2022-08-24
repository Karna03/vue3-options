<script>
export default {
  data() {
    return {
      operations: ["+", "-", "*", "/"],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", "."],
      selectedItem: "",
    };
  },
  methods: {
    clickItem(item) {
      if (!isNaN(this.selectedItem.substr(-1)) || !isNaN(item)) {
        this.selectedItem += item;
      }
    },
    remove() {
      this.selectedItem = "";
    },
    calculeteResult() {
      this.selectedItem = String(eval(this.selectedItem));
    },
  },
};
</script>

<template>
  <div class="calc-wrapper">
    <div class="calculator">
      <div class="output" type="text" placeholder="0">{{ selectedItem }}</div>
      <div class="item">
        <button
          v-for="number in numbers"
          @click="clickItem(number)"
          class="item_button"
          :key="number.id"
        >
          {{ number }}
        </button>
      </div>
      <div class="operation">
        <button
          @click="clickItem(opration)"
          class="operation_button"
          v-for="opration in operations"
          :key="opration.id"
        >
          {{ opration }}
        </button>
      </div>
      <div class="bottom-elem">
        <button @click="remove" class="equals">C</button>
        <button
          @click="calculeteResult"
          v-on:keydown.enter="calculeteResult"
          class="equals"
        >
          =
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: rgb(9 16 53);
  color: aliceblue;
}
.calc-wrapper {
  min-height: 300px;
}
.calculator {
  height: 30vw;
  width: 27%;
  background-color: rgb(168 179 214 / 86%);
  border: solid 1px rgb(69 57 84);
  box-shadow: 0 0 2.5vw rgb(143 116 177);
  margin: 10px auto;
  border-radius: 10px;
  padding: 1%;
}
.bottom-elem {
  float: left;
  width: 100%;
  height: 15%;
  display: flex;
  flex-wrap: wrap;
}
.equals:hover {
  background-color: rgb(72, 46, 82);
  color: white;
}
.operation_button:hover {
  background-color: rgb(72, 46, 82);
  color: white;
}
.item_button:hover {
  background-color: rgb(72, 46, 82);
  color: white;
}
.equals {
  width: 13vw;
  height: 80%;
  border: none;
  outline: none;
  margin: 0.3vw 0.1vw 0vw 0.2vw;
  border-radius: 3vw;
  font-size: 1.8vw;
}
.operation {
  display: block;
  height: 65%;
}
.operation_button {
  width: 6vw;
  height: 20%;
  border: none;
  outline: none;
  margin: 0.3vw 0.1vw 0.7vw;
  border-radius: 3vw;
  font-size: 1.8vw;
}
.item {
  display: flex;
  flex-wrap: wrap;
  height: 65%;
  width: 76%;
  float: left;
}

.item_button {
  width: 6vw;
  height: 20%;
  border: none;
  outline: none;
  margin: 0.3vw;
  border-radius: 3vw;
  font-size: 1.8vw;
}
.output {
  font-size: 2.4vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 18%;
  width: 100%;
}
</style>
