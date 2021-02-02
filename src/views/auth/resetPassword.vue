<template>
	<v-app>
		<v-main>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar class="bg-orange" dark flat>
								<v-toolbar-title>Modifier votre mot de passe</v-toolbar-title>
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
								<v-form ref="resetPasswordForm" :value="formValid">
									<v-text-field
										label="Email"
										name="email"
										prepend-icon="mdi-email"
										type="email"
										v-model="user.email"
									></v-text-field>

									<v-text-field
										id="password"
										label="Nouveau Mot de Passe"
										name="password"
										prepend-icon="mdi-lock"
										type="password"
										v-model="user.password"
									></v-text-field>

									<v-text-field
										id="password_confirmation"
										label="Confirmer le Nouveau Mot de Passe"
										name="password_confirmation"
										prepend-icon="mdi-lock"
										type="password"
										v-model="user.password_confirmation"
									></v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									class="bg-orange"
									:loading="loading"
									:disabled="loading"
									@click="sendResetPassword(), (loader = 'loading')"
								>
									Valider
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
	name: "resetPassword",
	data() {
		return {
			formValid: false,
			user: {
				email: "",
				password: "",
				password_confirmation: ""
			},
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
			resetPassword: "user/resetPassword",
			addNotification: "application/addNotification"
		}),
		sendResetPassword(){
			if(this.$refs.resetPasswordForm.validate()){
				const token = this.$route.query.token;
				this.resetPassword({...this.user, token})
				.then(() => {
						this.addNotification({
							show: true,
							text1: "Mot de passe réinitialisé :",
							text2: "Veuillez vous connecter !"
						}).then(()=>{
							this.$router.push({
								name: 'login'
							});
						})
					})
					.catch(() => {
						this.addNotification({
							show: true,
							text1: "Echec de réinitialisation du mot de passe :",
							text2: "Veuillez vérifier vos informations !"
						})	
					});
			}
		}
	}
};
</script>