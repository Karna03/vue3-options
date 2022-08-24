<script>
export default {
  data() {
    return {
      content: "",
      id: 2,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("tweet", {
        id: this.id++,
        content: this.content,
        likes: 2,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.content = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <textarea v-model="content" required placeholder="Type comment" />
    <button type="submit">Submit</button>
  </form>
</template>
