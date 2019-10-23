<template>
  <div class="contact">
    <v-container>
      <h1 class="headline-type1 my-12">Contact</h1>
      <ContactForm/>
    </v-container>
  </div>
</template>


<script>
import ContactForm from '../components/ContactForm';

export default {
  components: {
    ContactForm
  }
}
</script>