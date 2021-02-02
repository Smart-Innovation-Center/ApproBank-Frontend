<template>
  <v-app class="home">
    <v-app-bar app color="bg-orange" dark>
      <v-toolbar-title class="headline text-uppercase">
        <h1 class="">APPROBANK</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn title="Mon Profil" :to="{ name: 'profile' }" v-if="loggedIn">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn title="Deconnexion" @click="logout" small v-if="loggedIn">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn small @click="login" v-if="!loggedIn">
        CONNEXION
      </v-btn>
    </v-app-bar>
    <v-main>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: () => ({
    affiche: false
  }),
  computed: {
    ...mapGetters({
      loggedIn: "user/loggedIn"
    })
  },
  methods: {
    ...mapActions({
      logout: "user/logoutUser",
      userState: "user/setLoggedInState"
    }),
    logout() {
      this.$store.dispatch("user/logoutUser");
    },
    login() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
