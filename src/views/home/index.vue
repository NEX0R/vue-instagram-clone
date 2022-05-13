<template>
  <div class="home">
    <div class="timeline">
      <Post />
    </div>
    <div class="sidebar">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "@/icons/home.svg";
import Avatar from "@/components/Avatar.vue";
import Post from "@/components/Post.vue";
export default {
  name: "HomeView",
  components: {
    CustomText,
    IconHome,
    Avatar,
    Post,
  },
};
</script>
<style>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  
  @media (--t) {
    display: block;
  }
}
</style>
