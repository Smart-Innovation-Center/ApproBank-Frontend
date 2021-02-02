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
                      <li class="nav-item active" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorOMCI'">
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
                </ul>
              </div>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
                    <a class="nav-link" href="#">
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
                    <h4 class="card-title ">Liste des demandes sans bordereau en attente de validation</h4>
                    <p class="card-category" v-if="userInfos.roles[0].slug==='adminBanque'">
                      Ici la liste des demandes d'approvisionnement en UVE (à
                      confirmer ou rejeter)
                    </p>
                    <p class="card-category" v-if="userInfos.roles[0].slug==='validatorOMCI'">
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
                            Banque Bénéficiaire
                          </th>
                          <th>
                            RIB Bénéficiaire
                          </th>
                          <th>
                            Statut
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              1
                            </td>
                            <td>
                              12/01/2021
                            </td>
                            <td class="font-weight-bold">
                              SICmoney
                            </td>
                            <td class="text-orange">
                              5 000 000 F CFA
                            </td>
                            <td>
                              Société Générale
                            </td>
                            <td>
                              Société Générale
                            </td>
                            <td class="text-info">
                              <button
                                data-toggle="modal"
                                data-target="#infoModal"
                                class="btn btn-info btn-sm"
                              >
                                <i class="material-icons">visibility</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='adminBanque'"
                                data-toggle="modal"
                                data-target="#approModal"
                                class="btn btn-success btn-sm"
                              >
                                <i class="material-icons">check</i>
                              </button>
                              <button
                                v-if="userInfos.roles[0].slug==='adminBanque'"
                                data-toggle="modal"
                                data-target="#rejModal"
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
                    <h4 class="card-title ">Liste des demandes avec bordereau en attente de validation</h4>
                    <p class="card-category">
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
                            Agence
                          </th>
                          <th>
                            Montant
                          </th>
                          <th>
                            Bordereau
                          </th>
                          <th>
                            Statut
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              1
                            </td>
                            <td>
                              22/01/2021
                            </td>
                            <td class="font-weight-bold">
                              AGOMCI-PL05
                            </td>
                            <td class="text-orange">
                              4 500 000 F CFA
                            </td>
                            <td>
                              <v-img contain max-height="50" max-width="100" src="assets/img/bordereauVersementCorisBank.png"></v-img>
                            </td>
                            <td class="text-info">
                              <button
                                data-toggle="modal"
                                data-target="#approModal"
                                class="btn btn-success btn-sm"
                              >
                                <i class="material-icons">check</i>
                              </button>
                              <button
                                data-toggle="modal"
                                data-target="#rejModal"
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

              <div class="modal fade" id="approModal" tabindex="-1" role="">
                <div class="modal-dialog modal-login" role="document">
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
                          <h4 class="title">Approuver cette demande</h4>
                        </div>
                      </div>
                      <div class="modal-body">
                        <v-form>
                          <div class="card-body">
                              <v-text-field
                                    label="Date"
                                    type="text"
                                    value="12/01/2021"
                                    disabled
                                ></v-text-field>
                                <v-text-field
                                    label="Agence"
                                    type="text"
                                    value="AGOMCI-PL05"
                                    disabled
                                ></v-text-field>
                                <v-text-field
                                    label="Montant"
                                    type="text"
                                    value="5.000.000 F CFA"
                                    disabled
                                ></v-text-field>
                                <v-text-field
                                    label="Bordereau"
                                    type="text"
                                    value="Fbd5fks00gkr9yz"
                                    disabled
                                ></v-text-field>
                          </div>
                        </v-form>
                      </div>
                      <div class="modal-footer justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-success btn-wd btn-lg"
                          @click="vide"
                           onclick='swal({ title:"Succès !", text: "Approuvé !", type: "success", buttonsStyling: false, timer:1000, confirmButtonClass: "btn btn-success"})'
                        >
                          Valider
                        </button>
                      </div>
                    </div>
                  </div>
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
import { mapGetters, mapState } from "vuex";
export default {
  name: "supply",
  data() {
    return {
      selectedAgency: [],
      selectedRib: []
    };
  },
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos"
    }),
    ...mapState({
      agencies: state => state.agency.agencies,
      ribs: state => state.rib.ribs
    })
  },

  methods: {
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    vide() {
        $("#approModal").hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $("#table tr").remove(); 
    }
  },
  mounted() {
    this.$store.dispatch("agency/loadAgencies");
    this.$store.dispatch("rib/loadRibs");
  }
};
</script>
