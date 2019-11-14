<template>
  <!-- <v-row no-gutters v-if="$vuetify.breakpoint.xsOnly">
      <v-col v-for="(item, index) in topItems" :key="`first-${index}`" cols="6" style="height: calc(calc(100vh - 56px) / 3)">
        <v-hover v-slot:default="{ hover }">
          <v-card outlined tile :style='{ backgroundImage: `url(${item.image})` }' :to="item.link" style="height: 100%; position: relative; border: none;">
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
          <v-card outlined tile :style='{ backgroundImage: `url(${item.image})` }' :to="item.link" style="height: 100%; border: none;">
            <v-expand-transition>
              <div v-if="hover" class="d-flex transition-fast-in-fast-out brown darken-2 v-card--reveal display-2 white--text">
                {{item.name}}
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
  </v-row>-->
  <div>
    <div class="bg-image-loop"></div>
    <v-container>
      <div class="story py-12">
        <v-row>
          <v-col cols="6">
            <h2 class="display-4 mb-12">Story</h2>
            <p class="mb-12">それは、２人と１匹の<br>レシピストのある暮らし</p>
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1" max-width="500" class="ml-auto"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="0.8" max-width="500"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
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

.bg-image-loop {
	width: 100%;
	height: 600px; /* 画像の高さを指定 */
	position: relative;
	background: url("../assets/slide-sample.jpg") repeat-x 0 0;
	background-size: auto 100%;
	animation: bgSlider 200s linear infinite;
	padding: 0;

  &:hover {
    animation-play-state: paused;
  }
}
@keyframes bgSlider {
	from { background-position: 0 0; }
    to { background-position: -13172px 0; }
}
</style>