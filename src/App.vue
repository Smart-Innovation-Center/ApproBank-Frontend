<template>
  <v-app>
    <!-- <v-app-bar app color="bg-orange" dark>
      <v-toolbar-title class="headline text-uppercase">
        <h1 class="caesar">APPROBANK</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn :to="{ name: 'home' }" icon large v-on="on">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Accueil</span>
      </v-tooltip>
      <v-btn title="Mon Profil" :to="{ name: 'profile' }" v-if="loggedIn">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn title="Deconnexion" @click="logout" small v-if="loggedIn">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn small @click="login" v-if="!loggedIn">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      @input="updateNotification($event, index)"
      :key="index"
      v-for="(snackbar, index) in allNotifications"
      v-model="snackbar.show"
      bottom
      color="dark"
    >
      {{ snackbar.text1 }}
      <v-btn color="dark" text @click="removeNotification(index)">
        <v-icon>mdi-close-box</v-icon>
      </v-btn>
      <br />
      {{ snackbar.text2 }}
    </v-snackbar>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      snackbarsuccess: {},
      snackbarerror: {}
    };
  },
  created() {
    this.userState().then(() => {
      if (this.loggedIn) {
        this.userInfos();
      }
    });
  },
  computed: {
    ...mapGetters({
      loggedIn: "user/loggedIn",
      allNotifications: "application/notifications"
    })
  },
  methods: {
    ...mapActions({
      logout: "user/logoutUser",
      userState: "user/setLoggedInState",
      removeNotification: "application/removeNotification",
      userInfos: "user/userInfos"
    }),
    login() {
      this.$router.push({ name: "login" });
    },
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    updateNotification(show, index) {
      if (!show) {
        this.removeNotification(index);
      }
    }
  }
};


</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap");
@import "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css";

.caesar {
  font-family: "Caesar Dressing";
}
.bg-orange {
  background: #ff7900 !important;
  color: #fff !important;
}
.btn-orange {
  background: #ff7900 !important;
  color: #fff !important;
}
.text-orange {
  color: #ff7900 !important;
}
.bg-black{
  background: #000!important;
  opacity: .9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f1bc0e;
}

/* .nav-link[data-toggle].collapsed p:after {
    content: " \02C5";
}
.nav-link[data-toggle]:not(.collapsed) p:after {
    content: " \02C4";
} */
</style>
