<template>
    <v-row no-gutters v-if="$vuetify.breakpoint.xsOnly">
      <v-col v-for="(item, index) in topItems" :key="`first-${index}`" cols="6" style="height: calc(calc(100vh - 56px) / 3)">
        <v-hover v-slot:default="{ hover }">
          <v-card outlined tile :style='{ backgroundImage: `url(${item.image})` }' :to="item.link" style="height: 100%; position: relative">
            <p class="top-text">
              {{item.name}}
            </p>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row no-gutters v-else>
      <v-col v-for="(item, index) in topItems" :key="`second-${index}`" cols="4" style="height: calc(calc(100vh - 56px) / 2)">
        <v-hover v-slot:default="{ hover }">
          <v-card outlined tile :style='{ backgroundImage: `url(${item.image})` }' :to="item.link" style="height: 100%;">
            <v-expand-transition>
              <div v-if="hover" class="d-flex transition-fast-in-fast-out brown darken-2 v-card--reveal display-2 white--text">
                {{item.name}}
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data () {
    return {
      topItems: [
        {
          name: 'TOP',
          image: require('../assets/flower02.jpg'),
          link: '/'
        },
        {
          name: 'ABOUT',
          image: require('../assets/flower02.jpg'),
          link: '/about'
        },
        {
          name: 'MEMBER',
          image: require('../assets/flower02.jpg'),
          link: '/member'
        },
        {
          name: 'CONTACT',
          image: require('../assets/flower02.jpg'),
          link: '/contact'
        },
        {
          name: 'NEWS',
          image: require('../assets/flower02.jpg'),
          link: '/news'
        },
        {
          name: 'GALLERY',
          image: require('../assets/flower02.jpg'),
          link: '/gallery'
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
    height: 100%;
  }

  .top-text {
    margin-bottom: 0;
    color: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>