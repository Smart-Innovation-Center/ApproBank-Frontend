<template>
	<v-app>
		<v-main>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar class="bg-orange" dark flat>
								<v-toolbar-title>Réinitialiser votre mot de passe</v-toolbar-title>
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
								<v-form ref="forgotPasswordForm">
									<v-text-field
										label="Email"
										name="email"
										prepend-icon="mdi-email"
										type="email"
										v-model="email"
									></v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<router-link :to="{ name: 'login' }">Se Connecter</router-link>
								<v-spacer></v-spacer>
								<v-btn
									class="bg-orange"
									:loading="loading"
									:disabled="loading"
									@click="forgotPass(), (loader = 'loading')"
								>
									Envoyer
									<template v-slot:loader>
										<span class="custom-loader">
											<v-progress-circular
												indeterminate
												class="text-orange"
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
import {mapActions} from "vuex";
export default {
	name: "forgotPassword",
	props: {
		source: String
	},
	data() {
		return {
			email: "",
			loader: null,
			loading: false,
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
			forgotPassword: "user/forgotPassword",
			addNotification: "application/addNotification"
		}),
		forgotPass(){
			if(this.$refs.forgotPasswordForm.validate()){
				this.forgotPassword({email: this.email})
					.then(() => {
						this.addNotification({
							show: true,
							text1: "E-mail de réninitialisation envoyé :",
							text2: "Veuillez consulter votre mail !"
						}).then(()=>{
							this.$router.push({
								name: 'home'
							});
						})
					})
					.catch(() => {
						this.addNotification({
								show: true,
								text1: "Echec d'envoie du lien de réinitialisation :",
								text2: "Vérifiez l'email entré !"
							});
					});
			}
		}
	},
};
</script>
