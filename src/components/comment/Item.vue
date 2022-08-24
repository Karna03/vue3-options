<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true,
    },
    items: {
      type: Array,
      reqired: true,
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove");
    },
  },
};
</script>

<template>
  <li>
    <img :src="item.avatar" alt="avatar" />
    <span>{{ item.date }}</span>
    <span class="del" @click="removeItem()">X</span>
    <div>{{ item.content }}</div>
  </li>
</template>

<style scoped>
.del {
  color: red;
  margin-left: 5px;
}
</style>
