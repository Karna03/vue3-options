<script>
import Item from "./Item.vue";
export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      reqired: true,
    },
  },
  methods: {
    onRemove(tweet) {
      this.$emit("remove", tweet);
    },
  },
};
</script>

<template>
  <div class="weather-w">
    <ul>
      <Item
        v-for="tweet in items"
        :key="tweet.id"
        :item="tweet"
        @remove="onRemove(tweet)"
      />
    </ul>
  </div>
</template>

<style>
img {
  height: 50px;
}
</style>
