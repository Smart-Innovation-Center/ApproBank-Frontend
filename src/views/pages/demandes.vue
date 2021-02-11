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
            <li class="nav-item ">
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
            <li class="nav-item active">
                    <a
                      class="nav-link collapsed text-truncate"
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
                      <li class="nav-item active" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque' || userInfos.roles[0].slug==='validatorOMCI'">
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
            <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI'">
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
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
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
              <a class="navbar-brand" href="javascript:;"
                >Demandes d'approvisionnement en attente d'approbation</a
              >
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
                  <a class="nav-link" href="javascript:;">
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
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title font-weight-bold">Liste des demandes sans bordereau en attente de validation</h4>
                    <p class="card-category font-weight-bold" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque'">
                      Ici la liste des demandes d'approvisionnement en UVE (à
                      confirmer ou rejeter)
                    </p>
                    <p class="card-category font-weight-bold" v-if="userInfos.roles[0].slug==='validatorOMCI'">
                      Ici la liste des demandes d'approvisionnement en UVE (vous pouvez juste consulter)
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-stripped" id="table">
                        <thead class="font-weight-bold">
                          <th>
                            #
                          </th>
                          <th>
                            Date
                          </th>
                          <th>
                            Client
                          </th>
                          <th>
                            Montant
                          </th>
                          <th>
                            RIB Expéditeur
                          </th>
                          <th>
                            RIB Bénéficiaire
                          </th>
                          <th>
                            Action
                          </th>
                        </thead>
                        <tbody>
                          <tr v-for="(supplySansB, index) in suppliesSansB" :key="supplySansB.id">
                            <td>
                              {{ index + 1 }}
                            </td>
                             <td>
                              {{ supplySansB.created_at | formatDate }}
                            </td>
                            <td class="font-weight-bold">
                              {{ supplySansB.user.firstname }} {{ supplySansB.user.lastname }}
                            </td>
                            <td class="text-orange">
                              {{ supplySansB.montant }} F CFA
                            </td>
                            <td class="font-weight-bold text-uppercase">
                              {{ supplySansB.rib_exp.numero }}
                            </td>
                            <td class="font-weight-bold text-uppercase">
                             {{ supplySansB.rib_benef.numero }}
                            </td>
                            <td class="text-info">
                              <button
                                data-toggle="modal"
                                data-target="#infoModalSans"
                                class="btn btn-info btn-sm"
                                @click="viewSupplySans(index)"
                              >
                                <i class="material-icons">visibility</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque'"
                                data-toggle="modal"
                                data-target="#approModalSans"
                                class="btn btn-success btn-sm"
                              >
                                <i class="material-icons">check</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque'"
                                data-toggle="modal"
                                data-target="#rejModalSans"
                                class="btn btn-danger btn-sm"
                              >
                                <i class="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

