<template>
  <v-app>
    <div class="wrapper">
      <div class="sidebar" data-color="orange" data-background-color="black">
        <div class="logo text-center">
          <router-link to="../"><h2 class="text-light text-uppercase">Approbank</h2></router-link>
          <span class="text-orange text-uppercase">{{ userInfos.roles[0].name }}</span>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav text-left">
            <li class="nav-item">
              <router-link class="nav-link" to="dashboard">
                <i class="material-icons">dashboard</i>
                <p>Tableau de Bord</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="profile">
                <i class="material-icons">person</i>
                <p>Profil</p>
              </router-link>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
              <router-link class="nav-link" to="mesAgences">
                <i class="material-icons">store_mall_directory</i>
                <p>Mes Agences</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmen"
                data-toggle="collapse"
                data-target="#sousmen"
              >
                <i class="material-icons">account_balance_wallet</i>
                <p>Approvisionnements</p>
              </router-link>
                    <div class="collapse" id="sousmen" aria-expanded="false">
                      <ul class="flex-column pl-2 nav">
                       <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
                          <router-link class="nav-link" to="supply">
                            <i class="material-icons">add_circle</i>
                            <p>Nouvelle Demande</p>
                          </router-link>
                        </li>
                      <li class="nav-item" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque' || userInfos.roles[0].slug==='validatorOMCI'">
                          <router-link class="nav-link" to="demandes">
                            <i class="material-icons">schedule</i>
                            <p>Demandes en attente</p>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="listeDemandes">
                            <i class="material-icons">rule</i>
                            <p>Liste des demandes</p>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug!=='superAdmin' && userInfos.roles[0].slug!=='supervisor'">
              <router-link class="nav-link" to="notifications">
                <i class="material-icons">notifications</i>
                <p>Notifications</p>
              </router-link>
            </li>
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='adminBanque'">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenuAdmin"
                data-toggle="collapse"
                data-target="#sousmenuAdmin"
              >
                <i class="material-icons">visibility</i>
                <p>Administration</p>
              </router-link>
              <div class="collapse" id="sousmenuAdmin" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='managerOMCI'">
                    <router-link class="nav-link" to="validateursOM">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs</p>
                    </router-link>
                  </li>
                  <li class="nav-item active" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenuStructure"
                data-toggle="collapse"
                data-target="#sousmenuStructure"
              >
                <i class="material-icons">home</i>
                <p>Gestion des Structures</p>
              </router-link>
              <div class="collapse" id="sousmenuStructure" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item active">
                    <router-link class="nav-link" to="structures">
                      <i class="material-icons">palette</i>
                      <p>Liste des Structures</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="agences">
                      <i class="material-icons">palette</i>
                      <p>Liste des Agences</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
                    <router-link class="nav-link" to="comptesBanqueOrange">
                      <i class="material-icons">account_balance</i>
                      <p>Comptes Banque Orange</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenu"
                data-toggle="collapse"
                data-target="#sousmenu"
              >
                <i class="material-icons">settings</i>
                <p>Paramètres</p>
              </router-link>
              <div class="collapse" id="sousmenu" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">info_outline</i>
                      <p>Approbank</p>
                    </router-link>
                  </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">palette</i>
                      <p>Affichage</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="roles">
                      <i class="material-icons">safety_divider</i>
                      <p>Gestion des Rôles</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">lock</i>
                      <p>Gestion des Permissions</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <hr class="bg-orange"/>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                <i class="material-icons">menu_book</i>
                <p>Documentation</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                <i class="material-icons">support_agent</i>
                <p>Service Support</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-panel">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
        >
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <a class="navbar-brand" href="javascript:;">Les structures</a>
            
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="dashboard">
                    <i class="material-icons">dashboard</i>
                    <p class="d-lg-none d-md-block">
                      Tableau de bord
                    </p>
                  </a>
                </li>
                <li class="nav-item dropdown" v-if="userInfos.roles[0].slug!=='superAdmin'">
                  <a
                    class="nav-link"
                    href=""
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">notifications</i>
                    <span class="notification">1</span>
                    <p class="d-lg-none d-md-block">
                      Notifications
                    </p>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="notifications">
                      Nouvelle demande en attente de validation !
                    </a>
                    <a class="dropdown-item" href="notifications">
                      Votre demande a été approuvée (1/2) !
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="javascript:;"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">
                      Mon Compte
                    </p>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                  <h4 class="text-center font-weight-bold text-orange text-uppercase">{{ userInfos.name }}</h4>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="profile">Mon Profil</a>
                    <a class="dropdown-item" @click="logout">Me Déconnecter</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
        <div class="content">
          <div class="container-fluid">
              <div class="row">
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='managerOMCI'">
                <v-card>
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="structures"
                    hide-select
                    class="elevation-1"
                    :sort-by="['priorite']"
                    :search="search"
                    loading
                    loading-text="Chargement... Veuillez patienter"
                    no-results-text='Aucune donnée à afficher'
                    footer-props.items-per-page-text='Données '
                  >
                  <template v-slot:top>
                    
                    <v-toolbar
                      flat
                    >
                      <v-toolbar-title>Liste des structures ({{ structures.length }})</v-toolbar-title>
                        <v-divider
                          class="mx-15"
                          inset
                          vertical
                        ></v-divider>
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Recherche"
                          single-line
                          hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        
                        <v-dialog
                          v-model="dialog"
                          max-width="500px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            
                            class="mb-2 btn-orange"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Ajouter 
                          </v-btn>

                          
                        </template>
                        
                        <v-card>
                          <v-card-title>
                            <span class="headline">Nouvelle Structure</span>
                          </v-card-title>

                          <v-card-text>
                                <v-form>
                                  <v-text-field
                                    v-if="!edit"
                                      label="Nom du responsable"
                                      name="firstname"
                                      prepend-icon="mdi-account"
                                      type="text"
                                      v-model="editedItem.firstname"
                                    ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Prénom(s) du responsable"
                    name="lastname"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="editedItem.lastname"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Téléphone"
                    name="phone"
                    prepend-icon="mdi-phone"
                    type="text"
                    v-model="editedItem.phone"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Nom d'Utilisateur"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="editedItem.name"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="editedItem.email"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    id="password"
                    label="Mot de Passe"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="editedItem.password"
                  ></v-text-field>

                </v-form>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              class="btn btn-link btn-default"
                              text
                              @click="close"
                            >
                              Annuler
                            </v-btn>
                            <v-btn
                              class="btn btn-orange"
                              text
                              @click="save"
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      
                    </v-toolbar>
      
                  </template>
                  <template v-slot:item.active="{ item }">
                      
                        {{ item.active ? "Actif" : "Gélé" }}
                      
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-switch 
                        v-model="item.active"
                        color="orange darken-3"
                        v-on:change="geler(item.id)"
                      >
                      </v-switch>
                  </template>
                  <template v-slot:no-data>
                      Aucune donnée à afficher
                  </template>
                  </v-data-table>
                </template>
                </v-card>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "structures",
  data:() => ({
    search: '',
    //singleSelect: false,
    //selected: [],
    edit: false,
      nombreVal: null,
      dialog: false,
      headers: [
        {
          text: 'Nom Utilisateur',
          align: 'start',
          value: 'name',
        },
        { text: 'Nom du responsable', value: 'firstname' },
        { text: 'Prénom(s) du responsable', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Telephone', value: 'phone' },
        { text: 'Statut', value: 'active' },
        //{ text: 'Date', value: 'created_at' },
        { text: 'Géler', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        user: {
            name: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            active: true,
        },
        name: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        active: true,
      },
      defaultItem: {
         user: {
            name: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
        },
        name: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
      },
  }),
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos",
      structures: "structure/structures"
    }),
    ...mapState({
      structures: state => state.structure.structures
    }),
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
    },
  methods: {
    ...mapActions({
      registerUser: "user/registerUser",
      structureAd: "structure/addStructure",
      structureGel: "structure/gelStructure"
    }),
      geler(id) {
        //console.log(id);
        this.structureGel(id)
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (!this.editedIndex > -1) {
        this.editedItem.name = this.editedItem.name;
        this.editedItem.firstname = this.editedItem.firstname;
        this.editedItem.lastname = this.editedItem.lastname;
        this.editedItem.email = this.editedItem.email;
        this.editedItem.phone = this.editedItem.phone;
        this.editedItem.password = this.editedItem.password;
        this.structureAd(this.editedItem);
        this.structures.push(this.editedItem);
         
        }
        this.close()
      },
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
  mounted() {
    this.$store.dispatch("structure/structures");
  }
};
</script>