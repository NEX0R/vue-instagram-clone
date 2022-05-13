<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
      default: 40,
    },
  },
};
</script>
<style scoped>
.avatar {
  padding: 2px;
  border-radius: 999px;
  display: inline-flex;
  background: rgb(249, 159, 77);
  background: linear-gradient(
    90deg,
    rgba(249, 159, 77, 1) 0%,
    rgba(220, 49, 114, 1) 35%,
    rgba(197, 46, 145, 1) 100%
  );
}

.avatar img {
  border-radius: inherit;
  border: 2px solid white;
}
</style>

