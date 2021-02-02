<template>
  <v-app>
    <div class="wrapper ">
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
            <li class="nav-item ">
              <a class="nav-link" href="notifications">
                <i class="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI'">
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
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">groups</i>
                      <p>Gestion des Utilisateurs</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
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
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Liste des Structures</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Liste des Agences</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Approvisionner une agence</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='validatorOMCI'">
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
                    <a class="nav-link" href="#">
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
              <a class="navbar-brand" href="javascript:;">Comptes Banque Orange</a>
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
                <li class="nav-item dropdown">
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
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI'">
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
                      <v-toolbar-title v-if="userInfos.roles[0].slug==='validatorOMCI'">Relévés d'Identité Banquaire d'ORANGE</v-toolbar-title>
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
                          <v-card-title class="headline">Êtes-vous sûr de vouloir supprimer votre RIB : {{editedItem.numero}} </v-card-title>
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
    </div>
    <!-- <div class="modal fade" id="addRIBModal" tabindex="-1" role="">
      <div class="modal-dialog modal-login" role="document">
        <div class="modal-content">
          <div class="card card-signup card-plain">
            <div class="modal-header">
              <div
                class="card-header card-header-primary bg-orange text-center col-md-12"
              >
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="material-icons">clear</i>
                </button>
                <h4 class="title">Ajouter un RIB</h4>
              </div>
            </div>
            <div class="modal-body">
              <v-form ref="addRibForm" :value="formValid">
                <div class="card-body">
                  <v-text-field
                    label="RIB"
                    name="numero"
                    prepend-icon="mdi-note"
                    type="text"
                    v-model="newRib.numero"
                  ></v-text-field>

                  <v-select
                    v-model="newRib.bankID"
                    :items="banks"
                    prepend-icon="account_balance"
                    item-value="id"
                    item-text="nom"
                    placeholder="BANQUE *"
                    single-line
                    return-object
                  >
                  </v-select>

                  <textarea
                    class="form-control"
                    prepend-icon="reorder"
                    rows="5"
                    placeholder="Description"
                    v-model="newRib.description"
                  ></textarea>
                </div>
              </v-form>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="submit"
                class="btn btn-primary btn-wd btn-lg"
                @click="addNewRib()"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editRIBModal" tabindex="-1" role="">
      <div class="modal-dialog modal-login" role="document">
        <div class="modal-content">
          <div class="card card-signup card-plain">
            <div class="modal-header">
              <div
                class="card-header card-header-primary bg-black text-center col-md-12"
              >
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="material-icons">clear</i>
                </button>
                <h4 class="title">Modifier RIB</h4>
              </div>
            </div>
            <div class="modal-body">
              <v-form ref="editRibForm" :value="formValid">
                <div class="card-body">
                  <v-text-field
                    label="RIB"
                    name="numero"
                    prepend-icon="mdi-note"
                    type="text"
                    v-model="rib.numero"
                  ></v-text-field>

                  <v-select
                    v-model="rib.bankID"
                    :items="banks"
                    prepend-icon="account_balance"
                    item-value="id"
                    item-text="nom"
                    placeholder="BANQUE *"
                    single-line
                    return-object
                  >
                  </v-select>

                  <textarea
                    class="form-control"
                    prepend-icon="reorder"
                    rows="5"
                    placeholder="Description"
                    v-model="rib.description"
                  ></textarea>
                </div>
              </v-form>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="submit"
                class="btn btn-primary btn-wd btn-lg"
                @click="updateRib()"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </v-app>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "comptesBanqueOrange",
  data:() => ({
      // selectedBank: [],
      // formValid: false,
      // index: 1,
      // newRib: {
      //   numero: "",
      //   description: "",
      //   userID: "",
      //   bankID: ""
      // },
      // rib: {}
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
        //{ text: 'Date', value: 'created_at' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      rib: {},
      editedIndex: -1,
      editedItem: {
        numero: "",
        description: "",
        userID: "",
        bankID: "",
        orange: ""
      },
      defaultItem: {
        numero: "",
        description: "",
        userID: "",
        bankID: "",
        orange: ""
      },
    selectedAgency: [],
    selectedRib: []
  }),
  computed: {
    formTitle () {
        return this.editedIndex === -1 ? 'Nouveau RIB' : 'Modifier RIB'
      },
    ...mapGetters({
      userInfos: "user/userInfos"
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

          if(this.$store.state.user.userInfos.roles[0].slug==='validatorOMCI'){
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
    // addNewRib() {
    //   if (this.$refs.addRibForm.validate()) {
    //     this.newRib.userID = this.$store.state.user.userInfos.id;
    //     this.newRib.bankID = this.newRib.bankID.id;
    //     this.ribAd(this.newRib)
    //       .then(() => {
    //         this.addNotification({
    //           show: true,
    //           text1: "Rib ajouté avec succès :",
    //           text2: "Vous pouvez effectuer une transaction !"
    //         }).then(() => {
    //           this.$store.dispatch("rib/loadRibs");
    //           // eslint-disable-next-line no-undef
    //           $("#addRIBModal").modal("hide");
    //         });
    //       })
    //       .catch(() => {
    //         this.addNotification({
    //           show: true,
    //           text1: "Echec de l'ajout du RIB :",
    //           text2: "Veuillez vérifier les informations fournies !"
    //         });
    //       });
    //   }
    // },
    // editRib() {
    //   // eslint-disable-next-line no-undef
    //   $("#editRIBModal").modal("show");
    // },
    // updateRib() {
    //   console.log("update RIB");
    // }
  },
  vide() {
        $("#approModal").hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $("#table tr").remove(); 
    },
  mounted() {
    this.$store.dispatch("bank/loadBanks");
    this.$store.dispatch("rib/loadRibs");
    this.$store.dispatch("agency/loadAgencies");
  }
};
</script>
