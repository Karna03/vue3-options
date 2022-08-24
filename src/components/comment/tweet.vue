<script>
import Form from "./Form.vue";
import List from "./List.vue";

export default {
  components: { List, Form },
  data() {
    return {
      items: [
        {
          id: 1,
          content: "hihihi",
          likes: 2,
          avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  created() {
    const itemData = localStorage.getItem("item-list");

    if (itemData) {
      this.items = JSON.parse(itemData);
    }
  },
  methods: {
    addTweet(item) {
      this.items.push(item);

      localStorage.setItem("item-list", JSON.stringify(this.items));
    },

    removeItem(tweet) {
      this.items = this.items.filter((t) => t !== tweet);
      localStorage.setItem("item-list", JSON.stringify(this.items));
    },
  },
};
</script>

<template>
  <div class="tweet-wrapper">
    <div class="tweet">
      <Form @tweet="addTweet" />
      <List :items="items" @remove="removeItem" />
    </div>
  </div>
</template>

<style scoped>
.tweet {
  margin: 10px auto;
  width: 60%;
  background-color: #ffffff82;
  border-radius: 10px;
  height: 90%;
  padding: 1%;
}
</style>
