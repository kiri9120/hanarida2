<template>
  <v-app>
    <TheHeader/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data: () => ({
    //
  }),
};
</script>
