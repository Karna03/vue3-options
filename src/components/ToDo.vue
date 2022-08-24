<script>
export default {
  data() {
    return {
      id: 0,
      newTodo: "",
      hideCompleted: false,
      allTodo: [{ id: this.id++, text: "create todo", done: false }],
    };
  },
  computed:{
    completedTodo() {
      return this.hideCompleted
        ? this.allTodo.filter((t) => !t.done)
        : this.allTodo;
    },
  },
  methods: {
    addTodo() {
     
      if (this.newTodo !== "") {
        this.allTodo.push({
          id: this.id++,
          text: this.newTodo,
          done: false,
        });
      }
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.allTodo = this.allTodo.filter((t) => t !== todo);
    },
    clearCompleted() {
      this.allTodo = this.allTodo.filter((t) => t.done == false);
    },
  },
};
</script>

<template>
  <div class="todo-wrapper">
    <div class="todo">
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" />
        <button>Add Todo</button>
      </form>
      <ul>
        <li v-for="todo in completedTodo" :key="todo">
          <input type="checkbox" class="custom-checkbox" v-model="todo.done" />
          <span>{{ todo.text }}</span>
          <img
            src="../assets/remove.png"
            class="remove_img"
            @click="removeTodo(todo)"
          />
        </li>
      </ul>
      <button v-if="allTodo.length" @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? "all" : "hide completed" }}
      </button>
      <button @click="clearCompleted">clear completed</button>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: rgb(9 16 53);
  color: aliceblue;
}
button {
  margin: 7px;
  padding: 5px;
  border-radius: 11px;
  border: solid 1px gray;
}
.remove_img {
  height: 15px;
  margin-left: 5px;
}
.todo-wrapper {
  min-height: 300px;
}
li {
  list-style-type: none;
  margin: 5px 0px;
}
ul {
  margin: 0;
  padding: 0;
}
.todo {
  margin: 10px auto;
  width: 60%;
  background-color: #ffffff82;
  border-radius: 10px;
  height: 90%;
  padding: 1%;
}
</style>
