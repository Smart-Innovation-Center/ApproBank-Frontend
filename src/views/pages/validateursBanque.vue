<template>
  <v-app>
    <div class="wrapper">
      <div class="sidebar" data-color="orange" data-background-color="black">
        <div class="logo text-center">
          <a href="../"><h2 class="text-light text-uppercase">Approbank</h2></a>
          <span class="text-orange text-uppercase">{{ userInfos.roles[0].name }}</span>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav text-left">
            <li class="nav-item">
              <a class="nav-link" href="dashboard">
                <i class="material-icons">dashboard</i>
                <p>Tableau de Bord</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile">
                <i class="material-icons">person</i>
                <p>Profil</p>
              </a>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
              <a class="nav-link" href="mesAgences">
                <i class="material-icons">store_mall_directory</i>
                <p>Mes Agences</p>
              </a>
            </li>
            <li class="nav-item">
                    <a
                  f    class="nav-link collapsed text-truncate"
                      href="#sousmen"
                      data-toggle="collapse"
                      data-target="#sousmen"
                    >
                      <i class="material-icons">account_balance_wallet</i>
                      <p>Approvisionnements</p>
                    </a>
                    <div class="collapse" id="sousmen" aria-expanded="false">
                      <ul class="flex-column pl-2 nav">
                       <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
                          <a class="nav-link" href="supply">
                            <i class="material-icons">add_circle</i>
                            <p>Nouvelle Demande</p>
                          </a>
                        </li>
                      <li class="nav-item" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque' || userInfos.roles[0].slug==='validatorOMCI'">
                          <a class="nav-link" href="demandes">
                            <i class="material-icons">schedule</i>
                            <p>Demandes en attente</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="listeDemandes">
                            <i class="material-icons">rule</i>
                            <p>Liste des demandes</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug!=='superAdmin' && userInfos.roles[0].slug!=='supervisor'">
              <a class="nav-link" href="notifications">
                <i class="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='adminBanque'">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenuAdmin"
                data-toggle="collapse"
                data-target="#sousmenuAdmin"
              >
                <i class="material-icons">visibility</i>
                <p>Administration</p>
              </a>
              <div class="collapse" id="sousmenuAdmin" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item active" v-if="userInfos.roles[0].slug==='adminBanque'">
                    <a class="nav-link" href="validateursBanque">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='managerOMCI'">
                    <a class="nav-link" href="validateursOM">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenuStructure"
                data-toggle="collapse"
                data-target="#sousmenuStructure"
              >
                <i class="material-icons">home</i>
                <p>Gestion des Structures</p>
              </a>
              <div class="collapse" id="sousmenuStructure" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item">
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
                    <a class="nav-link" href="comptesBanqueOrange">
                      <i class="material-icons">account_balance</i>
                      <p>Comptes Banque Orange</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenu"
                data-toggle="collapse"
                data-target="#sousmenu"
              >
                <i class="material-icons">settings</i>
                <p>Paramètres</p>
              </a>
              <div class="collapse" id="sousmenu" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="#">
                      <i class="material-icons">info_outline</i>
                      <p>Approbank</p>
                    </a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Affichage</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="roles">
                      <i class="material-icons">safety_divider</i>
                      <p>Gestion des Rôles</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="#">
                      <i class="material-icons">lock</i>
                      <p>Gestion des Permissions</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <hr class="bg-orange"/>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">menu_book</i>
                <p>Documentation</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">support_agent</i>
                <p>Service Support</p>
              </a>
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
              <a class="navbar-brand" href="javascript:;">Validateurs de la Banque : <span class="font-weight-bold">{{ adminBankInfos.bank.nom }} ({{ adminBankInfos.bank.code }})</span></a>
            
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
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='adminBanque'">
                <v-card>
                <template>

                  <v-data-table
                    :headers="headers"
                    :items="validatorsBankInfos"
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
                      <v-toolbar-title>Liste des validateurs de la banque ({{ validatorsBankInfos.length }} / {{ adminBankInfos.bank.nombreApprobation }})</v-toolbar-title>
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
                        <template v-slot:activator="{ on, attrs }" v-if="validatorsBankInfos.length !== adminBankInfos.bank.nombreApprobation">
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
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                                <v-form>
                                  <v-text-field
                  v-if="!edit"
                    label="Nom de famille"
                    name="firstname"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="editedItem.user.firstname"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Prénom(s)"
                    name="lastname"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="editedItem.user.lastname"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Téléphone"
                    name="phone"
                    prepend-icon="mdi-phone"
                    type="text"
                    v-model="editedItem.user.phone"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Nom d'Utilisateur"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="editedItem.user.name"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    v-model="editedItem.user.email"
                  ></v-text-field>

                  <v-text-field
                  v-if="!edit"
                    id="password"
                    label="Mot de Passe"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="editedItem.user.password"
                  ></v-text-field>

                  <v-text-field
                    id="priorite"
                    label="Priorité"
                    name="priorite"
                    prepend-icon="mdi-lock"
                    type="number"
                    required="required"
                    v-model="editedItem.priorite"
                    min="1"
                    :max="adminBankInfos.bank.nombreApprobation"
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
                    
                    <!-- <v-switch
        v-model="singleSelect"
        label="Selection unique"
        class="pa-3"
        color="orange darken-3"
      ></v-switch> -->

      
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                  </template>
                  <template v-slot:item.active="{ item }">
                      
                        {{ item.active ? "Actif" : "Gélé" }}
                      
                  </template>
                  <template v-slot:item.gel="{ item }">
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
  name: "validateursBanque",
  data:() => ({
    search: '',
    //singleSelect: false,
    //selected: [],
    edit: false,
      nombreVal: null,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nom Utilisateur',
          align: 'start',
          value: 'user.name',
        },
        { text: 'Nom de famille', value: 'user.firstname' },
        { text: 'Prénom(s)', value: 'user.lastname' },
        { text: 'Email', value: 'user.email' },
        { text: 'Telephone', value: 'user.phone' },
        { text: 'Priorité', value: 'priorite'},
        //{ text: 'Nombre de validations', value: '' },
        //{ text: 'Date', value: 'created_at' },
        { text: 'Modifier', value: 'actions', sortable: false },
        { text: 'Statut', value: 'active' },
        { text: 'Géler', value: 'gel', sortable: false },
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
        },
        name: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        priorite: "",
        bank_id: ""
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
        priorite: "",
        bank_id: ""
      },
    selectedAgency: [],
    selectedRib: []
  }),
  computed: {
    formTitle () {
        return this.editedIndex === -1 ? 'Nouveau Validateur' : 'Modifier Priorité Validateur'
      },
    ...mapGetters({
      userInfos: "user/userInfos",
      adminBankInfos: "user/adminBankInfos",
      validatorsBankInfos: "user/validatorsBankInfos"
    }),
    ...mapState({
      banks: state => state.bank.banks,
      agencies: state => state.agency.agencies,
      ribs: state => state.rib.ribs,
      //validatorsBank: state => state.validatorBank.validatorsBank
    }),
    // validatorsCounter(){
    //         const payload = this.adminBankInfos.bank.id;
    //         console.log(payload);
    //        axios.get(`validatorsByBank/${payload}`,payload).then(response => console.log(response)).catch(error => console.log(error))
    //     },
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  methods: {
    ...mapActions({
      registerUser: "user/registerUser",
      loadVal: "validatorBank/loadValidatorsBank",
      validatorBankAd: "validatorBank/addValidatorBank",
      validatorBankGel: "validatorBank/gelValidatorBank",
      validatorBankUpd: "validatorBank/updateValidatorBank"
    }),
    // load(){
    //     this.loadVal(adminBankInfos.bank);
    // }
    editItem (item) {
        this.editedIndex = this.validatorsBankInfos.indexOf(item)
        // console.log(this.editedIndex)
        this.editedItem = Object.assign({}, item)
        //this.editedItem.bankID = this.editedItem.bank.id
        // console.log(this.editedItem)
        this.edit = true
        this.dialog = true
      },
      geler(id) {
        //console.log(id);
        this.validatorBankGel(id)
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.validatorsBankInfos[this.editedIndex], this.editedItem);
          
        this.validatorBankUpd(this.editedItem)
        } else {

        this.editedItem.bank_id = this.adminBankInfos.bank_id;
        this.editedItem.name = this.editedItem.user.name;
        this.editedItem.firstname = this.editedItem.user.firstname;
        this.editedItem.lastname = this.editedItem.user.lastname;
        this.editedItem.email = this.editedItem.user.email;
        this.editedItem.phone = this.editedItem.user.phone;
        this.editedItem.password = this.editedItem.user.password;
        this.validatorBankAd(this.editedItem);
        this.validatorsBankInfos.push(this.editedItem);
         
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
    this.$store.dispatch("bank/loadBanks");
    this.$store.dispatch("rib/loadRibs");
    this.$store.dispatch("agency/loadAgencies");
    this.$store.dispatch("user/adminBankInfos");
    this.$store.dispatch("user/validatorsBankInfos");
  }
};
</script>