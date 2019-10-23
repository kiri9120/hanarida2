<template>
  <v-app>
    <TheHeader/>
    <v-content>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </v-content>
    <TheFooter/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheFooter
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  .v-enter-active, .v-leave-active {
    transition: opacity .3s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
  .headline-type1 {
    font-size: 6rem;
    font-family: 'Shadows Into Light', cursive;
  }
</style>