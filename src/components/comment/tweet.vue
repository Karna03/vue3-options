<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("comment", ["addTweet"]),
    removeItem(tweet) {
      this.$store.commit("comment/removeItem", tweet);
    },
  },
  created() {
    const itemData = localStorage.getItem("item-list");
    if (itemData) {
      this.$store.commit("comment/parseItems", JSON.parse(itemData));
    }
  },
  computed: {
    ...mapGetters({
      allComments: "comment/allComments",
    }),
  },
};
</script>

<template>
  <div class="tweet-wrapper">
    <div class="tweet">
      <form @submit.prevent="onSubmit">
        <textarea
          v-model="allComments.content"
          required
          placeholder="Type comment"
        />
        <button type="submit" @click="addTweet">Submit</button>
      </form>
      <ul>
        <li v-for="item in allComments.items" :key="item.id">
          <img :src="item.avatar" alt="avatar" />
          <span>{{ item.date }}</span>
          <span class="del" @click="removeItem(item)"> X</span>
          <div>{{ item.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 50px;
}
.tweet {
  margin: 10px auto;
  width: 60%;
  background-color: #ffffff82;
  border-radius: 10px;
  height: 90%;
  padding: 1%;
}
.del {
  color: red;
}
</style>
