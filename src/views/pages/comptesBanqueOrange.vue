<template>
  <v-app>
    <div class="wrapper ">
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
                  f    class="nav-link collapsed text-truncate"
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
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
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
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
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
              <a class="navbar-brand" href="javascript:;">Comptes Banque Orange Money CI</a>
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
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="ribs"
                    class="elevation-5"
                  >
                  <template v-slot:top>
                    <v-toolbar
                      flat
                    >
                      <v-toolbar-title v-if="userInfos.roles[0].slug==='structureOM'">Mes Relévés d'Identité Banquaire</v-toolbar-title>
                      <v-toolbar-title v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">Relévés d'Identité Banquaire d'ORANGE</v-toolbar-title>
                        <v-divider
                          class="mx-4"
                          inset
                          vertical
                        ></v-divider>
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
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col
                                  cols="12"
                                  sm="12"
                                  md="12"
                                >
                                  <v-text-field
                                  label="RIB"
                                  name="numero"
                                  prepend-icon="mdi-note"
                                  type="text"
                                  v-model="editedItem.numero"
                                ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="12"
                                  md="12"
                                >
                                  <v-select
                                  v-model="editedItem.bankID"
                                  :items="banks"
                                  prepend-icon="account_balance"
                                  item-value="id"
                                  item-text="nom"
                                  placeholder="BANQUE *"
                                  single-line
                                  return-object
                                >
                                </v-select>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="12"
                                  md="12"
                                  v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'"
                                >
                                  <v-switch 
                                    label="Visible pour demande d'approvisionnement" 
                                    v-model="editedItem.visible"
                                    color="orange darken-3"
                                  >
                                  </v-switch>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="12"
                                  md="12"
                                >
                                  <textarea
                                  class="form-control"
                                  prepend-icon="reorder"
                                  rows="5"
                                  placeholder="Description"
                                  v-model="editedItem.description"
                                ></textarea>
                                </v-col>
                              </v-row>
                            </v-container>
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
                      <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                          <v-card-title class="headline">Êtes-vous sûr de vouloir supprimer le RIB : {{editedItem.numero}} </v-card-title>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" class="btn btn-default btn-link" text @click="closeDelete">Annuler</v-btn>
                            <v-btn color="blue darken-1" class="btn btn-danger" text @click="deleteItemConfirm(editedItem.id)">Supprimer</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.visible="{ item }">
                    {{ item.visible ? "Oui" : "Non" }}
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                      Aucune donnée à afficher
                  </template>
                  </v-data-table>
                </template>
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
  name: "comptesBanqueOrange",
  data:() => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'RIB',
          align: 'start',
          sortable: false,
          value: 'numero',
        },
        { text: 'Banque', value: 'bank.nom' },
        { text: 'Description', value: 'description' },
        { text: 'Visible', value: 'visible' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      rib: {},
      editedIndex: -1,
      editedItem: {
        numero: "",
        description: "",
        userID: "",
        bankID: "",
        orange: "",
        visible: true
      },
      defaultItem: {
        numero: "",
        description: "",
        userID: "",
        bankID: "",
        orange: "",
        visible: true
      },
    selectedAgency: [],
    selectedRib: []
  }),
  computed: {
    formTitle () {
        return this.editedIndex === -1 ? 'Nouveau RIB' : 'Modifier RIB'
      },
    ...mapGetters({
      userInfos: "user/userInfos",
      adminBankInfos: "user/adminBankInfos"
    }),
    ...mapState({
      banks: state => state.bank.banks,
      agencies: state => state.agency.agencies,
      ribs: state => state.rib.ribs
    }),
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
    },
  methods: {
    ...mapActions({
      addNotification: "application/addNotification",
      ribAd: "rib/addRib",
      ribDel: "rib/deleteRib",
      ribUpd: "rib/updateRib"
    }),
    editItem (item) {
        this.editedIndex = this.ribs.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.bankID = this.editedItem.bank.id
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.ribs.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm (id) {
       
                this.ribDel(id)
            
        this.ribs.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.ribs[this.editedIndex], this.editedItem);

        this.ribUpd(this.editedItem)
        } else {
          
          this.editedItem.userID = this.$store.state.user.userInfos.id;
        this.editedItem.bankID = this.editedItem.bankID.id;

        //si c'est une structure qui ajoute le rib alors mettre "orange" à 0 pour dire que c'est pas un rib de ORANGE
          if(this.$store.state.user.userInfos.roles[0].slug==='structureOM'){
            this.editedItem.orange = "0"
          }

          if(this.$store.state.user.userInfos.roles[0].slug==='managerOMCI'){
            this.editedItem.orange = "1"
          }
        this.ribAd(this.editedItem);
        
        
          this.ribs.push(this.editedItem)
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
  }
};
</script>