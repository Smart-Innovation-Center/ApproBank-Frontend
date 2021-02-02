<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar class="bg-orange" dark flat>
                <v-toolbar-title>S'inscrire</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :to="{ name: 'home' }" icon large v-on="on">
                      <v-icon>mdi-home</v-icon>
                    </v-btn>
                  </template>
                  <span>Accueil</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form ref="registerForm" :value="formValid">
                  <v-text-field
                    label="Nom d'Utilisateur"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="newUser.name"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="newUser.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Mot de Passe"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="newUser.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link :to="{ name: 'login' }">Se connecter</router-link>
                <v-spacer></v-spacer>
                <v-btn
                  class="bg-orange"
                  :loading="loading"
                  :disabled="loading"
                  @click="registerUser(), (loader = 'loading')"
                >
                  Inscription
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-progress-circular
                        class="text-orange"
                        indeterminate
                      ></v-progress-circular>
                    </span>
                  </template>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      formValid: false,
      newUser: {
        email: "",
        name: "",
        password: ""
      },
      loader: null,
      loading: false
    };
  }, 
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  methods: {
    ...mapActions({
      addNotification: "application/addNotification",
      register: "user/registerUser"
    }),
    registerUser() {
      if (this.$refs.registerForm.validate()) {
        this.register(this.newUser)
          .then(response => {
            if (response.data && response.data.success) {
              this.addNotification({
                show: true,
                text1: "Inscription effectuée avec succès :",
                text2: "Veuillez vous connecter !"
              }).then(() => {
                this.$router.push({
                  name: "login"
                });
              });
            }
          })
          .catch(() => {
            this.addNotification({
              show: true,
              text1: "Inscription échouée :",
              text2: "Veuillez vérifier les informations fournies !"
            });
          });
      }
    }
  }
};
</script>
