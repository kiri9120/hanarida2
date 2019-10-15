<template>
    <v-row no-gutters>
      <v-col v-for="(item, index) in topItems" :key="index" cols="12" sm="4">
        <v-hover v-slot:default="{ hover }">
          <v-card outlined tile :style='{ backgroundImage: `url(${item.image})` }' :to="item.link">
            <v-responsive :aspect-ratio="16/9">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out brown darken-2 v-card--reveal display-2 white--text" style="height: 100%;">
                {{item.name}}
                </div>
              </v-expand-transition>
            </v-responsive>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld,
  },
  name: 'App',
  data () {
    return {
      topItems: [
        {
          name: 'TOP',
          image: require('../assets/flower01.jpg'),
          link: '/'
        },
        {
          name: 'ABOUT',
          image: require('../assets/flower02.jpg'),
          link: '/about'
        },
        {
          name: 'MEMBER',
          image: require('../assets/flower03.jpg'),
          link: '/member'
        },
        {
          name: 'CONTACT',
          image: require('../assets/flower04.jpg'),
          link: '/contact'
        },
        {
          name: 'NEWS',
          image: require('../assets/flower05.jpg'),
          link: '/news'
        },
        {
          name: 'GALLERY',
          image: require('../assets/flower06.jpg'),
          link: '/gallery'
        },
        {
          name: 'ページ7',
          image: require('../assets/flower07.jpg'),
          link: '/'
        },
        {
          name: 'ページ8',
          image: require('../assets/flower08.jpg'),
          link: '/'
        },
        {
          name: 'ページ9',
          image: require('../assets/flower09.jpg'),
          link: '/'
        }
      ]
    }
  }
};
</script>
<style scoped lang="scss">
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .6;
    position: absolute;
    width: 100%;
  }
</style>