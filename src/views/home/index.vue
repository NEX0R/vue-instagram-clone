<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText tag="p"> This is a custom text component. </CustomText>
  </div>

</template>

<script>
import CustomText from "@/components/CustomText";
import IconHome from "@/icons/home.svg";
export default {
  name: "HomeView",
  components: {
    CustomText,
    IconHome
  },
};
</script>
<style>
h1 {
  color: red;
  @media (--t) {
    color: blue;
  }
}
</style>
