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
            <li class="nav-item active">
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
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='adminBanque'">
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
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
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
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
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
                    <router-link class="nav-link" to="utilisateurs">
                      <i class="material-icons">groups</i>
                      <p>Gestion des Utilisateurs</p>
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
              <router-link class="navbar-brand" to="javascript:;">Profil Utilisateur</router-link>
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
                  <router-link class="nav-link" to="dashboard">
                    <i class="material-icons">dashboard</i>
                    <p class="d-lg-none d-md-block">
                      Tableau de bord
                    </p>
                  </router-link>
                </li>
                <li class="nav-item dropdown" v-if="userInfos.roles[0].slug!=='superAdmin'">
                  <router-link
                    class="nav-link"
                    to=""
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
                  </router-link>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <router-link class="dropdown-item" to="notifications">
                      Nouvelle demande en attente de validation !
                    </router-link>
                    <router-link class="dropdown-item" to="notifications">
                      Votre demande a été approuvée (1/2) !
                    </router-link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <router-link
                    class="nav-link"
                    to="javascript:;"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">
                      Mon Compte
                    </p>
                  </router-link>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                  <h4 class="text-center font-weight-bold text-orange text-uppercase">{{ userInfos.name }}</h4>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" to="profile">Mon Profil</router-link>
                    <router-link class="dropdown-item" @click="logout">Me Déconnecter</router-link>
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
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title">Editer Profil</h4>
                    <p class="card-category">
                      Modifiez vos informations de compte
                    </p>
                  </div>
                  <div class="card-body">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Nom Utilisateur</label>
                            <input
                              v-model="userInfos.name"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Email</label>
                            <input
                              v-model="userInfos.email"
                              type="email"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Date Inscription</label>
                            <input
                              v-model="userInfos.created_at"
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Nom de Famille</label>
                            <input 
                              v-model="userInfos.firstname"
                              type="text" 
                              class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Prénom(s)</label>
                            <input 
                              v-model="userInfos.lastname"
                              type="text" 
                              class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Numéro de Téléphone</label>
                            <input 
                              v-model="userInfos.phone"
                              type="text" 
                              class="form-control" />
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-orange btn-fill pull-right" @click="modifierInfos">
                        Enregistrer
                      </button>

                      <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-nav-tabs bg-black">
                  <div class="card-header card-header-warning bg-orange">
                    Editer Mot de Passe
                  </div>
                  <div class="card-body">
                      <div class="container">
                        <div class="form-group">
                          <label for="oldPassword">Mot de Passe Actuel</label>
                          <input
                            type="password"
                            class="form-control"
                            id="oldPassword"
                            v-model="pwd.oldPwd"
                          />
                        </div>
                        <div class="form-group">
                          <label for="newPassword">Nouveau Mot de Passe</label>
                          <input
                            type="password"
                            class="form-control"
                            id="newPassword"
                            v-model="pwd.newPwd1"
                          />
                        </div>
                        <div class="form-group">
                          <label for="confirmNewPassword"
                            >Confirmer Nouveau Mot de Passe</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="confirmNewPassword"
                            v-model="pwd.newPwd"
                          />
                        </div>
                      </div>
                      <button
                        v-if="pwd.newPwd != null && pwd.newPwd1 === pwd.newPwd"
                        type="submit"
                        class="btn btn-orange btn-fill pull-right" @click="modifierPwd">
                        Valider
                      </button>
                  </div>
                </div>
              </div>
              <!-- <div class="col-md-12" v-if="userInfos.id===1">
                <div class="card bg-black">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title ">Comptes Banques</h4>
                    <p class="card-category">
                      Ici vos Relévés d'Identité Banquaire (à renseigner avant
                      transaction)
                    </p>
                    <br /><button
                      class="btn btn-white text-dark btn-round"
                      data-toggle="modal"
                      data-target="#addRIBModal"
                    >
                      <i class="material-icons">add</i> Ajouter
                    </button>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-stripped">
                        <thead class="font-weight-bold">
                          <th>
                            #
                          </th>
                          <th>
                            RIB
                          </th>
                          <th>
                            Banque
                          </th>
                          <th>
                            Description
                          </th>
                          <th>
                            Actions
                          </th>
                        </thead>
                        <tbody>
                          <tr v-for="(rib, index) in ribs" :key="rib.id">
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td class="text-orange">
                              {{ rib.numero }}
                            </td>
                            <td class="font-weight-bold">
                              {{ rib.bank.nom }}
                            </td>
                            <td>
                              {{ rib.description }}
                            </td>
                            <td class="td-actions">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Modifier"
                                class="btn btn-black btn-link btn-sm"
                              >
                                <i
                                  class="material-icons"
                                  @click="editRib(rib.id)"
                                  >edit</i
                                >
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Supprimer"
                                class="btn btn-danger btn-link btn-sm"
                              >
                                <i
                                  class="material-icons"
                                  @click="deleteRib(rib.id)"
                                  >close</i
                                >
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="row">
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='structureOM'">
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
  name: "profile",
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
      
        firstname: "",
        lastname: "",
        name: "",
        email: "",
        phone: "",
        pwd: {
          id: null,
          oldPwd: null,
          newPwd: null
        },
      rib: {},
      editedIndex: -1,
      editedItem: {
        numero: "",
        description: "",
        userID: "",
        bankID: "",
        orange: "",
        visible: true,
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
      InfoUp: "user/updateInfos",
      PwdUp: "user/updatePwd",
      ribAd: "rib/addRib",
      ribDel: "rib/deleteRib",
      ribUpd: "rib/updateRib"
    }),
    modifierInfos(){
      //this.phone = this.userInfos.phone;
      this.InfoUp(this.userInfos);
    },
    modifierPwd(){
      this.pwd.id = this.userInfos.id;
      this.PwdUp(this.pwd);
    },
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
