<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar class="bg-orange" dark flat>
                <v-toolbar-title>Vérification OTP</v-toolbar-title>
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
                <p>Veuillez entrer le code qui vous a été envoyé par SMS :</p>
                <div style="display: flex; flex-direction: row;">
                  <v-otp-input
                    ref="otpInput"
                    input-classes="otp-input"
                    separator="-"
                    :num-inputs="4"
                    :should-auto-focus="true"
                    :is-input-num="true"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                  />

                  <button
                    class="btn btn-default btn-link"
                    @click="handleClearInput()"
                  >
                    <i class="material-icons">restore</i>
                  </button>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="bg-orange" @click="goToDashboard()">
                  Valider
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
export default {
  name: "otp",
  props: {
    source: String
  },
  methods: {
    goToDashboard() {
      this.$router.push({
        name: "dashboard"
      });
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    }
  }
};
</script>

<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
