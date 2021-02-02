<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/agence.jpg')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenue sur Approbank
        </h1>
        <p class="subheading font-weight-regular">
          Pour une facilité et une sécurité des transactions de la banque au compte Orange Money.
          <br />Approbank est une application web qui permet de digitaliser le processus d'approvisionnement du compte d'une agence OM.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld"
});
</script>
