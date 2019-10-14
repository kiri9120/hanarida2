<template>
  <v-app>
    <TheHeader/>
    <v-content>
      <router-view/>
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
