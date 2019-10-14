<template>
<nav>
   <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
         <span>Hanarida</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
         <span class="mr-2">SHOP</span>
      </v-btn>
   </v-app-bar>
   <v-navigation-drawer v-model="drawer" app class="brown darken-2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            Menu
          </v-list-item-title>
          <!-- <v-list-item-subtitle>
            List of Pages
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
               <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
   </v-navigation-drawer>
</nav>
</template>

<script>
export default {
   name: 'App',
   data () {
      return {
         drawer : false,
         items: [
            { title: 'Top', icon: 'mdi-home', link: '/' },
            { title: 'About', icon: 'mdi-help-box', link: '/about' },
            { title: 'Member', icon: 'mdi-human-greeting', link: '/member' },
            { title: 'Contact', icon: 'mdi-email-open-outline', link: '/contact' },
            { title: 'News', icon: 'mdi-newspaper-variant-multiple', link: '/news' },
            { title: 'Gallery', icon: 'mdi-image', link: '/gallery' },
         ]
      }
   }
}
</script>