<div class="col-md-12" v-if="userInfos.roles[0].slug==='validatorOMCI'">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title font-weight-bold">Liste des demandes avec bordereau en attente de validation</h4>
                    <p class="card-category font-weight-bold">
                      Ici la liste des demandes d'approvisionnement en UVE (à
                      confirmer ou rejeter)
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-stripped" id="table">
                        <thead class="font-weight-bold">
                          <th>
                            #
                          </th>
                          <th>
                            Date
                          </th>
                          <th>
                            Client
                          </th>
                          <th>
                            Montant
                          </th>
                          <th>
                            RIB Expéditeur
                          </th>
                          <th>
                            RIB Bénéficiaire
                          </th>
                          <th>
                            Numéro Bordereau
                          </th>
                          <th>
                            Photo Bordereau
                          </th>
                          <th>
                            Action
                          </th>
                        </thead>
                        <tbody>
                          <tr v-for="(supplyAvecB, index) in suppliesAvecB" :key="supplyAvecB.id">
                            <td>
                              {{ index + 1 }}
                            </td>
                             <td>
                              {{ supplyAvecB.created_at | formatDate }}
                            </td>
                            <td class="font-weight-bold">
                              {{ supplyAvecB.user.firstname }} {{ supplyAvecB.user.lastname }}
                            </td>
                            <td class="text-orange">
                              {{ supplyAvecB.montant }} F CFA
                            </td>
                            <td class="font-weight-bold text-uppercase">
                              {{ supplyAvecB.rib_exp.numero }}
                            </td>
                            <td class="font-weight-bold text-uppercase">
                             {{ supplyAvecB.rib_benef.numero }}
                            </td>
                            <td class="font-weight-bold text-uppercase">
                              {{ supplyAvecB.numero_bordereau }}
                            </td>
                            <td class="font-weight-bold text-uppercase">
                              <a :href="'http://127.0.0.1:8000/storage/'+ supplyAvecB.photo_bordereau" target="_blank">
                                <img :src="'http://127.0.0.1:8000/storage/'+ supplyAvecB.photo_bordereau" alt="photoBOrdereau" class="my-3" contain height="100" />
                              </a>
                            </td>
                            <td class="text-info">
                              <button
                                data-toggle="modal"
                                data-target="#infoModalAvec"
                                class="btn btn-info btn-sm"
                                @click="viewSupplyAvec(index)"
                              >
                                <i class="material-icons">visibility</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='validatorOMCI'"
                                data-toggle="modal"
                                data-target="#approModalAvec"
                                class="btn btn-success btn-sm"
                                @click="approSupplyAvec(index)"
                              >
                                <i class="material-icons">check</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='validatorOMCI'"
                                data-toggle="modal"
                                data-target="#rejModalAvec"
                                class="btn btn-danger btn-sm"
                              >
                                <i class="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="infoModalSans" tabindex="-1" role="">
      <div class="modal-dialog" role="document">
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
                <h4 class="title">Informations sur la demande d'Approvisionnement</h4>
              </div>
            </div>
            <div class="card-body">
              <v-text-field
                label="Date de la demande"
                type="text"
                v-model="viewSupplySansItem.created_at"
                disabled
              ></v-text-field>
              <v-text-field
                label="Nom Client"
                type="text"
                v-model="viewSupplySansItem.firstname"
                disabled
              ></v-text-field>
              <v-text-field
                label="Prénom(s) Client"
                type="text"
                v-model="viewSupplySansItem.lastname"
                disabled
              ></v-text-field>
              <v-text-field
                label="Montant"
                type="text"
                v-model="viewSupplySansItem.montant+' F CFA'"
                disabled
              ></v-text-field>
              <v-text-field
                label="RIB expéditeur"
                type="text"
                v-model="viewSupplySansItem.ribexp"
                disabled
              ></v-text-field>
              <v-text-field
                label="RIB bénéficiaire"
                type="text"
                v-model="viewSupplySansItem.ribbenef"
                disabled
              ></v-text-field>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                class="btn btn-default btn-wd btn-lg"
                data-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="infoModalAvec" tabindex="-1" role="">
      <div class="modal-dialog" role="document">
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
                <h4 class="title">Informations sur la demande d'Approvisionnement</h4>
              </div>
            </div>
            <div class="card-body">
              <v-card>
                <v-img
                  height="200"
                  :src="'http://127.0.0.1:8000/storage/'+ viewSupplyAvecItem.photo_bordereau" alt="photoBOrdereau"
                ></v-img>
                <v-card-title>N° bordereau : {{ viewSupplyAvecItem.numero_bordereau }}</v-card-title>
                <v-card-text>
                  <div class="my-4 subtitle-1">
                    Client
                  </div>
                  <div class="h4 font-weight-bold">{{ viewSupplyAvecItem.firstname }} {{ viewSupplyAvecItem.lastname }}</div>
                  <div class="my-4 subtitle-1">
                    Montant
                  </div>
                  <div class="h4 font-weight-bold text-orange">{{ viewSupplyAvecItem.montant }} F CFA</div>
                </v-card-text>
                <v-card-title>Informations Transfert</v-card-title>
                <v-card-text>
                  <v-chip-group
                    active-class="orange darken-3 accent-4 white--text"
                    column
                  >
                    <h5 class="font-weight-bold">RIB Expéditeur : <v-chip>{{ viewSupplyAvecItem.ribexp }}</v-chip></h5>
                    <br/>
                    <h5 class="font-weight-bold">RIB Bénéficiaire : <v-chip>{{ viewSupplyAvecItem.ribbenef }}</v-chip></h5>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="approModalAvec" tabindex="-1" role="">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="card card-signup card-plain">
            <div class="modal-header">
              <div
                class="card-header card-header-success text-center col-md-12"
              >
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="material-icons">clear</i>
                </button>
                <h4 class="title">Approuver la demande d'Approvisionnement</h4>
              </div>
            </div>
            <div class="card-body">
              <v-card>
                <v-img
                  height="200"
                  :src="'http://127.0.0.1:8000/storage/'+ approSupplyAvecItem.photo_bordereau" alt="photoBOrdereau"
                ></v-img>
                <v-card-title>N° bordereau : {{ approSupplyAvecItem.numero_bordereau }}</v-card-title>
                <v-card-text>
                  <div class="my-4 subtitle-1">
                    Client
                  </div>
                  <div class="h4 font-weight-bold">{{ approSupplyAvecItem.firstname }} {{ approSupplyAvecItem.lastname }}</div>
                  <div class="my-4 subtitle-1">
                    Montant
                  </div>
                  <div class="h4 font-weight-bold text-orange">{{ approSupplyAvecItem.montant }} F CFA</div>
                </v-card-text>
                <v-card-title>Informations Transfert</v-card-title>
                <v-card-text>
                  <v-chip-group
                    active-class="orange darken-3 accent-4 white--text"
                    column
                  >
                    <h5 class="font-weight-bold">RIB Expéditeur : <v-chip>{{ approSupplyAvecItem.ribexp }}</v-chip></h5>
                    <br/>
                    <h5 class="font-weight-bold">RIB Bénéficiaire : <v-chip>{{ approSupplyAvecItem.ribbenef }}</v-chip></h5>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="submit"
                class="btn btn-success btn-wd btn-lg"
                @click="approvAvec(approSupplyAvecItem.id)"
                >
                Approuver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "supply",
  data() {
    return {
      viewSupplySansItem: {
        firstname: null,
        lastname: null,
        montant: null,
        ribexp: null,
        ribbenef: null
      },
      viewSupplyAvecItem: {
        firstname: null,
        lastname: null,
        montant: null,
        ribexp: null,
        ribbenef: null
      },
      approSupplyAvecItem: {
        firstname: null,
        lastname: null,
        montant: null,
        ribexp: null,
        ribbenef: null
      },
      index: 1,
      supplySansB: {},
      supplyAvecB: {},
      selectedAgency: [],
      selectedRib: []
    };
  },
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos",
      adminBankInfos: "user/adminBankInfos"
    }),
    ...mapState({
      agencies: state => state.agency.agencies,
      ribs: state => state.rib.ribs,
      suppliesAvecB: state => state.supply.suppliesAvecB,
      suppliesSansB: state => state.supply.suppliesSansB
    })
  },

  methods: {
    ...mapActions({
      validAvec: "supply/validSupplyAvec",
    }),
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    approvAvec(item) {
      console.log(item)
      this.validAvec(item)
      $("#approModalAvec").hide();
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      this.$router.push({ name: "listeDemandes" });
    },
    viewSupplySans(index) {
      
      //this.index = this.supply
      this.viewSupplySansItem = this.suppliesSansB.[index];
      console.log(this.viewSupplySansItem);
      this.viewSupplySansItem.firstname = this.viewSupplySansItem.user.firstname
      this.viewSupplySansItem.lastname = this.viewSupplySansItem.user.lastname
      this.viewSupplySansItem.ribexp = this.viewSupplySansItem.rib_exp.numero
      this.viewSupplySansItem.ribbenef = this.viewSupplySansItem.rib_benef.numero
      $("#infoModalSans").modal("show");
    },
    viewSupplyAvec(index) {
      
      //this.index = this.supply
      this.viewSupplyAvecItem = this.suppliesAvecB.[index];
      console.log(this.viewSupplyAvecItem);
      this.viewSupplyAvecItem.firstname = this.viewSupplyAvecItem.user.firstname
      this.viewSupplyAvecItem.lastname = this.viewSupplyAvecItem.user.lastname
      this.viewSupplyAvecItem.ribexp = this.viewSupplyAvecItem.rib_exp.numero
      this.viewSupplyAvecItem.ribbenef = this.viewSupplyAvecItem.rib_benef.numero
      $("#infoModalAvec").modal("show");
    },
    approSupplyAvec(index) {
      //this.index = this.supply
      this.approSupplyAvecItem = this.suppliesAvecB.[index];
      console.log(this.approSupplyAvecItem);
      this.approSupplyAvecItem.firstname = this.approSupplyAvecItem.user.firstname
      this.approSupplyAvecItem.lastname = this.approSupplyAvecItem.user.lastname
      this.approSupplyAvecItem.ribexp = this.approSupplyAvecItem.rib_exp.numero
      this.approSupplyAvecItem.ribbenef = this.approSupplyAvecItem.rib_benef.numero
      $("#approModalAvec").modal("show");
    }
  },
  mounted() {
    this.$store.dispatch("agency/loadAgencies");
    this.$store.dispatch("rib/loadRibs");
    this.$store.dispatch("supply/loadSuppliesSansB");
    this.$store.dispatch("supply/loadSuppliesAvecB");
  }
};
</script>
