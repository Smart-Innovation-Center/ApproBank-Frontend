<template>
	<v-app>
		<v-main>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar class="bg-orange" dark flat>
								<v-toolbar-title>Se connecter</v-toolbar-title>
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
								<v-form ref="loginForm">
									<v-text-field
										label="Email"
										name="email"
										prepend-icon="mdi-email"
										type="email"
										v-model="user.email"
									></v-text-field>

									<v-text-field
										id="password"
										label="Mot de Passe"
										name="password"
										prepend-icon="mdi-lock"
										type="password"
										v-model="user.password"
									></v-text-field>
								</v-form>
							</v-card-text>
							<router-link :to="{ name: 'forgotPassword' }">Mot de Passe Oublié ?</router-link>
							<v-card-actions>
								<router-link :to="{ name: 'register' }">S'inscrire</router-link>
								<v-spacer></v-spacer>
								<v-btn class="bg-orange"
									:loading="loading"
									:disabled="loading"
									@click="loginUser(), (loader = 'loading')"
								>
									Connexion
									<template v-slot:loader>
										<span class="custom-loader">
											<v-progress-circular class="text-orange"
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
import {mapActions} from "vuex";
export default {
	name: "login",
	props: {
		source: String
	},
	data() {
		return {
			user: {
				email: "",
				password: ""
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
			login: 'user/loginUser',
			addNotification: 'application/addNotification'
		}),
		loginUser() {
			if (this.$refs.loginForm.validate()) {
				this.login(this.user)
					.then(response => {
						// if (response.data && response.data.success) {
						// 	this.addNotification({	
						// 		show: true,
						// 		text1: "Connexion effectuée :",
						// 		text2: "Bienvenue à votre espace !"
						// 	}).then(()=>{
								this.$router.push({
									name: 'otp'
								});
							})
						//}
						 
					//})
					.catch(() => {
						this.addNotification({
								show: true,
								text1: "Connexion échouée :",
								text2: "Veuillez vérifier vos identifiants de connexion !"
							});
					});
			}
		}
	},
};
</script>

