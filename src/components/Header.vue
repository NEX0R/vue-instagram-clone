<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">Instagram</router-link>

      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>

      <!-- navigation -->
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from "@/icons/home.svg";
import IconHomeFill from "@/icons/home-fill.svg";
import IconDirect from "@/icons/direct.svg";
import IconDirectFill from "@/icons/direct-fill.svg";
import IconExplore from "@/icons/explore.svg";
import IconExploreFill from "@/icons/explore-fill.svg";
import Container from "./Container.vue";
export default {
  name: "MainHeader",
  components: {
    IconHome,
    IconHomeFill,
    Container,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
  },
};
</script>

<style scoped>
.header {
  z-index: 90px;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  border-bottom: 1px solid rgb(var(--b6a));
  background-color: white;
}
.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo {
  font-size: 1.4rem;
  font-weight: bold;
}
.search {
  display: none;
  @media (--t) {
    display: block;
    text-align: center;
  }
}
.search input {
  width: 215px;
  height: 28px;
  border: 1px solid rgb(var(--b6a));
  border-radius: 3px;
  background-color: rgb(var(--b3f));
  padding-left: 20px;
  padding-right: 20px;
}
.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a));

  @media (--t) {
    position: static;
    height: auto;
    border: 0;
    justify-content: flex-end;
    background-color: white;
  }
}
.navigation a {
  @media (--t) {
    margin-left: 20px;
  }
}
</style>
